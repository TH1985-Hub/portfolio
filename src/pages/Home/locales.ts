export type ComponentLocales = {
  [key: string]: string
}

export const LOCALES: Record<'am' | 'en' | 'ru', ComponentLocales> = {
  am: {
    badge: 'ԲԱՑ Է ՆՈՐ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐԻ ՀԱՄԱՐ',
    titleLinePrimary: 'Ստեղծում եմ թվային',
    titleLineSecondaryPrefix: 'փորձառություններ',
    titleAccent: 'React-ով։',
    subtitle:
      'Frontend Developer՝ 3 տարվա ուսումնառության և աշխատանքային փորձով, ներառյալ AGBU-ում React-ի 1 տարվա խորացված ուսուցում։ Վանաձորի պետական մանկավարժական համալսարանի շրջանավարտ՝ մանկավարժության և հոգեբանության հիմքով։',
    ctaPrimary: 'Տեսնել իմ աշխատանքները',
    ctaSecondary: 'Ռեզյումե',
    stackLabel: 'ՀԻՄՆԱԿԱՆ ՏԵԽ ՍԹԵՔ՝',
    statLabel: 'ԱՎԱՐՏՎԱԾ ՆԱԽԱԳԾԵՐ',
    bannerTitle: 'Ժամանակակից արդյունավետության ճարտարապետություն',
    bannerSubtitle: 'Արագություն, հասանելիություն և վիզուալ ոգի։',
    heroImageAlt: 'Գլխավոր նկար',
    reactMastery: 'React վարպետություն',
    typeScript: 'TypeScript',
    uiSystems: 'UI համակարգեր',
    reactMasteryDescription:
      'Փորձառություն ֆունկցիոնալ կոմպոնենտների, hooks-ի և առաջադեմ state կառավարման մեջ՝ բարդ web ճարտարապետությունների համար։',
    typeScriptDescription: 'Խիստ տիպավորված կոդ՝ կանխատեսելի և սպասարկելի հավելվածների համար։',
    uiSystemsDescription:
      'Կուռ օգտատերային փորձառություններ՝ Ant Design-ի և Tailwind CSS-ի միջոցով։',
  },
  en: {
    badge: 'AVAILABLE FOR NEW OPPORTUNITIES',
    titleLinePrimary: 'Crafting Digital',
    titleLineSecondaryPrefix: 'Experiences with',
    titleAccent: 'React.',
    subtitle:
      'Frontend Developer with 3 years of learning and working experience, including 1 year of focused React study at AGBU. Educated at Vanadzor State Pedagogical University with a background in pedagogy and psychology.',
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Resume',
    stackLabel: 'CORE TECH STACK:',
    statLabel: 'PROJECTS COMPLETED',
    bannerTitle: 'Architecting Modern Performance',
    bannerSubtitle: 'Speed, Accessibility, and Visual Soul.',
    heroImageAlt: 'Hero portrait',
    reactMastery: 'React Mastery',
    typeScript: 'TypeScript',
    uiSystems: 'UI Systems',
    reactMasteryDescription:
      'Expertise in functional components, hooks, and advanced state management for complex web architectures.',
    typeScriptDescription:
      'Strictly typed code for predictable and maintainable applications.',
    uiSystemsDescription: 'Building cohesive experiences with Ant Design & Tailwind CSS.',
  },
  ru: {
    badge: 'ОТКРЫТА К НОВЫМ ВОЗМОЖНОСТЯМ',
    titleLinePrimary: 'Создаю цифровые',
    titleLineSecondaryPrefix: 'продуктовые решения с',
    titleAccent: 'React.',
    subtitle:
      'Frontend-разработчик с 3-летним опытом обучения и практики, включая 1 год углубленного изучения React в AGBU. Выпускница Ванадзорского государственного педагогического университета с бэкграундом в педагогике и психологии.',
    ctaPrimary: 'Посмотреть мои работы',
    ctaSecondary: 'Резюме',
    stackLabel: 'ОСНОВНОЙ ТЕХНОСТЕК:',
    statLabel: 'ЗАВЕРШЕННЫЕ ПРОЕКТЫ',
    bannerTitle: 'Архитектура современной производительности',
    bannerSubtitle: 'Скорость, доступность и визуальная выразительность.',
    heroImageAlt: 'Портрет на обложке',
    reactMastery: 'Экспертиза в React',
    typeScript: 'TypeScript',
    uiSystems: 'UI-системы',
    reactMasteryDescription:
      'Экспертиза во функциональных компонентах, hooks и продвинутом управлении состоянием для сложной web-архитектуры.',
    typeScriptDescription:
      'Строго типизированный код для предсказуемых и поддерживаемых приложений.',
    uiSystemsDescription:
      'Построение цельного пользовательского опыта с помощью Ant Design и Tailwind CSS.',
  },
}
