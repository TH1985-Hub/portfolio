import type { ParsedResume, ResumeSection } from './types'

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function parseResumeMarkdown(markdown: string): ParsedResume {
  const lines = markdown.trim().split('\n')
  let name = ''
  let role = ''
  const sections: ResumeSection[] = []
  let currentTitle = ''
  let currentBody: string[] = []

  const flush = (): void => {
    if (currentTitle) {
      sections.push({
        id: slugify(currentTitle),
        title: currentTitle,
        body: currentBody.join('\n').trim(),
      })
    }
    currentTitle = ''
    currentBody = []
  }

  for (const line of lines) {
    if (line.startsWith('# ')) {
      name = line.slice(2).trim()
      continue
    }
    if (line.startsWith('**') && line.endsWith('**')) {
      role = line.slice(2, -2).trim()
      continue
    }
    if (line.startsWith('## ')) {
      flush()
      currentTitle = line.slice(3).trim()
      continue
    }
    if (currentTitle) {
      currentBody.push(line)
    }
  }

  flush()

  return { name, role, sections }
}

export function extractListItems(body: string): string[] {
  return body
    .split('\n')
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2).trim())
}
