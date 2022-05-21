import { useState, useContext } from 'react';
import { auth, storage, STATE_CHANGED, firestore } from '../lib/firebase';
import Loader from './Loader';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ProgressBar, ProgressBarProps } from 'react-bootstrap';
import { serverTimestamp, query, collection, orderBy, getFirestore, setDoc, doc, addDoc } from 'firebase/firestore';
import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';
import Results from './Results';
import axios from 'axios';
// Uploads audio to Firebase Storage
export default function AudioUploader({ script }) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [isResult, setIsResult] = useState(false);
    const [result, setResult] = useState({});
    const { username } = useContext(UserContext);
    // Creates a Firebase Upload Task
    const uploadFile = async (e) => {
        // Get the file
        const file = Array.from(e.target.files)[0];
        const extension = 'wav';
        // const extension = file.type.split('/')[1];

        // Makes reference to the storage bucket location
        const fileRef = ref(storage, `uploads/${auth.currentUser.uid}/${auth.currentUser.uid}_${Date.now()}.${extension}`);
        setUploading(true);

        // Starts the upload
        const task = uploadBytesResumable(fileRef, file)

        // Listen to updates to upload task
        task.on(STATE_CHANGED, (snapshot) => {
            const pct = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
            setProgress(pct);
        });

        // Get downloadURL AFTER task resolves (Note: this is not a native Promise)
        task
            .then((d) => getDownloadURL(fileRef))
            .then((url) => {
                setDownloadURL(url);
                setUploading(false);
            });
    };

    const submitData = async (e) => {
        e.preventDefault();
        setAnalyzing(true)
        const uid = auth.currentUser.uid;
        //const docRef = doc(firestore, 'users', uid, 'speeches', speechID);
        const collectionRef = collection(getFirestore(), 'users', uid, 'speeches')
        const fileName = `${uid}_${Date.now()}.wav`
        // Tip: give all fields a default value here
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
            pronunWordsIdx: [],
            emotion: ''
        };

        toast.success('Data uploaded! Please wait for results');

        //await setDoc(docRef, data);
        const newDocRef = await addDoc(collectionRef, data)
        const newDocID = newDocRef.id
        console.log(newDocID)
        await axios.post(
            process.env.SERVER_API,
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
            setResult(res.data)
            setAnalyzing(false)
            setIsResult(true)
        }).catch((e) => {
            console.log(e)
        })



    }

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <Loader show={uploading} width='120' height='120' />

            </div>

            {
                uploading &&
                <>
                    <div style={{ width: 300 }} className="mt-2">
                        <ProgressBar striped variant='warning' now={progress} animated label={`${progress}%`} />
                    </div>
                </>
            }

            {/* <h3 className='text-center fw-bold'>{progress}%</h3> */}

            {!uploading && (
                <>
                    <div className='d-flex justify-content-center'>
                        <label className="btn btn-secondary-light btn-lg">
                            <i className="bi bi-cloud-arrow-up-fill fs-4"></i> Upload file
                            <input type="file" onChange={uploadFile} accept="audio/wav,audio/mp4,audio/aac,audio/mpeg" />
                        </label>
                    </div>

                </>
            )}
            {downloadURL &&
                <>
                    <div className='d-flex justify-content-center mt-3'>
                        <audio controls>
                            <source src={downloadURL} />
                        </audio>
                    </div>

                    <div className='d-flex justify-content-center mt-5'>
                        <button className='btn btn-primary-light' onClick={submitData}>Submit</button>
                    </div>
                </>}
            
            <div className="d-flex justify-content-center mt-4">
                <Loader show={analyzing} width='120' height='120' />

            </div>

            {
                isResult &&
                <>
                    <Results
                        script = {script}
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
                        pronun_words_idx={result.pronunWordsIdx}
                        emotion={result.emotion} />
                </>
            }
        </>
    );
}