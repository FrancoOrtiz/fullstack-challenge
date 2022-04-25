// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-auth-97d8f.firebaseapp.com",
  projectId: "react-auth-97d8f",
  storageBucket: "react-auth-97d8f.appspot.com",
  messagingSenderId: "342470529179",
  appId: "1:342470529179:web:a2a24be4d7cc4044b2b63e",
  measurementId: "G-KH8B1VE05P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
