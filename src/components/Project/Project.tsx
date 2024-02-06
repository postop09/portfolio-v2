import Image from "next/image";
import s from "./Project.module.css";
import Link from "next/link";

type Props = {
  src: string;
  title: string;
  startDt: string;
  endDt: string;
  href: string;
};

const Project = ({ src, title, startDt, endDt, href }: Props) => {
  return (
    <article className={s.wrapper}>
      <Link href={href} className={s.wrapper}>
        <Image
          src={src}
          alt=""
          width={380}
          height={480}
          priority
          className={s.imgProject}
        />
        <div className={s.txtWrapper}>
          <small className={s.subTxt}>{`${startDt} ~ ${endDt}` || "-"}</small>
          <div className={s.titleWrapper}>
            <h3 className={s.title}>{title}</h3>
            <Image
              src="/assets/icon/icon_caret.png"
              alt="프로젝트 자세히 보러가기"
              width={20}
              height={20}
              priority
            />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Project;
