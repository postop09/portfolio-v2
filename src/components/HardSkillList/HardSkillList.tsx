import HardSkill from "../HardSkill/HardSkill";
import s from "./HardSkillList.module.css";
import useGetSkills from "@/hooks/useGetSkills";

const HardSkillList = () => {
  const { skillCategory } = useGetSkills();

  return (
    <div className={s.wrapper}>
      <strong className={s.title}>SKILLS</strong>
      <ul className={s.listWrapper}>
        {skillCategory.map((theme) => {
          return (
            <li key={theme.title}>
              <HardSkill {...theme} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HardSkillList;
