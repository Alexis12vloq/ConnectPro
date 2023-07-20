// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxdTSyurs4wM_T00sXHzF0o8bdb_HIItk",
    authDomain: "steadystorage.firebaseapp.com",
    projectId: "steadystorage",
    storageBucket: "steadystorage.appspot.com",
    messagingSenderId: "965609488560",
    appId: "1:965609488560:web:99f4e530176db07738bb75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);