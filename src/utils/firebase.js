// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtv5Czrp4dwNqXnbtBV1oEJQC9AcLUBWQ",
  authDomain: "hisabkitab-89ca8.firebaseapp.com",
  projectId: "hisabkitab-89ca8",
  storageBucket: "hisabkitab-89ca8.appspot.com",
  messagingSenderId: "599763891135",
  appId: "1:599763891135:web:67ffa4fc386805b54de70a"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const dataBase = getFirestore(firebaseApp)