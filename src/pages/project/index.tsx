import ContentsCard from "@/components/ContentsCard/ContentsCard";
import ProjectBanner from "@/components/ProjectBanner/ProjectBanner";
import ProjectLinkList from "@/components/ProjectLinkList/ProjectLinkList";
import ProjectSpec from "@/components/ProjectSpec/ProjectSpec";
import ProjectSummary from "@/components/ProjectSummary/ProjectSummary";
import ProjectVideo from "@/components/ProjectVideo/ProjectVideo";

const index = () => {
  return (
    <div>
      <h2>PROJECT DETAIL</h2>
      <ProjectBanner />
      <ProjectSpec />
      <ProjectVideo />
      <ProjectSummary />
      <ContentsCard />
      <ContentsCard type="switch" />
      <div
        style={{
          display: "flex",
          gap: "20px",
          maxWidth: "1200px",
          margin: "40px auto",
        }}
      >
        <ContentsCard type="column" />
        <ContentsCard type="column" />
      </div>
      <ProjectLinkList />
    </div>
  );
};

export default index;
