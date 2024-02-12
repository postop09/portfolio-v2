import { deleteProject } from "@/apis/projects.api";
import { queryClient } from "@/pages/_app";
import { useMutation } from "@tanstack/react-query";

const useDeleteProject = () => {
  const { mutate: handleDeleteProject } = useMutation({
    mutationFn: async (docId: string) => {
      return deleteProject(docId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getProjectList"] });
    },
  });
  return { handleDeleteProject };
};

export default useDeleteProject;
