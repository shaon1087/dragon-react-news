// firebase.config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCv9q1cXA3Hr0WVhDIDHYEbN8GW8NfhmfY",
  authDomain: "dragon-react-news.firebaseapp.com",
  projectId: "dragon-react-news",
  storageBucket: "dragon-react-news.firebasestorage.app",
  messagingSenderId: "966693644230",
  appId: "1:966693644230:web:98d1a5593bba40c02274c7",
};

const app = initializeApp(firebaseConfig);

export default app;
