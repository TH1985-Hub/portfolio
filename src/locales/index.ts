import am from './am.json'
import en from './en.json'
import ru from './ru.json'

export type SupportedLang = 'am' | 'en' | 'ru'

export const LOCALES = {
  am,
  en,
  ru,
} as const

export type AppMessages = typeof en
