import type { SupportedLanguage } from './types'

export const isSupportedLanguage = (key: string): key is SupportedLanguage => {
  return key === 'am' || key === 'en' || key === 'ru'
}
