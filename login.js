import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);

// Listen for button click
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Login successful");
      console.log("User:", userCredential.user);
      // Redirect to admin page after successful login
      window.location.href = "admin.html";
    })
    .catch((error) => {
      alert("❌ Error: " + error.message);
    });
});
