import Project from "@/components/Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import s from "./ProjectList.module.css";

const ProjectList = () => {
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
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectList;
