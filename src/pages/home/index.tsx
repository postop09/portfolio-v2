import Banner from "@/components/Banner/Banner";
import HardSkillList from "@/components/HardSkillList/HardSkillList";
import Outro from "@/components/Outro/Outro";
import ProjectList from "@/components/ProjectList/ProjectList";
import SoftSkillList from "@/components/SoftSkillList/SoftSkillList";
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  return (
    <>
      <Banner />
      <ProjectList />
      <HardSkillList />
      <SoftSkillList />
      <Outro />
    </>
  );
};

export default index;
