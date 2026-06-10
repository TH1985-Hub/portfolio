export type ResumeSection = {
  id: string
  title: string
  body: string
}

export type ParsedResume = {
  name: string
  role: string
  sections: ResumeSection[]
}
