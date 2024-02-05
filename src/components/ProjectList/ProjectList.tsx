import Project from "@/components/Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import s from "./ProjectList.module.css";
import useGetProjects from "@/hooks/useGetProjects";
import Link from "next/link";

const ProjectList = () => {
  const { projectList } = useGetProjects();

  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <strong className={s.title}>PROJECTS</strong>
        {process.env.NODE_ENV === "development" && (
          <Link href="/project/create" className={s.add}>
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
