import { useEffect, useState } from "react";
import s from "./InputContents.module.css";
import { uploadFile } from "@/apis/firebase.api";
import { ProjectContents } from "@/types/projects.type";

const CONTENTS_TYPE = [
  {
    name: "기본",
    value: "default",
  },
  {
    name: "좌우반전",
    value: "reverse",
  },
  {
    name: "세로",
    value: "column",
  },
];

type Props = {
  storageRoot: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (params: ProjectContents[]) => void;
};

const InputContents = ({ storageRoot, onChange }: Props) => {
  const [rowList, setRowList] = useState<any>({});
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
      return;
    }
    const imagePath = await uploadFile(imageFile, `${storageRoot}/contents`);
    if (!imagePath) {
      return;
    }
    const newData = {
      ...contentsInput,
      imagePath,
    };

    setContentsList([...contentsList, newData]);
    // 칼럼에서 일반으로 빠져나갈 때, + 1 처리가 안된 상태로 추가 된다.
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
  };

  useEffect(() => {
    console.log(contentsInput.rowNum, rowList);
  }, [contentsInput.rowNum, rowList]);

  const handleDeleteContents = (index: number) => {
    setContentsList((prev) => {
      const array = [...prev];
      array.splice(index, 1);
      return array;
    });
  };

  useEffect(() => {
    onChange(contentsList);
  }, [contentsList]);

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
          {CONTENTS_TYPE.map((type, index) => {
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
              <button
                type="button"
                onClick={() => {
                  return handleDeleteContents(index);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </label>
  );
};

export default InputContents;
