import { useEffect, useState } from "react";
import s from "./InputTeamProject.module.css";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onChange: (params: boolean) => void;
};

const InputTeamProject = ({ onChange }: Props) => {
  const [isTeamProject, setIsTeamProject] = useState(true);

  useEffect(() => {
    if (onChange) {
      onChange(isTeamProject);
    }
  }, [isTeamProject]);

  return (
    <div className={s.wrapper}>
      <span className={s.title}>팀 프로젝트 여부</span>
      <div className={s.radioWrapper}>
        <label htmlFor="isTeamProject">
          <input
            type="radio"
            id="isTeamProject"
            name="teamProject"
            defaultChecked
            onClick={() => {
              return setIsTeamProject(true);
            }}
          />
          예
        </label>
        <label htmlFor="isNotTeamProject">
          <input
            type="radio"
            id="isNotTeamProject"
            name="teamProject"
            onClick={() => {
              return setIsTeamProject(false);
            }}
          />
          아니오
        </label>
      </div>
    </div>
  );
};

export default InputTeamProject;
