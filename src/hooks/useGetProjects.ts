import { getProjects } from "@/apis/projects.api";
import { useQuery } from "@tanstack/react-query";

const useGetProjects = () => {
  const { data: projectList = [] } = useQuery({
    queryKey: ["getProjectList"],
    queryFn: getProjects,
  });

  return { projectList };
};

export default useGetProjects;
