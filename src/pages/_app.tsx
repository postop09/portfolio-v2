import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Layout from "@/components/Layout/Layout";
import "@/styles/global.css";
import "@/styles/slide.css";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "thanos-ba3dc.firebaseapp.com",
  databaseURL:
    "https://thanos-ba3dc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thanos-ba3dc",
  storageBucket: "thanos-ba3dc.appspot.com",
  messagingSenderId: "889907494357",
  appId: "1:889907494357:web:f6a8385c4ed9fb4343515c",
  measurementId: "G-H11JC7KM7H",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();
// export const storageRef = ref(storage, "all-reborn");
// export const analytics = getAnalytics(app);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
