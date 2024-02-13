import { getSoftSkills } from "@/apis/skills.api";
import { useQuery } from "@tanstack/react-query";

const useGetSoftSkills = () => {
  const { data: softSkillList = [] } = useQuery({
    queryKey: ["getSoftSkills"],
    queryFn: getSoftSkills,
  });

  return { softSkillList };
};

export default useGetSoftSkills;
