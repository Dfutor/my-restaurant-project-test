// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8RoqkNizD2gdcVZCpHFkv0g4x3vmzHAM",
  authDomain: "my-restaurant-project-ef2cb.firebaseapp.com",
  projectId: "my-restaurant-project-ef2cb",
  storageBucket: "my-restaurant-project-ef2cb.appspot.com",
  messagingSenderId: "622126436973",
  appId: "1:622126436973:web:4b7447f4e9ef6633366564",
  measurementId: "G-YJRH5XJ7RS"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
