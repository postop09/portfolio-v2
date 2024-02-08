import { getProject } from "@/apis/projects.api";
import ProjectBanner from "@/components/Project/ProjectBanner/ProjectBanner";
import ProjectContents from "@/components/Project/ProjectContents/ProjectContents";
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
      <ProjectContents contents={project?.contents} />
      <ProjectLinkList
        title={project?.title}
        githubUrl={project?.githubUrl}
        pageUrl={project?.pageUrl}
        imgSrc={project?.imagePath}
      />
    </div>
  );
};

export default Id;
