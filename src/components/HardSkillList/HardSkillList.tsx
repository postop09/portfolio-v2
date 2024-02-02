import HardSkill from "../HardSkill/HardSkill";
import s from "./HardSkillList.module.css";

const HardSkillList = () => {
  const HARD_SKILL_LIST = [
    {
      title: "언어",
      src: "/assets/icon/icon_language.png",
      data: ["React.js", "TypeScript"],
    },
    {
      title: "개발환경도구",
      src: "/assets/icon/icon_tool.png",
      data: ["AWS S3", "AWS Route53", "AWS CloudFront"],
    },
    {
      title: "협업도구",
      src: "/assets/icon/icon_communication.png",
      data: ["Github", "Jira", "Confluence"],
    },
  ];

  return (
    <div className={s.wrapper}>
      <strong className={s.title}>SKILLS</strong>
      <ul className={s.listWrapper}>
        {HARD_SKILL_LIST.map((skill) => {
          return (
            <li key={skill.title}>
              <HardSkill
                title={skill.title}
                src={skill.src}
                data={skill.data}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HardSkillList;
