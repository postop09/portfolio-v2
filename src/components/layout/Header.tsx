import Image from "next/image";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.wrapper}>
      <h1 className={s.title}>CYS</h1>
      <Image
        src="/assets/favicon/favicon-32x32.png"
        width={24}
        height={24}
        alt="프로필"
        className={s.profile}
        priority
      />
    </header>
  );
};

export default Header;
