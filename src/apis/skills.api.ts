import { CONST_SKILLS } from "@/constants/skills.const";
import { getCollection } from "./firebase.api";
import { SkillsDTO } from "@/types/skills.type";

export const getSkills = async (): Promise<SkillsDTO & any> => {
  const skills = await getCollection("skills");
  return {
    title: CONST_SKILLS.HARD_SKILL.title,
    src: CONST_SKILLS.HARD_SKILL.src,
    data: skills,
  };
};

export const getTools = async () => {
  const tools = await getCollection("tools");
  return {
    title: CONST_SKILLS.TOOL.title,
    src: CONST_SKILLS.TOOL.src,
    data: tools,
  };
};

export const getCommunicationTools = async () => {
  const tools = await getCollection("communication-tools");
  return {
    title: CONST_SKILLS.COMMUNICATION_TOOL.title,
    src: CONST_SKILLS.COMMUNICATION_TOOL.src,
    data: tools,
  };
};

export const getSofySkills = async () => {
  console.log("soft skills");
};
