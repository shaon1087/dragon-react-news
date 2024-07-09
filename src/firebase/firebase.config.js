// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv9q1cXA3Hr0WVhDIDHYEbN8GW8NfhmfY",
  authDomain: "dragon-react-news.firebaseapp.com",
  projectId: "dragon-react-news",
  storageBucket: "dragon-react-news.appspot.com",
  messagingSenderId: "966693644230",
  appId: "1:966693644230:web:98d1a5593bba40c02274c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;