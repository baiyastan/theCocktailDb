// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgHeNLXv16eC9BH_ybsN8LQU744h8_uic",
  authDomain: "login-register-a-18.firebaseapp.com",
  projectId: "login-register-a-18",
  storageBucket: "login-register-a-18.appspot.com",
  messagingSenderId: "206931719967",
  appId: "1:206931719967:web:8ad0bf4bb2e7792bf6222a",
  measurementId: "G-R1Z9P9SQDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
