import s from "./ProjectLink.module.css";
import Image from "next/image";

type Props = {
  href: string | undefined;
  type?: "github" | "page";
};

const ProjectLink = ({ href, type = "github" }: Props) => {
  const isGithub = () => {
    return type === "github";
  };

  return (
    <a href={href} className={s.wrapper} target="_blank" rel="noreferrer">
      <Image
        src={
          isGithub()
            ? "/assets/img/img_camera.png"
            : "/assets/img/img_camera.png"
        }
        alt=""
        width={300}
        height={400}
        priority
        className={s.imgProject}
      />
      <div className={s.txtWrapper}>
        <small className={s.subTxt}>{isGithub() ? "GitHub" : "Page"}</small>
        <div className={s.titleWrapper}>
          <strong className={s.title}>
            {isGithub() ? "깃허브" : "페이지"} 보러가기
          </strong>
          <Image
            src="/assets/icon/icon_caret.png"
            alt="프로젝트 자세히 보러가기"
            width={20}
            height={20}
            priority
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectLink;
