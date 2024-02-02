import s from "./ProjectVideo.module.css";

const ProjectVideo = () => {
  return (
    <section className={s.wrapper}>
      <h3></h3>
      <video
        src="/assets/video_lolchamp.mp4"
        controls
        className={s.video}
      ></video>
    </section>
  );
};

export default ProjectVideo;
