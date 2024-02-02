import Image from "next/image";
import s from "./HardSkill.module.css";

type Props = {
  title: string;
  src: string;
  data: string[];
};

const HardSkill = ({ title, src, data }: Props) => {
  return (
    <div>
      <button type="button" className={s.wrapper}>
        <Image
          src={src}
          alt=""
          width={340}
          height={400}
          priority
          className={s.imgSkill}
        />
        <ul className={s.listWrapper}>
          {data.map((skill, index) => {
            return (
              <li key={index} className={s.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <strong className={s.txtCategory}>{title}</strong>
      </button>
    </div>
  );
};

export default HardSkill;
