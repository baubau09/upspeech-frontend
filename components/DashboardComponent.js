import { useState, useContext, useEffect } from 'react';
import { getUserWithUsername, auth, storage, STATE_CHANGED, firestore, postToJSON } from '../lib/firebase';
import Loader from '../components/Loader';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { serverTimestamp, query, collection, orderBy, where, limit, getFirestore, getDocs, setDoc, doc, addDoc } from 'firebase/firestore';
import { UserContext } from '../lib/context';
import { useCollection } from 'react-firebase-hooks/firestore';
import axios from 'axios';
import PaceChart from '../components/ChartPace'
import FilledPausesChart from '../components/ChartFilledPauses';
import PronunChart from '../components/ChartPronun';
import EmotionChart from '../components/ChartEmotion';

const LIMIT = 30

const DashboardComponent = () => {
    const { user, username } = useContext(UserContext);
    const [speeches, setSpeeches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [speechesEnd, setSpeechesEnd] = useState();
    useEffect(() => {
      const fetchData = async () => {
        if (user) {
            const collectionRef =  collection(getFirestore(), 'users', user.uid, 'speeches')
            const postsQuery = query(collectionRef, orderBy("uploadedAt", "desc"), limit(LIMIT));
            const posts = (await getDocs(postsQuery)).docs.map(postToJSON);
            return posts
        }
      }

      fetchData().then(r => setSpeeches(r)).catch((e) => console.log(e))
      
    }, [user])

    return (
        <>
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h6 className="fw-bold text-center">Speech speed (wpm) from the last 30 submissions over time</h6>
                        <PaceChart speeches={speeches}/>
                    </div>
                    <div className="col">
                        <h6 className="fw-bold text-center">Number of Filled Pauses from the last 30 submissions over time</h6>
                        <FilledPausesChart speeches={speeches} />
                    </div>
                </div>
                <div className="row">
                <div className="col">
                    <h6 className="fw-bold text-center">Number of incorrect pronunciations from the last 30 submissions over time</h6>
                    <PronunChart speeches={speeches}/>
                </div>
                <div className="col">
                    <h6 className="fw-bold text-center">Number of emotion distribution from the last 30 submissions</h6>
                    <EmotionChart speeches={speeches}/>
                </div>
            </div>
            </div>
            

        </>
    )
}

export default DashboardComponent