import type { AppMessages, SupportedLang } from '@/locales'

import { LOCALES as allLocales } from '@/locales'

export type ComponentLocales = AppMessages['layout']

export const LOCALES: Record<SupportedLang, ComponentLocales> = {
  am: allLocales.am.layout,
  en: allLocales.en.layout,
  ru: allLocales.ru.layout,
}
