import s from "./ProjectSpec.module.css";
import Image from "next/image";

const ProjectSpec = () => {
  return (
    <section className={s.wrapper}>
      <Image
        src="/assets/img/img_camera.png"
        alt=""
        width={300}
        height={300}
        className={s.imgMain}
      />
      <div>
        <h3 className={s.title}>사용 기술 및 환경</h3>
        <ul>
          <li className={s.skill}>React.js</li>
          <li className={s.skill}>TypeScript</li>
          <li className={s.skill}>AWS (S3, Route53, CloudFront)</li>
          <li className={s.skill}>Github</li>
          <li className={s.skill}>Figma</li>
          <li className={s.skill}>Slack</li>
          <li className={s.skill}>Styled-Components</li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectSpec;
