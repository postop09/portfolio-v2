import { getCommunicationTools, getSkills, getTools } from "@/apis/skills.api";
import { useQuery } from "@tanstack/react-query";

const useGetSkills = () => {
  const getSkillCategory = async () => {
    return await Promise.all([
      getSkills(),
      getTools(),
      getCommunicationTools(),
    ]);
  };

  const { data: skillCategory = [] } = useQuery({
    queryKey: ["getSkillCategory"],
    queryFn: getSkillCategory,
  });

  return { skillCategory };
};

export default useGetSkills;
