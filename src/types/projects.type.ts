import { Codeset } from "./skills.type";

export type ProjectDTO = {
  id: string;
  contents: string;
  image: string;
  isGithub: boolean;
  isPage: boolean;
  isTeamProject: boolean;
  period: string;
  skills: Codeset[] | string[];
  summary: string;
  title: string;
  video: string;
};
