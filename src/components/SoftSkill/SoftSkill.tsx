import s from "./SoftSkill.module.css";

type Props = {
  isHover: boolean;
  title: string;
  contents: string;
};

const SoftSkill = ({ isHover, title, contents }: Props) => {
  return (
    <div className={`${s.wrapper} ${isHover ? s.on : ""}`}>
      <strong className={s.title}>{title}</strong>
      <p className={s.contents}>{contents}</p>
    </div>
  );
};

export default SoftSkill;
