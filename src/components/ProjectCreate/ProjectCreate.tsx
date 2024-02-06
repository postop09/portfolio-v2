import InputFile from "./InputFile/InputFile";
import InputPeriod from "./InputPeriod/InputPeriod";
import InputSkills from "./InputSkills/InputSkills";
import InputTeamProject from "./InputTeamProject/InputTeamProject";
import s from "./ProjectCreate.module.css";

const ProjectCreate = () => {
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
            <input type="text" id="title" name="title" />
          </label>
          <InputPeriod
            onChange={(value) => {
              return console.log(value);
            }}
          />
          <InputSkills
            onChange={(value) => {
              return console.log(value);
            }}
          />
          <InputFile title={"메인배너 이미지"} />
          <InputFile title={"시연 영상"} />
          <label className={s.inputWrapper}>
            Github
            <input type="text" id="isGithub" />
          </label>
          <label className={s.inputWrapper}>
            URL
            <input type="text" id="isPage" />
          </label>
          <InputTeamProject
            onChange={(value) => {
              return console.log(value);
            }}
          />
          <label className={s.inputWrapper}>
            소개
            <input type="text" id="summary" />
          </label>
          <label className={s.inputWrapper}>
            내용
            <input type="text" id="contents" />
          </label>
          <button type="submit" className={s.createBtn}>
            생성하기
          </button>
        </section>
      </div>
    </section>
  );
};

export default ProjectCreate;
