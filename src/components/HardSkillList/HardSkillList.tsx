import HardSkill from "../HardSkill/HardSkill";
import s from "./HardSkillList.module.css";

const HardSkillList = () => {
  return (
    <div className={s.wrapper}>
      <strong className={s.title}>SKILLS</strong>
      <ul className={s.listWrapper}>
        <li>
          <HardSkill />
        </li>
        <li>
          <HardSkill />
        </li>
        <li>
          <HardSkill />
        </li>
      </ul>
    </div>
  );
};

export default HardSkillList;
