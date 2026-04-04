// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhJ2z3OoVoThNZ0njR84uuYap9VaTbvJA",
  authDomain: "autodetail-4c6b6.firebaseapp.com",
  projectId: "autodetail-4c6b6",
  storageBucket: "autodetail-4c6b6.firebasestorage.app",
  messagingSenderId: "540351935613",
  appId: "1:540351935613:web:528883c3a6647c54e66d14",
  measurementId: "G-3MJ8RNBQTB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
export { firebaseConfig };
