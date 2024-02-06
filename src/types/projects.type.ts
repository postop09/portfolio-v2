import { Codeset } from "./skills.type";

export type ProjectDTO = {
  id?: string;
  contents: string;
  isGithub: boolean | string;
  isPage: boolean | string;
  isTeamProject: boolean;
  startDt: string;
  endDt: string;
  skills: Codeset[] | string[];
  summary: string;
  title: string;
  imagePath: string;
  videoPath: string;
  period: string;
};
