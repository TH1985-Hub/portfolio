import heroWorkspace from '@/assets/experience/avatar-shot.mp4'

import type { ArsenalCardItem, SkillBarItem, TimelineItem } from './types'

export const EXPERIENCE_HERO_IMAGE = heroWorkspace

export const TIMELINE_ITEMS: TimelineItem[] = [
  { id: 1, layout: 'standard', tone: 'pink' },
  { id: 2, layout: 'flip', tone: 'purple' },
  { id: 3, layout: 'standard', tone: 'pink' },
]

export const SKILL_BARS: SkillBarItem[] = [
  { id: 'reactNext', percent: 95 },
  { id: 'typescript', percent: 90 },
  { id: 'tailwind', percent: 88 },
]

export const ARSENAL_CARDS: ArsenalCardItem[] = [
  { id: 'redux', icon: 'layers' },
  { id: 'api', icon: 'api' },
  { id: 'node', icon: 'node' },
  { id: 'firebase', icon: 'cloud' },
  { id: 'figma', icon: 'figma' },
  { id: 'git', icon: 'git' },
]
