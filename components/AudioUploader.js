import { useState, useContext } from 'react';
import { auth, storage, STATE_CHANGED, firestore } from '../lib/firebase';
import Loader from './Loader';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ProgressBar, ProgressBarProps } from 'react-bootstrap';
import { serverTimestamp, query, collection, orderBy, getFirestore, setDoc, doc, addDoc } from 'firebase/firestore';
import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';
// Uploads audio to Firebase Storage
export default function AudioUploader({script}) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState(null);
    const { username } = useContext(UserContext);
    // Creates a Firebase Upload Task
    const uploadFile = async (e) => {
        // Get the file
        const file = Array.from(e.target.files)[0];
        const extension = 'wav';
        // const extension = file.type.split('/')[1];

        // Makes reference to the storage bucket location
        const fileRef = ref(storage, `uploads/${auth.currentUser.uid}/${Date.now()}.${extension}`);
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
        const uid = auth.currentUser.uid;
        //const docRef = doc(firestore, 'users', uid, 'speeches', speechID);
        const collectionRef = collection(getFirestore(), 'users', uid, 'speeches')

        // Tip: give all fields a default value here
        const data = {
            uid,
            username,
            wordCount: 0,
            script: script,
            audioURL: downloadURL,
            uploadedAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            fillers: 0,
            fillersDesc: '',
            fillersPct: 0,
            pace: 0,
            paceDesc: '',
            pronunErr: 0,
            pronunErrDesc: '',
            pronunErrPct: 0
        };

        //await setDoc(docRef, data);
        const  newDocRef = await addDoc(collectionRef, data)
        const newDocID = newDocRef.id

        toast.success('Data uploaded!');

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
                        <label className="btn btn-secondary-light">
                            🎤 Upload file
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
        </>
    );
}