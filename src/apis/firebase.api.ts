import { db, storage } from "@/pages/_app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

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

export const createDoc = async (collectionName: string, fieldData: any) => {
  try {
    const docRef = collection(db, collectionName);
    await addDoc(docRef, fieldData);
  } catch (e) {
    console.log(e);
  }
};

export const deleteDocData = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  } catch (e) {
    console.log(e);
  }
};

export const uploadFile = async (file: File, storageRoot: string) => {
  if (!file) {
    return;
  }
  const storageRef = ref(storage, `${storageRoot}/${file.name}`);
  const snap = await uploadBytes(storageRef, file);
  return await getDownloadURL(snap.ref);
};

export const deleteFile = async (storageRoot: string) => {
  const storageRef = ref(storage, `${storageRoot}`);
  await deleteObject(storageRef);
};
