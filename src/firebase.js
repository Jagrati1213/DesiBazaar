
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBavoO0bqHRkKndXmN-WD0sdipi98HKy5s",
    authDomain: "eco-cart-2e21c.firebaseapp.com",
    projectId: "eco-cart-2e21c",
    storageBucket: "eco-cart-2e21c.appspot.com",
    messagingSenderId: "931464483986",
    appId: "1:931464483986:web:6bacba492ac170827cc24b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;