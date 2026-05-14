import heroWorkspace from '@/assets/experience/avatar-shot.mp4'

import type { SkillBarItem, SkillGroup, TimelineItem } from './types'

export const EXPERIENCE_HERO_IMAGE = heroWorkspace

export const TIMELINE_ITEMS: TimelineItem[] = [
  { id: 1, layout: 'standard', tone: 'pink' },
  { id: 2, layout: 'flip', tone: 'purple' },
  { id: 3, layout: 'standard', tone: 'pink' },
]

export const SKILL_BARS: SkillBarItem[] = [
  { id: 'reactNext', percent: 95 },
  { id: 'typescript', percent: 90 },
  { id: 'antDesign', percent: 88 },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    groupIcon: 'https://cdn-icons-png.flaticon.com/512/603/603197.png',
    items: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/1572B6' },
      { name: 'Ant Design', icon: 'https://cdn.simpleicons.org/antdesign/0170FE' },
    ],
  },
  {
    title: 'Backend',
    groupIcon: 'https://cdn-icons-png.flaticon.com/512/2721/2721293.png',
    items: [
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
      { name: 'REST API', icon: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/764ABC' },
    ],
  },
  {
    title: 'Tools & Others',
    groupIcon: 'https://cdn-icons-png.flaticon.com/512/563/563541.png',
    items: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor/000000' },
      { name: 'Stitch', icon: 'https://img.shields.io/badge/Stitch-111111?style=flat&logo=google&logoColor=white' },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
    ],
  },
]
