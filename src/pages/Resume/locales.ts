export type ComponentLocales = {
  [key: string]: string
}

export const LOCALES: Record<'am' | 'en' | 'ru', ComponentLocales> = {
  am: {
    badge: 'Պահված Markdown ռեզյումե',
    title: 'Ռեզյումե',
    description:
      'Այս ռեզյումեն պահվում է առանձին markdown ֆայլում և անմիջապես ցուցադրվում է պորտֆոլիոյում։',
    askGeminiButton: 'Հարցրու Gemini-ին դրա մասին',
    cardBadge: 'Պորտֆոլիոյի ռեզյումե',
  },
  en: {
    badge: 'Saved Markdown Resume',
    title: 'Resume',
    description:
      'This resume is stored in a standalone markdown file and rendered directly inside the portfolio.',
    askGeminiButton: 'Ask Gemini About It',
    cardBadge: 'Portfolio Resume',
  },
  ru: {
    badge: 'Сохраненное резюме в Markdown',
    title: 'Резюме',
    description:
      'Это резюме хранится в отдельном markdown-файле и отображается прямо внутри портфолио.',
    askGeminiButton: 'Спросить Gemini об этом',
    cardBadge: 'Резюме портфолио',
  },
}
