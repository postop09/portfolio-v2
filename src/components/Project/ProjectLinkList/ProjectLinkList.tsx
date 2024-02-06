import ProjectLink from "../ProjectLink/ProjectLink";
import s from "./ProjectLinkList.module.css";

const ProjectLinkList = () => {
  return (
    <section className={s.wrapper}>
      <h3 className={s.title}>
        <span className={s.projectName}>롤챔</span> 정보를 위한 관련링크
      </h3>
      <ul className={s.listWrapper}>
        <li>
          <ProjectLink />
        </li>
        <li>
          <ProjectLink />
        </li>
      </ul>
    </section>
  );
};

export default ProjectLinkList;
