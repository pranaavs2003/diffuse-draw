// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8Hvb0Af0Ww6B46ASRGEx8yVc1ZQ1JGBE",
  authDomain: "diffusedraw.firebaseapp.com",
  projectId: "diffusedraw",
  storageBucket: "diffusedraw.appspot.com",
  messagingSenderId: "1067868049635",
  appId: "1:1067868049635:web:68b0cd9e7df6d256aaf5d6",
  measurementId: "G-F5X85V7Z5Q"
};

// Initialize Firebase
const app = (getApps().length) ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);