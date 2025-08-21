// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCMOoARgoZhqYdWP-68EdtMiDNH-vk4Om0",
  authDomain: "foodlink-4b869.firebaseapp.com",
  projectId: "foodlink-4b869",
  storageBucket: "foodlink-4b869.firebasestorage.app",
  messagingSenderId: "843111292056",
  appId: "1:843111292056:web:47aa97a690cb5a921744ed",
  measurementId: "G-Y8FEMKV708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// Export Auth module
export const auth = getAuth(app);
