import { projects } from '@/data/projects'
import { profileContent } from '@/content/profile'
import resumeMarkdown from '@/content/resume.md?raw'
import { generateGeminiContent } from '@/services/gemini'

 function buildPortfolioContext() {
  const projectLines = projects
    .map(
      (project, index) =>
        `${index + 1}. ${project.title}: ${project.description} Stack: ${project.stack.join(', ')}.`,
    )
    .join('\n')

  return [
    'Portfolio owner: Tatevik Harutyunyan',
    'Role: Frontend Engineer',
    `Professional summary: ${profileContent.shortSummary}`,
    `Personal background: ${profileContent.portfolioFacts.join(' | ')}`,
    'Core stack: React, TypeScript, Ant Design',
    'Portfolio stat: 15+ projects completed',
    `Strengths: ${profileContent.strengths.join(' | ')}`,
    'Experience focus: React, TypeScript, UI Systems, Performance, Accessibility',
    `Projects:\n${projectLines}`,
  ].join('\n')
}

const portfolioContext = buildPortfolioContext()
const savedResumeMarkdown = resumeMarkdown.trim()

function shouldReturnSavedResume(prompt: string) {
  const normalizedPrompt = prompt.toLowerCase()
  const asksForResume = /(resume|cv|curriculum vitae|ռեզյումե|կենսագր)/i.test(prompt)
  const asksToShowIt =
    /(show|bring|display|give|send|share|open|ցույց|բեր|ուղարկ|տուր)/i.test(prompt) ||
    normalizedPrompt.includes('my resume') ||
    normalizedPrompt.includes('my cv')

  return asksForResume && asksToShowIt
}

function buildSavedResumeReply() {
  return `Here is the saved resume from the portfolio markdown file:

${savedResumeMarkdown}`
}

function buildAssistantPrompt(userPrompt: string) {
  return `You are a helpful AI assistant inside Tatevik's portfolio website.
Use only the portfolio context below. If some detail is missing, say that it is not provided instead of inventing it.
Keep answers warm, professional, and concise.
When the user asks for portfolio, bio, or CV content, structure the response clearly.

Portfolio context:
${portfolioContext}

Saved resume markdown:
${savedResumeMarkdown}

User request:
${userPrompt}`
}

export function buildCvGenerationPrompt() {
  return `Create a professional CV draft in markdown based only on the portfolio context below.
Requirements:
- Do not invent employers, dates, degrees, locations, email addresses, or links that are not explicitly provided.
- Keep the tone modern, concise, and portfolio-ready.
- Include these sections: Professional Summary, Core Skills, Experience Highlights, Selected Projects, Value I Bring.
- Make the output clean markdown that can be rendered directly in a portfolio.

Portfolio context:
${portfolioContext}`
}

export const fetchBotResponse = async (prompt: string): Promise<string> => {
  if (shouldReturnSavedResume(prompt)) {
    return buildSavedResumeReply()
  }

  return generateGeminiContent(buildAssistantPrompt(prompt))
}
