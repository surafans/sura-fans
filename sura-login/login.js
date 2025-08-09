// login.js
import { auth, signInWithEmailAndPassword } from './sura-login/firebase.js';

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful — redirecting");
    // GitHub Pages needs repo name in the path
    window.location.href = "/sura-login/admin.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
