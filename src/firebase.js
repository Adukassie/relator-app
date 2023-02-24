// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr4cqWaMK52TTj7ZsJMVJulSJPowxudKw",
  authDomain: "realtor-clone-4156f.firebaseapp.com",
  projectId: "realtor-clone-4156f",
  storageBucket: "realtor-clone-4156f.appspot.com",
  messagingSenderId: "354967625297",
  appId: "1:354967625297:web:a7f87d5d1c0fd566716270",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
