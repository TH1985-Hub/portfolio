import atmosphereCover from "@/assets/projects/atmosphere.png";
import openAICover from "@/assets/projects/openAI.png";
// import nexusCover from "@/assets/projects/nexus.png";
import jewelleyCover from "@/assets/projects/jewellary.png.png";
import wineCover from "@/assets/projects/wineCover.png";

import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    tags: ["React 18", "TypeScript", "Ant Design"],
    coverImage: jewelleyCover,
    githubUrl: "https://github.com/TH1985-Hub/Kassaman-",
    liveUrl: "https://kassaman-sigma.vercel.app",
  },
  {
    id: 2,
    tags: ["React", "Ant Design", "Framer Motion"],
    coverImage: wineCover,
    githubUrl: "https://github.com/TH1985-Hub/wine-shop",
    liveUrl: "https://wine-shop-vus8-omx85gt1a-htatevik382-7768s-projects.vercel.app/",
  },
  {
    id: 3,
    tags: ["React", "Redux", "Material UI"],
    coverImage: openAICover,
    githubUrl: "https://github.com/TH1985-Hub/open-AI",
    liveUrl: "#",
  },
  {
    id: 4,
    tags: ["GRAPHQL", "POSTGRESQL"],
    coverImage: atmosphereCover,
    githubUrl: "#",
    liveUrl: "#",
  },
];
