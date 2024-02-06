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
        <form
          className={s.inputContainer}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);
            return console.log(data);
          }}
        >
          <div className={s.inputWrapper}>
            <label htmlFor="title">프로젝트 이름</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className={s.inputWrapper}>
            <label htmlFor="period">작업 기간</label>
            <div>
              <input type="month" id="period" /> to{" "}
              <input type="month" id="period" />
            </div>
          </div>
          <InputSkills />
          <div className={s.inputWrapper}>
            <label htmlFor="image">메인배너 이미지</label>
            <input type="file" id="image" name="image" />
          </div>
          <div className={s.inputWrapper}>
            <label htmlFor="video">시연 영상</label>
            <input type="file" id="video" />
          </div>
          <div className={s.inputWrapper}>
            <label htmlFor="isGithub">Github</label>
            <input type="text" id="isGithub" />
          </div>
          <div className={s.inputWrapper}>
            <label htmlFor="isPage">URL</label>
            <input type="text" id="isPage" />
          </div>
          <InputTeamProject
            onChange={(value) => {
              return console.log(value);
            }}
          />
          <div className={s.inputWrapper}>
            <label htmlFor="summary">소개</label>
            <input type="text" id="summary" />
          </div>
          <div className={s.inputWrapper}>
            <label htmlFor="contents">내용</label>
            <input type="text" id="contents" />
          </div>
          <button type="submit" className={s.createBtn}>
            생성하기
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProjectCreate;
