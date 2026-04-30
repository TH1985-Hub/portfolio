export type ComponentLocales = {
  [key: string]: string
}

export const LOCALES: Record<'am' | 'en' | 'ru', ComponentLocales> = {
  am: {
    badge: 'Նախագծեր',
    heroTitle: 'Կառուցված փորձառություններ։',
    heroDescription:
      'Բարձր արդյունավետությամբ React հավելվածների ընտրված հավաքածու՝ ժամանակակից ճարտարապետության և հոսուն թվային դիզայնի խաչմերուկում։',
    viewProject: 'Տեսնել նախագիծը',
    github: 'GitHub',
    noProjects: 'Նախագծեր չեն գտնվել',
    noProjectsHint: 'Շուտով նոր նախագծեր կհայտնվեն։',
    ctaTitle: 'Ունե՞ք յուրահատուկ տեսլական',
    ctaDescription:
      'Ներկայումս ընդունում եմ ընտրված ֆրիլանս հնարավորություններ՝ բարձր ազդեցությամբ frontend մշակման համար։',
    ctaButton: 'Եկեք համագործակցենք',
    ctaToast: 'Եկեք համագործակցենք։ Կապ հաստատեք հնարավորությունների համար։',
    viewDetailsToast: 'Դիտում եք {{title}} նախագծի մանրամասները',
    viewRepoToast: '{{title}} նախագծի GitHub պահոցը',
    project1Title: 'Nexus Dashboard',
    project1Description:
      'Իրական ժամանակի ֆինանսական վերլուծության հարթակ՝ React, TypeScript և D3.js տեխնոլոգիաներով։ Ներառում է բարդ տվյալների վիզուալիզացիա՝ միլիվայրկյանային ուշացումով WebSocket թարմացումներով։',
    project2Title: 'Vapor Code',
    project2Description:
      'Համատեղ կոդային խմբագիր՝ synthwave ոճով և իրական ժամանակի կուրսորի հետևմամբ CRDT տեխնոլոգիայով։',
    project3Title: 'Lumina Social',
    project3Description:
      'Գաղտնիության վրա կենտրոնացած սոցիալական ցանց՝ ապակենտրոնացված ինքնության փորձարկմամբ։ Ստեղծված է React և Three.js հիմքով՝ ինտերակտիվ 3D ավատարներով։',
    project4Title: 'Atmosphere CMS',
    project4Description:
      'Headless CMS թվային ստեղծագործողների համար՝ ինտուիտիվ drag-and-drop սխեմայի կոնստրուկտորով։',
  },
  en: {
    badge: 'Projects',
    heroTitle: 'Engineered Experiences.',
    heroDescription:
      'A curated selection of high-performance React applications, exploring the intersection of modern architecture and fluid digital design.',
    viewProject: 'View Project',
    github: 'GitHub',
    noProjects: 'No projects found',
    noProjectsHint: 'Check back soon for new projects!',
    ctaTitle: 'Have a unique vision?',
    ctaDescription:
      "I'm currently accepting select freelance opportunities for high-impact frontend development.",
    ctaButton: "Let's Collaborate",
    ctaToast: "Let's collaborate! Contact me for opportunities.",
    viewDetailsToast: 'Viewing {{title}} details',
    viewRepoToast: 'GitHub repository for {{title}}',
    project1Title: 'Nexus Dashboard',
    project1Description:
      'A real-time financial analytics platform built with React, TypeScript, and D3.js. Features complex data visualization with millisecond-latency WebSocket updates.',
    project2Title: 'Vapor Code',
    project2Description:
      'A collaborative code editor with retro-synthwave aesthetics and real-time cursor tracking using CRDTs.',
    project3Title: 'Lumina Social',
    project3Description:
      'A privacy-focused social network experimenting with decentralized identity, built with React and Three.js for interactive 3D profile avatars.',
    project4Title: 'Atmosphere CMS',
    project4Description:
      'A headless CMS focused on digital creators, featuring an intuitive drag-and-drop schema builder.',
  },
  ru: {
    badge: 'Проекты',
    heroTitle: 'Продуманные цифровые продукты.',
    heroDescription:
      'Подборка высокопроизводительных React-приложений на стыке современной архитектуры и выразительного цифрового дизайна.',
    viewProject: 'Посмотреть проект',
    github: 'GitHub',
    noProjects: 'Проекты не найдены',
    noProjectsHint: 'Скоро появятся новые проекты!',
    ctaTitle: 'Есть уникальная идея?',
    ctaDescription:
      'Сейчас я открыта к выборочным фриланс-проектам с высоким влиянием на frontend-разработку.',
    ctaButton: 'Давайте сотрудничать',
    ctaToast: 'Давайте сотрудничать! Свяжитесь со мной для обсуждения возможностей.',
    viewDetailsToast: 'Просмотр деталей проекта {{title}}',
    viewRepoToast: 'GitHub-репозиторий проекта {{title}}',
    project1Title: 'Nexus Dashboard',
    project1Description:
      'Платформа финансовой аналитики в реальном времени на React, TypeScript и D3.js с продвинутой визуализацией данных и обновлениями через WebSocket.',
    project2Title: 'Vapor Code',
    project2Description:
      'Совместный редактор кода в стиле ретро-синтвейв с отслеживанием курсоров в реальном времени на базе CRDT.',
    project3Title: 'Lumina Social',
    project3Description:
      'Социальная сеть с фокусом на приватность и экспериментами с децентрализованной идентичностью, построенная на React и Three.js.',
    project4Title: 'Atmosphere CMS',
    project4Description:
      'Headless CMS для цифровых создателей с интуитивным drag-and-drop конструктором схем.',
  },
}
