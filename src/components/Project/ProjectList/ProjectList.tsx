import Project from "@/components/Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import s from "./ProjectList.module.css";
import useGetProjects from "@/hooks/useGetProjects";
import Link from "next/link";
import { deleteProject } from "@/apis/projects.api";

const ProjectList = () => {
  const { projectList } = useGetProjects();

  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <strong className={s.title}>PROJECTS</strong>
        {process.env.NODE_ENV === "development" && (
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
                {process.env.NODE_ENV === "development" && (
                  <button
                    type="button"
                    className={s.btnDelete}
                    onClick={() => {
                      return deleteProject(project.id!);
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
    </div>
  );
};

export default ProjectList;
