// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZHgLRwdS7hM-Tw5Fdwg6e98bMe54gmR8",
  authDomain: "bistro-boss-c1363.firebaseapp.com",
  projectId: "bistro-boss-c1363",
  storageBucket: "bistro-boss-c1363.firebasestorage.app",
  messagingSenderId: "913728162168",
  appId: "1:913728162168:web:300a9d9913a1aebea3608d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth