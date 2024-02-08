import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import HardSkillList from "@/components/Skills/HardSkillList/HardSkillList";
import Outro from "@/components/Outro/Outro";
import ProjectList from "@/components/Project/ProjectList/ProjectList";
import SoftSkillList from "@/components/Skills/SoftSkillList/SoftSkillList";
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
  return (
    <>
      <Head>
        <title>포트폴리오 홈</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Banner />
        <ProjectList />
        <HardSkillList />
        <SoftSkillList />
        <Outro />
      </main>
    </>
  );
};

export default index;
