export type ComponentLocales = {
  [key: string]: string
}

export const LOCALES: Record<'am' | 'en' | 'ru', ComponentLocales> = {
  am: {
    title: 'Փորձ',
    subtitle:
      'Ավելացրեք ձեր պաշտոնները, ընկերությունները, ազդեցության մետրիկաները և ձեր պատասխանատվության ներքո եղած համակարգերը։',
    tagReact: 'React',
    tagTypeScript: 'TypeScript',
    tagUiSystems: 'UI համակարգեր',
    tagPerformance: 'Արդյունավետություն',
    tagAccessibility: 'Հասանելիություն',
  },
  en: {
    title: 'Experience',
    subtitle:
      'Add your roles, companies, impact metrics, and the systems you have owned.',
    tagReact: 'React',
    tagTypeScript: 'TypeScript',
    tagUiSystems: 'UI Systems',
    tagPerformance: 'Performance',
    tagAccessibility: 'Accessibility',
  },
  ru: {
    title: 'Опыт',
    subtitle:
      'Добавьте ваши роли, компании, метрики влияния и системы, за которые вы отвечали.',
    tagReact: 'React',
    tagTypeScript: 'TypeScript',
    tagUiSystems: 'UI-системы',
    tagPerformance: 'Производительность',
    tagAccessibility: 'Доступность',
  },
}
