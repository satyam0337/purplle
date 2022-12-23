import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYm_RuDxhyCygQW3-AnkzBMrzbl2pG-eI",
  authDomain: "phone-auth-78e7f.firebaseapp.com",
  projectId: "phone-auth-78e7f",
  storageBucket: "phone-auth-78e7f.appspot.com",
  messagingSenderId: "1063425375920",
  appId: "1:1063425375920:web:3a1361d95646c571028575",
  measurementId: "G-XVZH4N4HHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
