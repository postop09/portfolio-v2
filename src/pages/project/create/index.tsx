import Head from "next/head";
import ProjectCreate from "@/components/ProjectCreate/ProjectCreate";

const index = () => {
  return (
    <>
      <Head>
        <title>조윤식 포트폴리오 | 추가하기</title>
      </Head>
      <ProjectCreate />
    </>
  );
};

export default index;
