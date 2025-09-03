// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔹 Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTL3oAtEHyKN0PnUABzoeiEMFH6t7nwU4",
  authDomain: "navyaanpatel123.firebaseapp.com",
  projectId: "navyaanpatel123",
  storageBucket: "navyaanpatel123.appspot.com",   // ✅ fixed
  messagingSenderId: "876143035407",
  appId: "1:876143035407:web:9a2fdb7e2c466c8c2ccf7a",
  measurementId: "G-ZS1B5WNYN4",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
