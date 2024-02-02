import s from "./ProjectSummary.module.css";

const ProjectSummary = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.txtWrapper}>
        <h3 className={s.title}>나도 날 모르는 성능</h3>
        <p className={s.summary}>
          이 프로젝트는 온갖 스트레스를 다 받으며, 친구들에게 히스테리도 오지게
          부렸지만, 이직을 성공하고 난 후 출근 2주만에 퇴사를 결심한. 아니,
          2주만에 퇴사를 해버린, 결국엔 징징이가 되어버런 비극적인 인생을 그린
          조윤식의 포트폴리오 입니다.
        </p>
      </div>
    </section>
  );
};

export default ProjectSummary;
