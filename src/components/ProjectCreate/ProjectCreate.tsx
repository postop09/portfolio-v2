import InputFile from "./InputFile/InputFile";
import InputPeriod from "./InputPeriod/InputPeriod";
import InputSkills from "./InputSkills/InputSkills";
import InputTeamProject from "./InputTeamProject/InputTeamProject";
import s from "./ProjectCreate.module.css";
import { ProjectDTO } from "@/types/projects.type";
import { useState } from "react";
import InputContents from "./InputContents/InputContents";
import useCreateProject from "@/hooks/useCreateProject";

const ProjectCreate = () => {
  const [selectedImage, setSelectedImage] = useState<File>();
  const [selectedVideo, setSelectedVideo] = useState<File>();
  const [fieldData, setFieldData] = useState<ProjectDTO>({
    contents: {},
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
  const { handleCreateProject } = useCreateProject(
    selectedImage,
    selectedVideo,
    fieldData,
  );

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
            type="video"
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
          <InputContents
            storageRoot={fieldData.title}
            onChange={(value) => {
              return setFieldData({ ...fieldData, contents: value });
            }}
          />
          <button
            type="submit"
            className={s.createBtn}
            onClick={() => {
              return handleCreateProject();
            }}
          >
            생성하기
          </button>
        </section>
      </div>
    </section>
  );
};

export default ProjectCreate;
