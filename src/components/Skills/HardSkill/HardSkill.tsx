import Image from "next/image";
import s from "./HardSkill.module.css";
import { SkillsDTO } from "@/types/skills.type";

const HardSkill = ({ title, src, data }: SkillsDTO) => {
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
          {data.map((skill) => {
            return (
              <li key={skill.value} className={s.skill}>
                {skill.name}
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
