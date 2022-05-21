import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FB_API,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID
};

// Initialize firebase
// You can only initialize once, but in some cases Next will try to run the code twice in development
// If initializeApp already called for an existing project, it's going to throw an error
// But we can avoid that by using try catch
function createFirebaseApp(config) {
    try {
        return getApp();
    } catch {
        return initializeApp(config);
    }
}
const firebaseApp = createFirebaseApp(firebaseConfig);

// Export auth in firebase sdk
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
    // const usersRef = collection(firestore, 'users');
    // const query = usersRef.where('username', '==', username).limit(1);

    const q = query(
        collection(firestore, 'users'),
        where('username', '==', username),
        limit(1)
    )
    const userDoc = (await getDocs(q)).docs[0];
    return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        uploadedAt: data?.uploadedAt.toMillis() || 0,
        updatedAt: data?.updatedAt.toMillis() || 0,
    };
}