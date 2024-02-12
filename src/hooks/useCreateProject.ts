import { uploadFile } from "@/apis/firebase.api";
import { createProject } from "@/apis/projects.api";
import { queryClient } from "@/pages/_app";
import { ProjectDTO } from "@/types/projects.type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useCreateProject = (
  selectedImage: File | undefined,
  selectedVideo: File | undefined,
  fieldData: ProjectDTO,
) => {
  const router = useRouter();

  const getFilePaths = async () => {
    if (!selectedImage || !selectedVideo) {
      return alert("파일이 선택되지 않았습니다. 다시 선택해주세요.");
    }

    const imagePath = await uploadFile(selectedImage, fieldData.title);
    const videoPath = await uploadFile(selectedVideo, fieldData.title);

    if (!imagePath || !videoPath) {
      return alert(
        "파일 변환 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
      );
    }

    return { imagePath, videoPath };
  };

  const { mutate: handleCreateProject } = useMutation({
    mutationFn: async () => {
      const filePaths = await getFilePaths();

      if (filePaths) {
        const { imagePath, videoPath } = filePaths;
        return await createProject({
          ...fieldData,
          imagePath,
          videoPath,
        });
      }
    },
    onSuccess: () => {
      router.push("/");
      queryClient.invalidateQueries({ queryKey: ["getProjectList"] });
    },
  });
  return { handleCreateProject };
};

export default useCreateProject;
