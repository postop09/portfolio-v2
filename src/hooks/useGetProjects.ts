import { getProjects } from "@/apis/projects.api";
import { ProjectDTO } from "@/types/projects.type";
import { useEffect, useState } from "react";

const useGetProjects = () => {
  const [projectList, setProjectList] = useState<ProjectDTO[]>([]);

  useEffect(() => {
    const getProjectList = async () => {
      const res = await getProjects();
      setProjectList(res);
    };
    getProjectList();
  }, []);

  return { projectList };
};

export default useGetProjects;
