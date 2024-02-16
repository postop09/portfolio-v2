import { provider } from "@/pages/_app";
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const useFirebaseSign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();

  const logIn = async () => {
    setIsOpen(false);
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // console.log(credential);
      // const token = credential?.accessToken;
      // const { user } = result;
      // console.log("TOKEN", token);
      // console.log("USER", user);
      // console.log("RESULT", result);
    } catch (error: any) {
      const { email } = error.customData;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("ERROR", error.code, error.message);
      console.log("EMAIL", email);
      console.log("CREDENTIAL", credential);
    }
  };

  const logOut = async () => {
    setIsOpen(false);
    await signOut(auth);
  };

  return { isOpen, setIsOpen, logIn, logOut, auth };
};

export default useFirebaseSign;
