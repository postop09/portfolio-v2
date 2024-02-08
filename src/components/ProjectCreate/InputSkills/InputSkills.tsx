import { ChangeEvent, useEffect, useState } from "react";
import s from "./InputSkills.module.css";
import useGetSkills from "@/hooks/useGetSkills";
import { Codeset } from "@/types/skills.type";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onChange: (params: Codeset[]) => void;
};

const InputSkills = ({ onChange }: Props) => {
  const [selectedList, setSelectedList] = useState<Codeset[]>([]);
  const { skillCategory } = useGetSkills();

  const transCategoryToArray = () => {
    const result: Codeset[] = [];
    if (skillCategory.length !== 0) {
      skillCategory.map((category) => {
        result.push(...category.data);
      });
    }
    return result;
  };

  const isDuplicate = (value: string) => {
    return !!selectedList.find((skill) => {
      return skill.value === value;
    });
  };

  const findCodeSet = (value: string) => {
    return transCategoryToArray().find((skill) => {
      return skill.value === value;
    });
  };

  const handleSelectSkill = (e: ChangeEvent<HTMLSelectElement>) => {
    const targetValue = e.target.value;
    if (isDuplicate(targetValue)) {
      return;
    }
    setSelectedList([...selectedList, findCodeSet(targetValue)!]);
  };

  const handleDeleteSkill = (value: string) => {
    const deletedList = selectedList.filter((skill) => {
      return skill.value !== value;
    });
    setSelectedList(deletedList);
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedList);
    }
  }, [selectedList]);

  return (
    <div className={s.wrapper}>
      <label htmlFor="skills">사용기술</label>
      <div className={s.skillsWrapper}>
        <select
          name="skills"
          id="skills"
          defaultValue={"000"}
          onChange={handleSelectSkill}
        >
          <option disabled value={"000"}>
            사용한 기술을 선택해주세요.
          </option>
          {transCategoryToArray().map((skill) => {
            return (
              <option key={skill.id} value={skill.value}>
                {skill.name}
              </option>
            );
          })}
        </select>
        <ul>
          {selectedList.map((skill) => {
            return (
              <li key={skill.id}>
                <span>{skill.name}</span>
                <button
                  type="button"
                  className={s.skillDelete}
                  onClick={() => {
                    return handleDeleteSkill(skill.value);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InputSkills;
