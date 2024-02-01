import Banner from "@/components/Banner/Banner";
import HardSkillList from "@/components/HardSkillList/HardSkillList";
import ProjectList from "@/components/ProjectList/ProjectList";
import SoftSkill from "@/components/SoftSkill/SoftSkill";
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  return (
    <section>
      <Banner />
      <ProjectList />
      <HardSkillList />
      <SoftSkill />
    </section>
  );
};

export default index;
