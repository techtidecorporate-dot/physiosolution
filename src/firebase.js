import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmyNOH_yxnNhcQuTAhlTDEgCImIftkEkk",
  authDomain: "physiosolution-a7333.firebaseapp.com",
  databaseURL: "https://physiosolution-a7333-default-rtdb.firebaseio.com",
  projectId: "physiosolution-a7333",
  storageBucket: "physiosolution-a7333.firebasestorage.app",
  messagingSenderId: "1003611101607",
  appId: "1:1003611101607:web:4d836cb5bcc48ecebbfe82",
  measurementId: "G-414BDD41B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);