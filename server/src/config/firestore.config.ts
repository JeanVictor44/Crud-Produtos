import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBJkwIFl_oWhgH1bsluHZv-nn8QAsKbnlU",
  authDomain: "produtos-crud-b30e1.firebaseapp.com",
  projectId: "produtos-crud-b30e1",
  storageBucket: "produtos-crud-b30e1.appspot.com",
  messagingSenderId: "170719275377",
  appId: "1:170719275377:web:9e39c5008f868c29662ed0",
  measurementId: "G-BLLQYH3S2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
