// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBegBa0fpIPxl8_ip8agfgpWp2BlyPt3eQ",
  authDomain: "content-manager12.firebaseapp.com",
  projectId: "content-manager12",
  storageBucket: "content-manager12.appspot.com",
  messagingSenderId: "1032313450211",
  appId: "1:1032313450211:web:e7cb782ba8992def915fd6",
  measurementId: "G-2S35RQYCVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)