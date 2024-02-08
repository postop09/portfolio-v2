import { useEffect, useState } from "react";
import s from "./InputPeriod.module.css";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onChange: (params: { startDt: string; endDt: string }) => void;
};

const InputPeriod = ({ onChange }: Props) => {
  const [startDt, setStartDt] = useState("");
  const [endDt, setEndDt] = useState("");

  useEffect(() => {
    onChange({ startDt, endDt });
  }, [startDt, endDt]);

  return (
    <div className={s.wrapper}>
      <label htmlFor="period">작업 기간</label>
      <div>
        <input
          type="month"
          id="period"
          onChange={(e) => {
            return setStartDt(e.target.value);
          }}
        />
        <span className={s.txtSmall}>에서</span>
        <input
          type="month"
          id="period"
          onChange={(e) => {
            return setEndDt(e.target.value);
          }}
        />
        <span className={s.txtSmall}>까지</span>
      </div>
    </div>
  );
};

export default InputPeriod;
