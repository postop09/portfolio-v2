import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const useGetFirebaseAuth = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setEmail(user.email || "");
    } else {
      setEmail("");
    }
  });

  return { email };
};

export default useGetFirebaseAuth;
