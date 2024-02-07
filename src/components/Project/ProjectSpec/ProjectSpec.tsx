import { Codeset } from "@/types/skills.type";
import s from "./ProjectSpec.module.css";
import Image from "next/image";

type Props = {
  skills: Codeset[] | undefined;
};

const ProjectSpec = ({ skills }: Props) => {
  return (
    <section className={s.wrapper}>
      <div className={s.imgWrapper}>
        <Image
          src="/assets/icon/icon_settings.png"
          alt=""
          width={300}
          height={300}
          priority
          className={s.imgMain}
        />
      </div>
      <div>
        <h3 className={s.title}>사용 기술 및 환경</h3>
        <ul>
          {skills?.map((skill) => {
            return (
              <li key={skill.id} className={s.skill}>
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSpec;
