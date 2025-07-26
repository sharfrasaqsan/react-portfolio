// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5qSic6-JDzjZxIFSdNSx5Z-afbu9E9Uo",
  authDomain: "react-portfolio-fb3cc.firebaseapp.com",
  projectId: "react-portfolio-fb3cc",
  storageBucket: "react-portfolio-fb3cc.firebasestorage.app",
  messagingSenderId: "326670938856",
  appId: "1:326670938856:web:689ae6f55e797b3d504f5d",
  measurementId: "G-2Y4GPKEZ0G",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
