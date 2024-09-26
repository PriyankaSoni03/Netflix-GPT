// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {FIREBASE_KEY} from "../utils/constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflixgpt-bd0dc.firebaseapp.com",
  projectId: "netflixgpt-bd0dc",
  storageBucket: "netflixgpt-bd0dc.appspot.com",
  messagingSenderId: "174365112418",
  appId: "1:174365112418:web:5a62d66e550ea10e17f93b",
  measurementId: "G-ZBBDY9731G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

