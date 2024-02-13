import { deleteFile } from "@/apis/firebase.api";
import { deleteProject } from "@/apis/projects.api";
import { queryClient } from "@/pages/_app";
import { useMutation } from "@tanstack/react-query";

type Params = {
  docId: string;
  projectTitle: string;
};

const useDeleteProject = () => {
  const { mutate: handleDeleteProject } = useMutation({
    mutationFn: async ({ docId, projectTitle }: Params) => {
      await deleteFile(projectTitle);
      await deleteProject(docId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getProjectList"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { handleDeleteProject };
};

export default useDeleteProject;
