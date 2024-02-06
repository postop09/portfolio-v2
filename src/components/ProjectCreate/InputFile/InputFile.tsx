import s from "./InputFile.module.css";

type Props = {
  title: string;
};

const InputFile = ({ title }: Props) => {
  // TODO: firebase Storage 저장하기 로직 추가

  return (
    <label className={s.wrapper}>
      {title}
      <input type="file" />
    </label>
  );
};

export default InputFile;
