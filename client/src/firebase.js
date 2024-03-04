// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-78447.firebaseapp.com",
  projectId: "mern-blog-78447",
  storageBucket: "mern-blog-78447.appspot.com",
  messagingSenderId: "149538729718",
  appId: "1:149538729718:web:e1a35c771947f0b36806d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);