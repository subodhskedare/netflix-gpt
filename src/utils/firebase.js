// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKlY7XWfn2_9fDSjeH7Dhcl7J12RphR9k",
  authDomain: "netflix-gpt-e767f.firebaseapp.com",
  projectId: "netflix-gpt-e767f",
  storageBucket: "netflix-gpt-e767f.firebasestorage.app",
  messagingSenderId: "616360704317",
  appId: "1:616360704317:web:759db2dc77e0fc6c976d54",
  measurementId: "G-1V937HDC11",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
