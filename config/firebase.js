// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1dYXI4ArjC2t0u9YgPWhBKpnzmeJU2J0",
  authDomain: "idss-gov.firebaseapp.com",
  projectId: "idss-gov",
  storageBucket: "idss-gov.firebasestorage.app",
  messagingSenderId: "445258557290",
  appId: "1:445258557290:web:33834c5209fc28ca1a6713",
  measurementId: "G-TN75VSWSW4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
