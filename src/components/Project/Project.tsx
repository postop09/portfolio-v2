import Image from "next/image";
import s from "./Project.module.css";

const Project = () => {
  return (
    <article className={s.wrapper}>
      <button type="button" className={s.wrapper}>
        <Image
          src="/assets/img/img_banner.jpg"
          alt=""
          width={380}
          height={480}
          priority
          className={s.imgProject}
        />
        <div className={s.txtWrapper}>
          <small className={s.subTxt}>SONY-a6000</small>
          <div className={s.titleWrapper}>
            <h3 className={s.title}>프레임 하나의 힘</h3>
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
