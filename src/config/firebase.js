import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyCCIfrFyOHpuHqlKGt7f2rPU_Tm-aYRr74",
  authDomain: "feline-emporium-4fd4a.firebaseapp.com",
  projectId: "feline-emporium-4fd4a",
  storageBucket: "feline-emporium-4fd4a.appspot.com",
  messagingSenderId: "1009791347342",
  appId: "1:1009791347342:web:4350c49dda931e294d77df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth