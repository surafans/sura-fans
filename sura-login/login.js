import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);

// Listen for button click
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful — redirecting");
    // GitHub Pages needs repo name in the path
    window.location.href = "sura-login/admin.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
