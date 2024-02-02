import s from "./ProjectLink.module.css";
import Image from "next/image";

const ProjectLink = () => {
  return (
    <button type="button" className={s.wrapper}>
      <Image
        src="/assets/img/img_camera.png"
        alt=""
        width={300}
        height={400}
        priority
        className={s.imgProject}
      />
      <div className={s.txtWrapper}>
        <small className={s.subTxt}>GitHub</small>
        <div className={s.titleWrapper}>
          <strong className={s.title}>깃허브 보러가기</strong>
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
  );
};

export default ProjectLink;
