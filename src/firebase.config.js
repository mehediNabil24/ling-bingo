// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjKaueN5oq2pl_3MMdoq-UgmoRS2iqoMU",
  authDomain: "lingo-bingo-dddfe.firebaseapp.com",
  projectId: "lingo-bingo-dddfe",
  storageBucket: "lingo-bingo-dddfe.firebasestorage.app",
  messagingSenderId: "518383826759",
  appId: "1:518383826759:web:7edad4fe605c96783a3e62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);