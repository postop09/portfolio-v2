import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcJPMQUIbFQBRWmQtMSoXziEolg_Mcg9o",
  authDomain: "thanos-ba3dc.firebaseapp.com",
  databaseURL:
    "https://thanos-ba3dc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thanos-ba3dc",
  storageBucket: "thanos-ba3dc.appspot.com",
  messagingSenderId: "889907494357",
  appId: "1:889907494357:web:f6a8385c4ed9fb4343515c",
  measurementId: "G-H11JC7KM7H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
