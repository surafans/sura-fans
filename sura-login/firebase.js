// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-Is9ekckvL3otvCDbz90plvEvlPBRDT4",
  authDomain: "sura-fans-auth.firebaseapp.com",
  projectId: "sura-fans-auth",
  storageBucket: "sura-fans-auth.firebasestorage.app",
  messagingSenderId: "399675179284",
  appId: "1:399675179284:web:b4e7b2d0a409c2eab34201"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export what other files will import
export { app, auth, db, signInWithEmailAndPassword, onAuthStateChanged, signOut };
