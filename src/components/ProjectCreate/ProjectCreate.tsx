import { uploadFile } from "@/apis/firebase.api";
import InputFile from "./InputFile/InputFile";
import InputPeriod from "./InputPeriod/InputPeriod";
import InputSkills from "./InputSkills/InputSkills";
import InputTeamProject from "./InputTeamProject/InputTeamProject";
import s from "./ProjectCreate.module.css";
import { ProjectDTO } from "@/types/projects.type";
import { useState } from "react";
import { createProject } from "@/apis/projects.api";

const ProjectCreate = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedVideo, setSelectedVideo] = useState<File>();
  const [fieldData, setFieldData] = useState<ProjectDTO>({
    contents: "",
    githubUrl: "",
    pageUrl: "",
    isTeamProject: true,
    period: "",
    skills: [],
    summary: "",
    title: "",
    imagePath: "",
    videoPath: "",
    startDt: "",
    endDt: "",
  });

  const handleSubmit = async () => {
    if (!selectedImage || !selectedVideo) {
      return alert("파일이 선택되지 않았습니다. 다시 선택해주세요.");
    }

    const imagePath = await uploadFile(selectedImage, "all-reborn");
    const videoPath = await uploadFile(selectedVideo, "all-reborn");

    if (!imagePath || !videoPath) {
      return alert(
        "파일 변환 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
      );
    }

    const newData = {
      ...fieldData,
      imagePath,
      videoPath,
    };
    createProject(newData);
  };

  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>프로젝트 생성</h2>
      <div className={s.layout}>
        <section>
          <h3>미리보기</h3>
        </section>
        <section className={s.inputContainer}>
          <label className={s.inputWrapper}>
            프로젝트 이름
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => {
                return setFieldData({ ...fieldData, title: e.target.value });
              }}
            />
          </label>
          <InputPeriod
            onChange={(value) => {
              return setFieldData({ ...fieldData, ...value });
            }}
          />
          <InputSkills
            onChange={(value) => {
              return setFieldData({ ...fieldData, skills: value });
            }}
          />
          <InputFile
            title={"메인배너 이미지"}
            onChange={(value) => {
              return setSelectedImage(value);
            }}
          />
          <InputFile
            title={"시연 영상"}
            onChange={(value) => {
              return setSelectedVideo(value);
            }}
          />
          <label className={s.inputWrapper}>
            Github
            <input
              type="text"
              id="isGithub"
              onChange={(e) => {
                return setFieldData({
                  ...fieldData,
                  githubUrl: e.target.value,
                });
              }}
            />
          </label>
          <label className={s.inputWrapper}>
            URL
            <input
              type="text"
              id="isPage"
              onChange={(e) => {
                return setFieldData({ ...fieldData, pageUrl: e.target.value });
              }}
            />
          </label>
          <InputTeamProject
            onChange={(value) => {
              return setFieldData({ ...fieldData, isTeamProject: value });
            }}
          />
          <label className={s.inputWrapper}>
            소개
            <input
              type="text"
              id="summary"
              onChange={(e) => {
                return setFieldData({ ...fieldData, summary: e.target.value });
              }}
            />
          </label>
          <label className={s.inputWrapper}>
            내용
            <input
              type="text"
              id="contents"
              onChange={(e) => {
                return setFieldData({ ...fieldData, contents: e.target.value });
              }}
            />
          </label>
          <button type="submit" className={s.createBtn} onClick={handleSubmit}>
            생성하기
          </button>
        </section>
      </div>
    </section>
  );
};

export default ProjectCreate;
