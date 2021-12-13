import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPryQrnZcoTd99rTb-ioEMK-h0cCZcSL8",
  authDomain: "selling-8d26a.firebaseapp.com",
  databaseURL: "https://selling-8d26a-default-rtdb.firebaseio.com",
  projectId: "selling-8d26a",
  storageBucket: "selling-8d26a.appspot.com",
  messagingSenderId: "171999239669",
  appId: "1:171999239669:web:37945344a0765fbb7954bc",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { signInWithPopup, auth, provider, signOut, onAuthStateChanged };
