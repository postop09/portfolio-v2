import Banner from "@/components/Banner/Banner";
import ProjectList from "@/components/ProjectList/ProjectList";
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  return (
    <section>
      <Banner />
      <ProjectList />
    </section>
  );
};

export default index;
