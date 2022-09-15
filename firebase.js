import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW3Ret2mo9GR6Z8QptI51zl-PIrbZxxVE",
    authDomain: "designer-template.firebaseapp.com",
    projectId: "designer-template",
    storageBucket: "designer-template.appspot.com",
    messagingSenderId: "654353105604",
    appId: "1:654353105604:web:0da7b969ef4ea12ef57f91",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
