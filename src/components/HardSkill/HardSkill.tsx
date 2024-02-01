import Image from "next/image";
import s from "./HardSkill.module.css";

const HardSkill = () => {
  return (
    <div>
      <button type="button" className={s.wrapper}>
        <Image
          src="/assets/img/img_camera.png"
          alt=""
          width={340}
          height={400}
          priority
          className={s.imgSkill}
        />
        <ul className={s.listWrapper}>
          <li className={s.skill}>React.js</li>
          <li className={s.skill}>TypeScript</li>
        </ul>
        <strong className={s.txtCategory}>Front-End</strong>
      </button>
    </div>
  );
};

export default HardSkill;
