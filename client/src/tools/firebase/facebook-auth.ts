// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2jFzxkHbouSJbFJlEbm5QA0vCMsy4XEo",
  authDomain: "chat-app-fe273.firebaseapp.com",
  projectId: "chat-app-fe273",
  storageBucket: "chat-app-fe273.appspot.com",
  messagingSenderId: "523998834370",
  appId: "1:523998834370:web:b8f2cf6daedac2507f555b",
  measurementId: "G-YVRRSF16FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();
const firestore = getFirestore(app);

const db = firestore;



export { db, auth, signInWithPopup, 
    FacebookAuthProvider, onAuthStateChanged }; 
