import { useState } from "react";
import SoftSkill from "../SoftSkill/SoftSkill";
import s from "./SoftSkillList.module.css";

const SoftSkillList = () => {
  const DATA = [1, 2, 3, 4];
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className={s.wrapper}>
      <strong className={s.title}>SOFT SKILLS</strong>
      <ul className={s.listWrapper}>
        {DATA.map((item, index) => {
          return (
            <li
              key={item}
              onMouseOver={() => {
                return setTabIndex(index);
              }}
            >
              <SoftSkill isHover={index === tabIndex} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SoftSkillList;
