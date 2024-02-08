import s from "./ProjectVideo.module.css";

type Props = {
  src: string | undefined;
};

const ProjectVideo = ({ src }: Props) => {
  return (
    <section className={s.wrapper}>
      <h3></h3>
      <video
        src={src || "/assets/video_lolchamp.mp4"}
        controls
        className={s.video}
      ></video>
    </section>
  );
};

export default ProjectVideo;
