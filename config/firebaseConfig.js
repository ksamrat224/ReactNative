// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAueethxk2Jnxo8J9H4jwbST_L4EZhHQk",
  authDomain: "dine-time-sam.firebaseapp.com",
  projectId: "dine-time-sam",
  storageBucket: "dine-time-sam.firebasestorage.app",
  messagingSenderId: "678046653027",
  appId: "1:678046653027:web:d95ab672c47de904e2f656",
  measurementId: "G-D3NJZ3VPR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);