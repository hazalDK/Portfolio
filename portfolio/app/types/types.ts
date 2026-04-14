type project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  url: string;
  github_url: string;
  created_at: string;
};

export type projects = project[];

type skill = {
  id: number;
  name: string;
  category: string;
  proficiency: string;
};

export type skills = skill[];
