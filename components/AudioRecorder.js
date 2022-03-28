import { useReactMediaRecorder, ReactMediaRecorder } from "react-media-recorder";
import AudioSpectrum from "react-audio-spectrum2";
import { useState, useEffect, useContext } from "react";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, query, collection, orderBy, getFirestore, setDoc, doc, addDoc } from 'firebase/firestore';
import { auth, storage, STATE_CHANGED, firestore } from '../lib/firebase';
import { UserContext } from "../lib/context";

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
            <div>
            <audio src={mediaBlobUrl} controls autoPlay loop />
            </div>


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