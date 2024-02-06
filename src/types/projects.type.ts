import { Codeset } from "./skills.type";

export type ProjectDTO = {
  id?: string;
  contents: string;
  githubUrl: string;
  pageUrl: string;
  isTeamProject: boolean;
  startDt: string;
  endDt: string;
  skills: Codeset[];
  summary: string;
  title: string;
  imagePath: string;
  videoPath: string;
  period: string;
};
