import { getSoftSkills } from "@/apis/skills.api";
import { SoftSkillDTO } from "@/types/skills.type";
import { useState, useEffect } from "react";

const useGetSoftSkills = () => {
  const [softSkillList, setSoftSkillList] = useState<SoftSkillDTO[]>([]);

  useEffect(() => {
    const getSoftSkillList = async () => {
      const res = await getSoftSkills();
      setSoftSkillList(res);
    };
    getSoftSkillList();
  }, []);

  return { softSkillList };
};

export default useGetSoftSkills;
