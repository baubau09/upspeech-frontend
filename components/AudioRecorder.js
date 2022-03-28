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
            <div>
                <p>{status}</p>
                <div className="my-4">
                    <button className="btn btn-danger me-2" onClick={startRecording}>Start Recording</button>
                    <button className="btn btn-light" onClick={stopRecording}>Stop Recording</button>
                </div>
                    

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