import s from "./ProjectBanner.module.css";
import Image from "next/image";

type Props = {
  src: string | undefined;
  title: string | undefined;
  startDt: string | undefined;
  endDt: string | undefined;
  isTeamProject: boolean | undefined;
};

const ProjectBanner = ({
  src,
  title,
  startDt,
  endDt,
  isTeamProject,
}: Props) => {
  return (
    <section className={s.wrapper}>
      {src && (
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          quality={80}
          priority
          className={s.imgBanner}
        />
      )}
      <div className={s.txtWrapper}>
        <h3 className={s.title}>{title || "제목 없음"}</h3>
        <small className={s.period}>{`${startDt} ~ ${endDt}`}</small>
        <small className={s.isTeamProject}>
          {isTeamProject ? "팀 프로젝트" : "개인 프로젝트"}
        </small>
      </div>
    </section>
  );
};

export default ProjectBanner;
