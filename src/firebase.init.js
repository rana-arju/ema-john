// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhEqLBnlw5ynsbVAGDZPJc84amOblNHI4",
  authDomain: "ema-john-project-12fce.firebaseapp.com",
  projectId: "ema-john-project-12fce",
  storageBucket: "ema-john-project-12fce.appspot.com",
  messagingSenderId: "1037494143547",
  appId: "1:1037494143547:web:a347ce5ee485221ef3aa1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;