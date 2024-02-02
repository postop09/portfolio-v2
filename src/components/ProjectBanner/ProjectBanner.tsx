import s from "./ProjectBanner.module.css";
import Image from "next/image";

const ProjectBanner = () => {
  return (
    <section className={s.wrapper}>
      <Image
        src="/assets/img/img_banner.jpg"
        alt=""
        fill
        sizes="auto"
        priority
        className={s.imgBanner}
      />
      <div className={s.txtWrapper}>
        <h3 className={s.title}>프레임 하나의 힘</h3>
        <small className={s.period}>2024.01 ~ 2024.02</small>
        <small className={s.isTeamProject}>팀 프로젝트</small>
      </div>
    </section>
  );
};

export default ProjectBanner;
