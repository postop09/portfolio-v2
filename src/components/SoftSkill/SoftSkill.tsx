import s from "./SoftSkill.module.css";

const SoftSkill = ({ isHover }: { isHover: boolean }) => {
  return (
    <div className={`${s.wrapper} ${isHover ? s.on : ""}`}>
      <strong className={s.title}>SOFT SKILL</strong>
      <p className={s.contents}>
        My name is Cho Yun Sik. Let me introduce myself. Holy moly jesus
        christmas. When i was your man, you make me full.
      </p>
    </div>
  );
};

export default SoftSkill;
