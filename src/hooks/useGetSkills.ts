import { getCommunicationTools, getSkills, getTools } from "@/apis/skills.api";
import { SkillsDTO } from "@/types/skills.type";
import { useEffect, useState } from "react";

const useGetSkills = () => {
  const [skillCategory, setSkillCategory] = useState<SkillsDTO[]>([]);

  useEffect(() => {
    const getSkillCategory = async () => {
      const res = await Promise.all([
        getSkills(),
        getTools(),
        getCommunicationTools(),
      ]);
      setSkillCategory(res);
    };
    getSkillCategory();
  }, []);

  return { skillCategory };
};

export default useGetSkills;
