import { ProjectDTO } from "@/types/projects.type";
import {
  createDoc,
  deleteDocData,
  getCollection,
  getDocData,
} from "./firebase.api";

export const getProjects = async (): Promise<ProjectDTO[]> => {
  return await getCollection("projects");
};

export const getProject = async (id: string) => {
  return await getDocData("projects", id);
};

export const createProject = async (fieldData: ProjectDTO) => {
  return await createDoc("projects", fieldData);
};

export const deleteProject = async (docId: string) => {
  return await deleteDocData("projects", docId);
};
