export type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    id: 'sample-1',
    title: 'Sample product UI',
    description:
      'Replace this card with a real case study: problem, your role, stack, and outcome metrics.',
    stack: ['React', 'TypeScript', 'Ant Design'],
    href: 'https://github.com',
  },
  {
    id: 'sample-2',
    title: 'Design system / component library',
    description:
      'A good portfolio story: tokens, accessibility, documentation, and adoption across teams.',
    stack: ['Vite', 'Storybook', 'pnpm'],
  },
]
