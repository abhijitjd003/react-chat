// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlpBrPcT9EGE5MifEsaJr--MK_l3HynlU",
  authDomain: "react-chat-f9616.firebaseapp.com",
  projectId: "react-chat-f9616",
  storageBucket: "react-chat-f9616.appspot.com",
  messagingSenderId: "359264575664",
  appId: "1:359264575664:web:67b176a23d0b1355125b75",
  measurementId: "G-1TXMCQDLDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
