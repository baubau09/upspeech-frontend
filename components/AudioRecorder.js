import { useReactMediaRecorder, ReactMediaRecorder } from "react-media-recorder";
import AudioSpectrum from "react-audio-spectrum2";
import { useState, useEffect, useContext } from "react";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, query, collection, orderBy, getFirestore, setDoc, doc, addDoc } from 'firebase/firestore';
import { auth, storage, STATE_CHANGED, firestore } from '../lib/firebase';
import { UserContext } from "../lib/context";
import Results from "./Results";
import axios from "axios";
import Loader from "./Loader";
import toast from "react-hot-toast";

const AudioRecorder = ({ script }) => {
    const uid = auth.currentUser.uid;
    const fileName = `${uid}_${Date.now()}.wav`

    const [downloadURL, setDownloadURL] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [isResult, setIsResult] = useState(false);
    const [result, setResult] = useState();
    const { username } = useContext(UserContext);

    // Creates a Firebase Upload Task
    const uploadFile = async (audio) => {
        // Get the file
        // const file = Array.from(e.target.files)[0];
        const file = audio
        // const extension = file.type.split('/')[1];

        // Makes reference to the storage bucket location
        const fileRef = ref(storage, `uploads/${uid}/${fileName}`);

        // Starts the upload
        const task = uploadBytesResumable(fileRef, file)

        // Listen to updates to upload task
        task.on(STATE_CHANGED, (snapshot) => {
            const pct = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
        });

        // Get downloadURL AFTER task resolves (Note: this is not a native Promise)
        task
            .then((d) => getDownloadURL(fileRef))
            .then((url) => {
                setDownloadURL(url);
            });
    };

    const blobProcessing = async () => {

        setAnalyzing(true)
        // const audioBlob = await fetch(mediaBlobUrl).then(r => { r.blob() })
        //const docRef = doc(firestore, 'users', uid, 'speeches', speechID);
        const collectionRef = collection(getFirestore(), 'users', uid, 'speeches')

        // Tip: give all fields a default value here
        if (downloadURL !== null) {
            console.log(downloadURL)
            const data = {
                uid,
                username,
                wordCount: 0,
                script: script,
                audioURL: downloadURL,
                fileName: fileName,
                uploadedAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                fillers: 0,
                fillersDesc: '',
                fillersPct: 0,
                pace: 0,
                paceDesc: '',
                pronunErr: 0,
                pronunErrDesc: '',
                pronunErrPct: 0,
                pronunWords: [],
                emotion: ''
            };

            toast.success('Recording uploaded! Please wait for results');

            //await setDoc(docRef, data);
            const newDocRef = await addDoc(collectionRef, data)
            const newDocID = newDocRef.id
            console.log(newDocID)
            await axios.post(
                `http://127.0.0.1:5000/api/eval`,
                {
                    uid,
                    username,
                    script: script,
                    audioURL: downloadURL,
                    fileName: fileName,
                    uploadedAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                    speechID: newDocID
                }
            ).then((res) => {
                const myData = res.data
                console.log(myData)
                setResult(myData)
                setAnalyzing(false)
                setIsResult(true)
            }).catch((e) => {
                console.log(e)
            })

        }
    }



    // const submitData = async () => {
    //     setIsResult(true)
    // }


    return (
        <>

            <div className="my-4 d-flex justify-content-center">
                <ReactMediaRecorder
                    audio
                    blobPropertyBag={{
                        type: "audio/wav"
                    }}
                    onStop={(blobUrl, blob) => { 
                        console.log(blob); 
                        uploadFile(blob)
                    }}
                    render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                        <>
                            <div>
                                {
                                    status == 'idle' || status == 'stopped'
                                        ?
                                        <button className="btn btn-danger me-2" onClick={startRecording}><i className="bi bi-record-fill fs-4"></i></button>
                                        :
                                        <button className="btn btn-record me-2" onClick={stopRecording}><i className="bi bi-stop-circle-fill fs-4"></i></button>
                                }
                            </div>

                            <div className='d-flex justify-content-center'>
                                <audio src={mediaBlobUrl} controls autoPlay />
                            </div>
                        </>
                    )}
                />


            </div>


            <div className='d-flex justify-content-center mt-5 mb-5'>
                <button className='btn btn-primary-light' onClick={blobProcessing}>Submit</button>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <Loader show={analyzing} width='120' height='120' />

            </div>

            {
                isResult &&
                <>
                    <Results
                        n_words={result.wordCount}
                        pace={result.paceDesc}
                        n_pace={result.pace}
                        fillers={result.fillersDesc}
                        n_fillers={result.fillers}
                        pct_fillers={result.fillersPct}
                        pronun={result.pronunErrDesc}
                        n_pronun={result.pronunErr}
                        pct_pronun={result.pronunErrPct}
                        pronun_words={result.pronunWords}
                        emotion={result.emotion} />
                </>
            }


            {/* <div>
                {
                    !uploading &&
                    <>  
                    <div>
                    
                    </div>
                        <AudioSpectrum
                            id="audio-canvas"
                            height={200}
                            width={300}
                        />
                    </>
                }
            </div> */}
        </>
    )
}

export default AudioRecorder