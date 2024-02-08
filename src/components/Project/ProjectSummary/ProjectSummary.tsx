import s from "./ProjectSummary.module.css";

type Props = {
  summary: string | undefined;
};

const ProjectSummary = ({ summary }: Props) => {
  return (
    <section className={s.wrapper}>
      <div className={s.txtWrapper}>
        <h3 className={s.title}>프로젝트를 소개합니다.</h3>
        <p className={s.summary}>{summary || "내용 없음"}</p>
      </div>
    </section>
  );
};

export default ProjectSummary;
