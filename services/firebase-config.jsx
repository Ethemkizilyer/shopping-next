import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcL73vOcFkBzHwbNoGwXGh75dbL10O0ho",
  authDomain: "shopping-de2cb.firebaseapp.com",
  databaseURL: "https://shopping-de2cb-default-rtdb.firebaseio.com",
  projectId: "shopping-de2cb",
  storageBucket: "shopping-de2cb.appspot.com",
  messagingSenderId: "122907321089",
  appId: "1:122907321089:web:c8a1af3e46fcfea674f100",
  measurementId: "G-12GQDV56DV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();
