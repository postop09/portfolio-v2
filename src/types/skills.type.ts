export type Codeset = {
  id: string;
  name: string;
  value: string;
};

export type SkillsDTO = {
  title: string;
  src: string;
  data: Codeset[];
};
