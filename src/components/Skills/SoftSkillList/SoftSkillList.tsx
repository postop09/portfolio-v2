import { useState } from "react";
import SoftSkill from "../SoftSkill/SoftSkill";
import s from "./SoftSkillList.module.css";
import useGetSoftSkills from "@/hooks/useGetSoftSkills";

const SoftSkillList = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const { softSkillList } = useGetSoftSkills();

  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>SOFT SKILLS</h2>
      <ul className={s.listWrapper}>
        {softSkillList.map((softSkill, index) => {
          return (
            <li
              key={softSkill.id}
              onMouseOver={() => {
                return setTabIndex(index);
              }}
              onFocus={() => {
                return setTabIndex(index);
              }}
            >
              <SoftSkill
                title={softSkill.title}
                contents={softSkill.contents}
                isHover={index === tabIndex}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SoftSkillList;
