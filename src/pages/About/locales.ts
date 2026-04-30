export type ComponentLocales = {
  [key: string]: string
}

export const LOCALES: Record<'am' | 'en' | 'ru', ComponentLocales> = {
  am: {
    title: 'Իմ մասին',
    sectionEducation: 'Կրթություն և ուղի',
    sectionStrengths: 'Ինչ եմ բերում',
    paragraph1:
      'Ես ծնվել եմ 1985 թվականի նոյեմբերի 9-ին, Վանաձորում, Հայաստանում։ Սովորել եմ Վանաձորի Մեսրոպ Մաշտոցի անվան թիվ 1 դպրոցում, այնուհետև շարունակել եմ կրթությունս Վանաձորի պետական մանկավարժական համալսարանում։',
    paragraph2:
      'Համալսարանում ուսանել եմ նախադպրոցական մանկավարժություն և հոգեբանություն։ Վերջին 3 տարիներին սովորում և աշխատում եմ որպես Frontend Developer, այդ թվում՝ 1 տարի խորացված React ուսուցում AGBU-ում։',
    education1: 'Մեսրոպ Մաշտոցի անվան թիվ 1 դպրոց, Վանաձոր',
    education2:
      'Վանաձորի պետական մանկավարժական համալսարան — Նախադպրոցական մանկավարժության և հոգեբանության բաժին',
    education3: 'AGBU — React-ի ուսուցում (1 տարի)',
    strength1: 'Frontend զարգացման մեջ 3 տարվա ուսուցում և գործնական աշխատանք։',
    strength2: 'AGBU-ում React-ի 1 տարվա խորացված ուսուցում։',
    strength3:
      'Մանկավարժության և հոգեբանության հիմքը օգնում է ստեղծել մտածված, օգտատերակենտրոն ինտերֆեյսներ։',
  },
  en: {
    title: 'About',
    sectionEducation: 'Education & Journey',
    sectionStrengths: 'What I bring',
    paragraph1:
      'I was born on November 9, 1985, in Vanadzor, Armenia. I studied at Mesrop Mashtots School No. 1 in Vanadzor before continuing my education at Vanadzor State Pedagogical University.',
    paragraph2:
      'At the university, I studied in the Department of Preschool Pedagogy and Psychology. Over the past 3 years, I have been learning and working as a Frontend Developer, including 1 year of dedicated React study at AGBU.',
    education1: 'Mesrop Mashtots School No. 1, Vanadzor',
    education2:
      'Vanadzor State Pedagogical University - Department of Preschool Pedagogy and Psychology',
    education3: 'AGBU - React studies for 1 year',
    strength1: '3 years of learning and hands-on work as a Frontend Developer.',
    strength2: '1 year of dedicated React study at AGBU.',
    strength3:
      'A background in pedagogy and psychology that supports thoughtful, user-centered interface work.',
  },
  ru: {
    title: 'Обо мне',
    sectionEducation: 'Образование и путь',
    sectionStrengths: 'Что я привношу',
    paragraph1:
      'Я родилась 9 ноября 1985 года в Ванадзоре, Армения. Училась в школе N1 имени Месропа Маштоца в Ванадзоре, после чего продолжила обучение в Ванадзорском государственном педагогическом университете.',
    paragraph2:
      'В университете я изучала дошкольную педагогику и психологию. Последние 3 года я обучаюсь и работаю как Frontend-разработчик, включая 1 год углубленного изучения React в AGBU.',
    education1: 'Школа N1 имени Месропа Маштоца, Ванадзор',
    education2:
      'Ванадзорский государственный педагогический университет — кафедра дошкольной педагогики и психологии',
    education3: 'AGBU — изучение React в течение 1 года',
    strength1: '3 года обучения и практической работы во Frontend-разработке.',
    strength2: '1 год углубленного изучения React в AGBU.',
    strength3:
      'Бэкграунд в педагогике и психологии помогает создавать продуманные интерфейсы, ориентированные на пользователя.',
  },
}
