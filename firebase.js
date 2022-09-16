import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZQ47jU4XYvuFpGE-cq0FYZuu0eCIMnmU",
    authDomain: "artist-template-3e567.firebaseapp.com",
    projectId: "artist-template-3e567",
    storageBucket: "artist-template-3e567.appspot.com",
    messagingSenderId: "665743102092",
    appId: "1:665743102092:web:f6f8533cad948acf88eba9",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
