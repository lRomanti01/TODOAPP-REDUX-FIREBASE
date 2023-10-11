import { initializeApp,  } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {  signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDp151Par_p2jYEktgtgmEgTCPZY_PO0NE",
  authDomain: "todo-app-c17c4.firebaseapp.com",
  projectId: "todo-app-c17c4",
  storageBucket: "todo-app-c17c4.appspot.com",
  messagingSenderId: "286951926254",
  appId: "1:286951926254:web:fba8976d4a7650614c46ff",
  measurementId: "G-2NV1ZW5B8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const logout = () => { return signOut(auth); }

export const db = getFirestore(app)

