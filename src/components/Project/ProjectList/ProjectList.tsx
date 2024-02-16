import Project from "@/components/Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import s from "./ProjectList.module.css";
import useGetProjects from "@/hooks/useGetProjects";
import Link from "next/link";
import useDeleteProject from "@/hooks/useDeleteProject";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { USER } from "@/constants/user.const";

const ProjectList = () => {
  const { projectList } = useGetProjects();
  const { handleDeleteProject } = useDeleteProject();
  const [email, setEmail] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setEmail(user.email || "");
    } else {
      setEmail("");
    }
  });

  return (
    <section className={s.wrapper}>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>PROJECTS</h2>
        {email === USER.EMAIL && (
          <Link href="/project/create" className={s.btnAdd}>
            +
          </Link>
        )}
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="projectSwiper"
        >
          {projectList.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <Project
                  src={project.imagePath}
                  title={project.title}
                  startDt={project.startDt}
                  endDt={project.endDt}
                  href={`/project/${project.id}`}
                />
                {email === USER.EMAIL && (
                  <button
                    type="button"
                    className={s.btnDelete}
                    onClick={() => {
                      return handleDeleteProject({
                        docId: project.id!,
                        projectTitle: project.title,
                      });
                    }}
                  >
                    삭제하기
                  </button>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectList;
