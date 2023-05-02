// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfp6jgvWEG9_A0XpfzI0VzdVJ3Fv2Wo1k",
  authDomain: "taxi-c2994.firebaseapp.com",
  projectId: "taxi-c2994",
  storageBucket: "taxi-c2994.appspot.com",
  messagingSenderId: "709638543832",
  appId: "1:709638543832:web:e0b65a49c4033b7a363aad",
  measurementId: "G-4XKW83KHHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app