import { ProjectDTO } from "@/types/projects.type";
import { getCollection, getDocData } from "./firebase.api";

export const getProjects = async (): Promise<ProjectDTO[]> => {
  return await getCollection("projects");
};

export const getProject = async (id: string) => {
  return await getDocData("projects", id);
};
