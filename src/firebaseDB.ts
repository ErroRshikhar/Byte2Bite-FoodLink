// firebaseDB.ts
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const addFoodPost = async (data: any) => {
  const docRef = await addDoc(collection(db, "foodPosts"), {
    ...data,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};
