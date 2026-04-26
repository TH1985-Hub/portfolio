import { profileContent } from "@/content/profile";

export const homeCopy = {
  badge: "AVAILABLE FOR NEW OPPORTUNITIES",
  title: "Crafting Digital Experiences with React.",
  subtitle: profileContent.shortSummary,
  ctaPrimary: "View My Work",
  ctaSecondary: "Resume",
  stackLabel: "CORE TECH STACK:",
  stack: ["React", "TypeScript", "Ant Design"] as const,
  statLabel: "PROJECTS COMPLETED",
  statValue: "15+",
  cards: [
    {
      title: "React Mastery",
      description:
        "Expertise in functional components, hooks, and advanced state management for complex web architectures.",
    },
    {
      title: "TypeScript",
      description:
        "Strictly typed code for predictable and maintainable applications.",
    },
    {
      title: "UI Systems",
      description:
        "Building cohesive experiences with Ant Design & Tailwind CSS.",
    },
  ] as const,
  bannerTitle: "Architecting Modern Performance",
  bannerSubtitle: "Speed, Accessibility, and Visual Soul.",
} as const;
