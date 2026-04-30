export type ComponentLocales = {
  [key: string]: string
}

export const LOCALES: Record<'am' | 'en' | 'ru', ComponentLocales> = {
  am: {
    menuHome: 'Գլխավոր',
    menuGemini: 'Gemini',
    menuProjects: 'Նախագծեր',
    menuExperience: 'Փորձ',
    menuContact: 'Կապ',
    toggleTheme: 'Փոխել թեման',
    builtWith: 'Ստեղծված է React և TypeScript-ով',
    github: 'GitHub',
    linkedIn: 'LinkedIn',
    twitter: 'Twitter',
  },
  en: {
    menuHome: 'Home',
    menuGemini: 'Gemini',
    menuProjects: 'Projects',
    menuExperience: 'Experience',
    menuContact: 'Contact',
    toggleTheme: 'Toggle theme',
    builtWith: 'Built with React & TypeScript',
    github: 'GitHub',
    linkedIn: 'LinkedIn',
    twitter: 'Twitter',
  },
  ru: {
    menuHome: 'Главная',
    menuGemini: 'Gemini',
    menuProjects: 'Проекты',
    menuExperience: 'Опыт',
    menuContact: 'Контакты',
    toggleTheme: 'Переключить тему',
    builtWith: 'Создано на React и TypeScript',
    github: 'GitHub',
    linkedIn: 'LinkedIn',
    twitter: 'Twitter',
  },
}
