import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import Layout from "@/components/Layouts/Layout";
import "@/styles/global.css";
import "@/styles/slide.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

// export const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("AUTH REQUIRED");
    }
  });
  return (
    <>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </>
  );
}
