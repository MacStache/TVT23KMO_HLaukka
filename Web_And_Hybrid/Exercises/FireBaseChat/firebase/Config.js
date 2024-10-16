// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot, orderBy } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuZybiPh7cfq5NmwwO8JWAtbA1yG3V5yw",
  authDomain: "fir-chat-c4c46.firebaseapp.com",
  projectId: "fir-chat-c4c46",
  storageBucket: "fir-chat-c4c46.appspot.com",
  messagingSenderId: "1083689027335",
  appId: "1:1083689027335:web:a109e3c71a440eb34667a2"
};

const app = initializeApp(firebaseConfig)

const firestore = getFirestore()

const MESSAGES = 'messages';

export {
  firestore,
  collection,
  addDoc,
  serverTimestamp,
  MESSAGES,
  query,
  onSnapshot,
  orderBy,
}