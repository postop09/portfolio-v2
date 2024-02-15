import { getProjects } from "@/apis/projects.api";
import { useQuery } from "@tanstack/react-query";

const useGetProjects = () => {
  const { data: projectList = [] } = useQuery({
    queryKey: ["getProjectList"],
    queryFn: getProjects,
  });

  projectList.sort((a: any, b: any) => {
    return b.projectIndex - a.projectIndex;
  });

  return { projectList };
};

export default useGetProjects;
