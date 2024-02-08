import { Codeset } from "./skills.type";

export type ProjectContents = {
  type: string;
  title: string;
  contents: string;
  imagePath: string;
  rowNum?: number;
};

export type ProjectContentsRow = {
  [key: string]: ProjectContents | ProjectContents[];
};

export type ProjectDTO = {
  id?: string;
  contents: ProjectContentsRow;
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
