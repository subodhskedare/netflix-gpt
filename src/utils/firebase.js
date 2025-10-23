// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKlY7XWfn2_9fDSjeH7Dhcl7J12RphR9k",
  authDomain: "netflix-gpt-e767f.firebaseapp.com",
  projectId: "netflix-gpt-e767f",
  storageBucket: "netflix-gpt-e767f.firebasestorage.app",
  messagingSenderId: "616360704317",
  appId: "1:616360704317:web:759db2dc77e0fc6c976d54",
  measurementId: "G-1V937HDC11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
