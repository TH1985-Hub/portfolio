import type { MenuProps } from 'antd'
import type { SupportedLanguage } from './types'

export const languageLabelMap: Record<SupportedLanguage, string> = {
  am: '🇦🇲 Հայ',
  en: '🇺🇸 EN',
  ru: '🇷🇺 RU',
}

export const languageMenuItems: NonNullable<MenuProps['items']> = [
  { key: 'en', label: languageLabelMap.en },
  { key: 'am', label: languageLabelMap.am },
  { key: 'ru', label: languageLabelMap.ru },
]
