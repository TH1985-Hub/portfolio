import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import am from '@/locales/am.json'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

const SUPPORTED_LANGUAGES = ['am', 'en', 'ru'] as const

const resources = {
  am: {
    translation: am,
  },
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
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
