import ProjectLink from "../ProjectLink/ProjectLink";
import s from "./ProjectLinkList.module.css";

type Props = {
  title: string | undefined;
  githubUrl: string | undefined;
  pageUrl: string | undefined;
};

const ProjectLinkList = ({ title, githubUrl, pageUrl }: Props) => {
  return (
    <section className={s.wrapper}>
      <h3 className={s.title}>
        <span className={s.projectName}>{title}</span> 정보를 위한 관련링크
      </h3>
      <ul className={s.listWrapper}>
        <li>
          <ProjectLink href={githubUrl} />
        </li>
        {pageUrl && (
          <li>
            <ProjectLink type="page" href={pageUrl} />
          </li>
        )}
      </ul>
    </section>
  );
};

export default ProjectLinkList;
