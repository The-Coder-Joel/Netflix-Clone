// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp ({
  apiKey: "AIzaSyDSicrj3SQxQ2j3tQVj8tb9vHVoSMdyh8A",
  authDomain: "netflix-clone-8eb17.firebaseapp.com",
  projectId: "netflix-clone-8eb17",
  storageBucket: "netflix-clone-8eb17.appspot.com",
  messagingSenderId: "932857872355",
  appId: "1:932857872355:web:244e542823dfa60e04ead6"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app