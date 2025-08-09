// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

// Import Firebase Authentication functions
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Is9ekckvL3otvCDbz90plvEvlPBRDT4",
  authDomain: "sura-fans-auth.firebaseapp.com",
  projectId: "sura-fans-auth",
  storageBucket: "sura-fans-auth.firebasestorage.app",
  messagingSenderId: "399675179284",
  appId: "1:399675179284:web:b4e7b2d0a409c2eab34201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Export auth and sign-in function
export { auth, signInWithEmailAndPassword };
