import Image from "next/image";
import s from "./Project.module.css";

type Props = {
  src: string;
  title: string;
  period: string;
  onClick?: () => void;
};

const Project = ({ src, title, period, onClick }: Props) => {
  return (
    <article className={s.wrapper}>
      <button type="button" onClick={onClick} className={s.wrapper}>
        <Image
          src={src}
          alt=""
          width={380}
          height={480}
          priority
          className={s.imgProject}
        />
        <div className={s.txtWrapper}>
          <small className={s.subTxt}>{period || "-"}</small>
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
      </button>
    </article>
  );
};

export default Project;
