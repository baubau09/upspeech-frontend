import { useReactMediaRecorder, ReactMediaRecorder } from "react-media-recorder";
import AudioSpectrum from "react-audio-spectrum2";
import { useState, useEffect, useContext } from "react";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, query, collection, orderBy, getFirestore, setDoc, doc, addDoc } from 'firebase/firestore';
import { auth, storage, STATE_CHANGED, firestore } from '../lib/firebase';
import { UserContext } from "../lib/context";
import Results from "./Results";

const AudioRecorder = () => {
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,

    } = useReactMediaRecorder({ audio: true });

    // const [uploading, setUploading] = useState(false);
    // const [progress, setProgress] = useState(0);
    // const [downloadURL, setDownloadURL] = useState(null);
    // const { username } = useContext(UserContext);

    // const blobProcessing = async () => {
    //     const audioBlob = await fetch(mediaBlobUrl).then(r => r.blob());
    // }

    const [isResult, setIsResult] = useState(false)

    const submitData = async () => {
        setIsResult(true)
    }


    return (
        <>

            <div className="my-4 d-flex justify-content-center">
                {
                    status == 'idle' || status == 'stopped'
                        ?
                        <button className="btn btn-danger me-2" onClick={startRecording}><i className="bi bi-record-fill fs-4"></i></button>
                        :
                        <button className="btn btn-record me-2" onClick={stopRecording}><i className="bi bi-stop-circle-fill fs-4"></i></button>
                }
                
            </div>
            <div className='d-flex justify-content-center'>
                <audio src={mediaBlobUrl} controls autoPlay loop />
            </div>

            <div className='d-flex justify-content-center mt-5 mb-5'>
                <button className='btn btn-primary-light' onClick={submitData}>Submit</button>
            </div>

            {
                isResult && 
                <>
                <Results 
                n_words="86"
                pace="Just Right" 
                n_pace="90"
                fillers="Needs Improvement"
                n_fillers="33"
                pct_fillers="41.6"
                pronun="Good"
                n_pronun="6"
                pct_pronun="6.97" 
                emotion="Neutral"/>
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