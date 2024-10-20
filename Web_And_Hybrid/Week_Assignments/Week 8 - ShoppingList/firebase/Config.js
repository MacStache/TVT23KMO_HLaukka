import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, deleteDoc, serverTimestamp, query, onSnapshot, orderBy } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDd91_rcJ1T1UzskFxjlFUj3_s5Dnmxgpw",
  authDomain: "fir-shoppinglist-24813.firebaseapp.com",
  projectId: "fir-shoppinglist-24813",
  storageBucket: "fir-shoppinglist-24813.appspot.com",
  messagingSenderId: "1061129485723",
  appId: "1:1061129485723:web:67f491d5f9b444026c353e"

};

const app = initializeApp(firebaseConfig)

const firestore = getFirestore()

const ITEMS = 'items';

export {
  firestore,
  collection,
  doc,
  addDoc,
  deleteDoc,
  serverTimestamp,
  ITEMS,
  query,
  onSnapshot,
  orderBy,
}