// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRgJn-EXWGx5uMp1m9qC2IlJ5Prqhu2dU",
    authDomain: "tour-de-com.firebaseapp.com",
    projectId: "tour-de-com",
    storageBucket: "tour-de-com.appspot.com",
    messagingSenderId: "739203583055",
    appId: "1:739203583055:web:6d6e84f8e546d3102aae3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;