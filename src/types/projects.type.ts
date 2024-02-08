import { Codeset } from "./skills.type";

export type ProjectContents = {
  type: string;
  title: string;
  contents: string;
  imagePath: string;
  rowNum?: number;
};

export type ProjectDTO = {
  id?: string;
  contents: ProjectContents[];
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
