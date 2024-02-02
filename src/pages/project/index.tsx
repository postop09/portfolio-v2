import ProjectBanner from "@/components/ProjectBanner/ProjectBanner";
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
    </div>
  );
};

export default index;
