// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsGp6qMzIY7MlYf5tVK5Vq7aALVXsj9QY",
  authDomain: "finance-manager-a851d.firebaseapp.com",
  projectId: "finance-manager-a851d",
  storageBucket: "finance-manager-a851d.appspot.com",
  messagingSenderId: "816308606628",
  appId: "1:816308606628:web:419f07102b67e46e46f831",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const dataBase = getFirestore(firebaseApp);
