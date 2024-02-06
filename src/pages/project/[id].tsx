import { getProject } from "@/apis/projects.api";
import ContentsCard from "@/components/ContentsCard/ContentsCard";
import ProjectBanner from "@/components/Project/ProjectBanner/ProjectBanner";
import ProjectLinkList from "@/components/Project/ProjectLinkList/ProjectLinkList";
import ProjectSpec from "@/components/Project/ProjectSpec/ProjectSpec";
import ProjectSummary from "@/components/Project/ProjectSummary/ProjectSummary";
import ProjectVideo from "@/components/Project/ProjectVideo/ProjectVideo";
import { ProjectDTO } from "@/types/projects.type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Id = () => {
  const { query } = useRouter();
  const [project, setProject] = useState<ProjectDTO>();

  useEffect(() => {
    const get = async () => {
      if (typeof query.id === "string") {
        const res = await getProject(query.id);
        setProject(res);
      }
    };
    get();
  }, [query]);

  return (
    <div>
      <h2>PROJECT DETAIL</h2>
      <ProjectBanner
        src={project?.imagePath}
        title={project?.title}
        startDt={project?.startDt}
        endDt={project?.endDt}
        isTeamProject={project?.isTeamProject}
      />
      <ProjectSpec skills={project?.skills} />
      <ProjectVideo src={project?.videoPath} />
      <ProjectSummary summary={project?.summary} />
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
      <ProjectLinkList
        title={project?.title}
        githubUrl={project?.githubUrl}
        pageUrl={project?.pageUrl}
      />
    </div>
  );
};

export default Id;
