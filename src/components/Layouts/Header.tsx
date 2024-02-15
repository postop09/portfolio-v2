import Image from "next/image";
import s from "./Header.module.css";
import Link from "next/link";
import { provider } from "@/pages/_app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Header = () => {
  const login = async () => {
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    console.log(token, user);
  };
  return (
    <header className={s.wrapper}>
      <h1>
        <Link href="/" className={s.title}>
          CYS
        </Link>
      </h1>
      <button type="button" onClick={login}>
        <Image
          src="/assets/favicon/favicon-32x32.png"
          width={24}
          height={24}
          alt="프로필"
          className={s.profile}
          priority
        />
      </button>
    </header>
  );
};

export default Header;
