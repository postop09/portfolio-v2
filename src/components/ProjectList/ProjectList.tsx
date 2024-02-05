import Project from "@/components/Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import s from "./ProjectList.module.css";
import useGetProjects from "@/hooks/useGetProjects";

const ProjectList = () => {
  const { projectList } = useGetProjects();

  return (
    <div className={s.wrapper}>
      <strong className={s.title}>PROJECTS</strong>
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
                  src={project.image}
                  title={project.title}
                  period={project.period}
                  href={`/project/${project.id}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectList;
