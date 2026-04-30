export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: {
    dark: string;
    light: string;
  };
  iconName: string;
  githubUrl?: string;
  liveUrl?: string;
}

export type ProjectsState = {
  loading: boolean;
}
