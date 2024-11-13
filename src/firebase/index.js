// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLyN6JdPRBt5OFzag_ga5LGdlTbXq9DA",
  authDomain: "gopeshsnetflix.firebaseapp.com",
  projectId: "gopeshsnetflix",
  storageBucket: "gopeshsnetflix.firebasestorage.app",
  messagingSenderId: "991033782865",
  appId: "1:991033782865:web:3dbd0a025bba0cc72b3e70",
  measurementId: "G-VPE4WCKQJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };
