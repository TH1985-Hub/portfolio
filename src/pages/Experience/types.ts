export type TimelineLayout = 'standard' | 'flip'

export type TimelineTone = 'pink' | 'purple'

export type TimelineItem = {
  id: number
  layout: TimelineLayout
  tone: TimelineTone
}

export type SkillBarPercent = 95 | 90 | 88

export type SkillBarItem = {
  id: string
  percent: SkillBarPercent
}

export type ArsenalIconKey = 'layers' | 'api' | 'node' | 'cloud' | 'figma' | 'git'

export type ArsenalCardItem = {
  id: string
  icon: ArsenalIconKey
}
