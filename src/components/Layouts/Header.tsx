import Image from "next/image";
import s from "./Header.module.css";
import Link from "next/link";
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

const Header = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const auth = getAuth();

  const signIn = async () => {
    setIsOpenLogin(false);
    try {
      await setPersistence(auth, browserSessionPersistence);
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      console.log("TOKEN", token);
      console.log("USER", user);
      console.log("RESULT", result);
    } catch (error: any) {
      const { email } = error.customData;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("ERROR", error.code, error.message);
      console.log("EMAIL", email);
      console.log("CREDENTIAL", credential);
    }
  };

  return (
    <header className={s.wrapper}>
      <h1>
        <Link href="/" className={s.title}>
          CYS
        </Link>
      </h1>
      <button
        type="button"
        onClick={() => {
          return setIsOpenLogin(!isOpenLogin);
        }}
      >
        <Image
          src="/assets/favicon/favicon-32x32.png"
          width={24}
          height={24}
          alt="프로필"
          className={s.profile}
          priority
        />
      </button>
      <div className={`${s.btnWrapper} ${isOpenLogin && s.on}`}>
        <button
          type="button"
          onClick={signIn}
          className={auth.currentUser ? "" : s.on}
        >
          로그인
        </button>
        <button
          type="button"
          onClick={() => {
            setIsOpenLogin(false);
            return signOut(auth);
          }}
          className={auth.currentUser ? s.on : ""}
        >
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
