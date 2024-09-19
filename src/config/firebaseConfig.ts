// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYJwbLRg0gO_1fD5syW5ZsR-W11KmRJDU",
  authDomain: "portafolio-9fedf.firebaseapp.com",
  projectId: "portafolio-9fedf",
  storageBucket: "portafolio-9fedf.appspot.com",
  messagingSenderId: "118333403782",
  appId: "1:118333403782:web:6d8c45df1f1b8a9d74d707"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(firebaseApp);