import atmosphereCover from '@/assets/projects/atmosphere.png'
import luminaCover from '@/assets/projects/lumina.jpg'
import nexusCover from '@/assets/projects/nexus.png'
import vaporCover from '@/assets/projects/vapor.png'

import type { Project } from './types'

export const PROJECTS: Project[] = [
  {
    id: 1,
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    layout: 'feature',
    coverImage: nexusCover,
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    tags: ['YJS', 'NEXT.JS'],
    layout: 'stack',
    coverImage: vaporCover,
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    tags: ['THREE.JS', 'WEBGL', 'FRAMER MOTION'],
    layout: 'horizontal',
    coverImage: luminaCover,
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 4,
    tags: ['GRAPHQL', 'POSTGRESQL'],
    layout: 'compact',
    coverImage: atmosphereCover,
    githubUrl: '#',
    liveUrl: '#',
  },
]
