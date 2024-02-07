import s from "./InputFile.module.css";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  title: string;
  type?: "image" | "video";
  // eslint-disable-next-line no-unused-vars
  onChange: (params: File | undefined) => void;
};

const InputFile = ({ title, type = "image", onChange }: Props) => {
  const [fileUrl, setFileUrl] = useState<File>();

  const handleSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setFileUrl(files[0]);
    }
  };

  useEffect(() => {
    onChange(fileUrl);
  }, [fileUrl]);

  return (
    <label className={s.wrapper}>
      {title}
      <input
        type="file"
        accept={type === "image" ? "image/*" : "video/*"}
        onChange={handleSelectFile}
      />
    </label>
  );
};

export default InputFile;
