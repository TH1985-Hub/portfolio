export type Project = {
  id: number;
  tags: string[];
  coverImage: string;
  githubUrl?: string;
  liveUrl?: string;
};

export type ProjectsState = {
  loading: boolean;
};
