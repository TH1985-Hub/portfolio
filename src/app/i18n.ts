import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { LOCALES as LAYOUT_LOCALES } from '@/components/appLayout/locales'
import { LOCALES as ABOUT_LOCALES } from '@/pages/About/locales'
import { LOCALES as CONTACT_LOCALES } from '@/pages/Contact/locales'
import { LOCALES as EXPERIENCE_LOCALES } from '@/pages/Experience/locales'
import { LOCALES as GEMINI_LOCALES } from '@/pages/Gemini/locales'
import { LOCALES as HOME_LOCALES } from '@/pages/Home/locales'
import { LOCALES as PROJECTS_LOCALES } from '@/pages/Projects/locales'
import { LOCALES as RESUME_LOCALES } from '@/pages/Resume/locales'

const SUPPORTED_LANGUAGES = ['am', 'en', 'ru'] as const

const resources = {
  am: {
    translation: {
      resume: RESUME_LOCALES.am,
      gemini: GEMINI_LOCALES.am,
      home: HOME_LOCALES.am,
      about: ABOUT_LOCALES.am,
      experience: EXPERIENCE_LOCALES.am,
      contact: CONTACT_LOCALES.am,
      projects: PROJECTS_LOCALES.am,
      layout: LAYOUT_LOCALES.am,
    },
  },
  en: {
    translation: {
      resume: RESUME_LOCALES.en,
      gemini: GEMINI_LOCALES.en,
      home: HOME_LOCALES.en,
      about: ABOUT_LOCALES.en,
      experience: EXPERIENCE_LOCALES.en,
      contact: CONTACT_LOCALES.en,
      projects: PROJECTS_LOCALES.en,
      layout: LAYOUT_LOCALES.en,
    },
  },
  ru: {
    translation: {
      resume: RESUME_LOCALES.ru,
      gemini: GEMINI_LOCALES.ru,
      home: HOME_LOCALES.ru,
      about: ABOUT_LOCALES.ru,
      experience: EXPERIENCE_LOCALES.ru,
      contact: CONTACT_LOCALES.ru,
      projects: PROJECTS_LOCALES.ru,
      layout: LAYOUT_LOCALES.ru,
    },
  },
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    supportedLngs: [...SUPPORTED_LANGUAGES],
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'portfolio.lang',
    },
  })

export { i18n }
