import s from "./ProjectBanner.module.css";
import Image from "next/image";

type Props = {
  src: string | undefined;
  title: string | undefined;
  period: string | undefined;
  isTeamProject: boolean | undefined;
};

const ProjectBanner = ({ src, title, period, isTeamProject }: Props) => {
  return (
    <section className={s.wrapper}>
      <Image
        src={src || "/assets/img/img_banner.jpg"}
        alt=""
        fill
        sizes="auto"
        priority
        className={s.imgBanner}
      />
      <div className={s.txtWrapper}>
        <h3 className={s.title}>{title || "제목 없음"}</h3>
        <small className={s.period}>
          {period || "2024.01.01 ~ 2024.02.02"}
        </small>
        <small className={s.isTeamProject}>
          {isTeamProject ? "팀 프로젝트" : "개인 프로젝트"}
        </small>
      </div>
    </section>
  );
};

export default ProjectBanner;
