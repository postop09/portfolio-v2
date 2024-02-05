import { db } from "@/pages/_app";
import { collection, getDocs } from "firebase/firestore";

export const getCollection = async (collectionName: string): Promise<any> => {
  try {
    const collectionRef = collection(db, collectionName);
    const collectionSnap = await getDocs(collectionRef);
    if (collectionSnap) {
      return collectionSnap.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
    }
    return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
