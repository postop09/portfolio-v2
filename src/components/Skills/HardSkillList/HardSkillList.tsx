import HardSkill from "../HardSkill/HardSkill";
import s from "./HardSkillList.module.css";
import useGetSkills from "@/hooks/useGetSkills";

const HardSkillList = () => {
  const { skillCategory } = useGetSkills();

  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>SKILLS</h2>
      <ul className={s.listWrapper}>
        {skillCategory.map((theme) => {
          return (
            <li key={theme.title}>
              <HardSkill {...theme} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HardSkillList;
