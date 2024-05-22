// src/firebase/firestoreService.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseInit";

export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
