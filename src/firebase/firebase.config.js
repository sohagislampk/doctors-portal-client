// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxkMOG5fB_tQI8npHxJO9Dek6pAAkfS8k",
    authDomain: "doctors-portal-29911.firebaseapp.com",
    projectId: "doctors-portal-29911",
    storageBucket: "doctors-portal-29911.appspot.com",
    messagingSenderId: "900673879514",
    appId: "1:900673879514:web:8027f9136cf938ee3094e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;