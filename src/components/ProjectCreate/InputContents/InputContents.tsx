import { useEffect, useState } from "react";
import s from "./InputContents.module.css";
import { uploadFile } from "@/apis/firebase.api";
import { ProjectContents, ProjectContentsRow } from "@/types/projects.type";
import { CONST_PROJECT } from "@/constants/project.const";

type Props = {
  storageRoot: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (params: ProjectContentsRow) => void;
};

const InputContents = ({ storageRoot, onChange }: Props) => {
  const [rowList, setRowList] = useState<ProjectContentsRow>({});
  const [imageFile, setImageFile] = useState<File>();
  const [contentsInput, setContentsInput] = useState<ProjectContents>({
    type: "default",
    title: "",
    contents: "",
    imagePath: "",
    rowNum: 0,
  });
  const [contentsList, setContentsList] = useState<ProjectContents[]>([]);

  const contentsTypeName = (value: string) => {
    switch (value) {
      case "reverse":
        return "좌우반전";
      case "column":
        return "세로";
      default:
        return "기본";
    }
  };

  const handleAddContents = async () => {
    if (!imageFile) {
      return alert("파일이 선택되지 않았습니다. 다시 선택해주세요.");
    }

    const imagePath = await uploadFile(imageFile, storageRoot);

    if (!imagePath) {
      return alert(
        "파일 변환 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
      );
    }

    const newData = {
      ...contentsInput,
      imagePath,
    };

    setRowList((prev: any) => {
      if (prev?.[`row${contentsInput.rowNum}`]) {
        return {
          ...prev,
          [`row${contentsInput.rowNum}`]: [
            ...prev[`row${contentsInput.rowNum}`],
            newData,
          ],
        };
      }
      return {
        ...prev,
        [`row${contentsInput.rowNum}`]: [newData],
      };
    });

    setContentsList([...contentsList, newData]);
  };

  // const handleDeleteContents = (index: number) => {
  //   setContentsList((prev) => {
  //     const array = [...prev];
  //     array.splice(index, 1);
  //     return array;
  //   });
  // };

  useEffect(() => {
    onChange(rowList);
  }, [rowList]);

  return (
    <label className={s.wrapper}>
      내용
      <div className={s.inputWrapper}>
        <input
          type="number"
          placeholder="행 번호을 입력해주세요."
          onChange={(e) => {
            return setContentsInput({
              ...contentsInput,
              rowNum: Number(e.target.value),
            });
          }}
        />
        <select
          name="contentsType"
          value={contentsInput.type}
          onChange={(e) => {
            return setContentsInput({
              ...contentsInput,
              type: e.target.value,
            });
          }}
        >
          {CONST_PROJECT.CONTENTS_TYPE.map((type, index) => {
            return (
              <option key={index} value={type.value}>
                {type.name}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          value={contentsInput.title}
          onChange={(e) => {
            return setContentsInput({
              ...contentsInput,
              title: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요."
          value={contentsInput.contents}
          onChange={(e) => {
            return setContentsInput({
              ...contentsInput,
              contents: e.target.value,
            });
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            return setImageFile(e.target.files?.[0]);
          }}
        />
        <div>
          <button
            type="button"
            onClick={handleAddContents}
            className={s.btnAdd}
          >
            추가하기
          </button>
        </div>
      </div>
      <ul>
        {contentsList.map((contents, index) => {
          return (
            <li className={s.listWrapper} key={index}>
              <span>
                {`row${contents.rowNum}`} / {contentsTypeName(contents.type)} /{" "}
                {contents.title}
              </span>
            </li>
          );
        })}
      </ul>
    </label>
  );
};

export default InputContents;
