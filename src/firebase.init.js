// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp0a4K4j_JbZcgtHBW7Gbnsgusl53Ui-4",
    authDomain: "rest-countries-25a69.firebaseapp.com",
    projectId: "rest-countries-25a69",
    storageBucket: "rest-countries-25a69.appspot.com",
    messagingSenderId: "516329787543",
    appId: "1:516329787543:web:b9a4a06e019ee3df9f59d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)