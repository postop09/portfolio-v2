import Banner from "@/components/Banner/Banner";
import HardSkillList from "@/components/HardSkillList/HardSkillList";
import ProjectList from "@/components/ProjectList/ProjectList";
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  return (
    <section>
      <Banner />
      <ProjectList />
      <HardSkillList />
    </section>
  );
};

export default index;
