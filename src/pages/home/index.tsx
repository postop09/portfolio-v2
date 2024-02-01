import Banner from "@/components/Banner/Banner";
import HardSkill from "@/components/HardSkill/HardSkill";
import ProjectList from "@/components/ProjectList/ProjectList";
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  return (
    <section>
      <Banner />
      <ProjectList />
      <HardSkill />
    </section>
  );
};

export default index;
