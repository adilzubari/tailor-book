import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyD7S2jA7q1cSLKhZSKryzhCNDEYanLmkPU",
  authDomain: "tailor-app-342e4.firebaseapp.com",
  projectId: "tailor-app-342e4",
  storageBucket: "tailor-app-342e4.appspot.com",
  messagingSenderId: "459873590323",
  appId: "1:459873590323:web:1b824382bce141331d9746",
  measurementId: "G-YXKMTZ402D",
};

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);
if (!firebase.length) {
  firebase.initializeApp(firebaseConfig);
}
