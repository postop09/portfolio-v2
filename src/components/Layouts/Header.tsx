import Image from "next/image";
import s from "./Header.module.css";
import Link from "next/link";
import useFirebaseSign from "@/hooks/useFirebaseSign";

const Header = () => {
  const { isOpen, setIsOpen, logIn, logOut, auth } = useFirebaseSign();

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
          return setIsOpen(!isOpen);
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
      <div className={`${s.btnWrapper} ${isOpen && s.on}`}>
        <button
          type="button"
          onClick={logIn}
          className={auth.currentUser ? "" : s.on}
        >
          로그인
        </button>
        <button
          type="button"
          onClick={logOut}
          className={auth.currentUser ? s.on : ""}
        >
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
