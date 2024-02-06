import { db, storage } from "@/pages/_app";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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

export const getDocData = async (
  collectionName: string,
  docName: string,
): Promise<any> => {
  try {
    const docRef = doc(db, collectionName, docName);
    const docSnap = await getDoc(docRef);
    if (docSnap) {
      return docSnap.data();
    }
  } catch (e) {
    console.log(e);
  }
};

export const uploadFile = async (
  files: FileList | null,
  storageRoot: string,
) => {
  if (!files) {
    return;
  }
  const storageRef = ref(storage, `${storageRoot}/${files[0]?.name}`);
  const snap = await uploadBytes(storageRef, files[0]);
  return await getDownloadURL(snap.ref);
};
