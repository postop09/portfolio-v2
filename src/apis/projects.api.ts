import { ProjectDTO } from "@/types/projects.type";
import { getCollection } from "./firebase.api";

export const getProjects = async (): Promise<ProjectDTO[]> => {
  return await getCollection("projects");
};
