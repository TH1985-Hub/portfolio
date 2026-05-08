export type ProjectLayout = 'feature' | 'stack' | 'compact' | 'horizontal'

export type Project = {
  id: number
  tags: string[]
  layout: ProjectLayout
  coverImage: string
  githubUrl?: string
  liveUrl?: string
}

export type ProjectsState = {
  loading: boolean
}
