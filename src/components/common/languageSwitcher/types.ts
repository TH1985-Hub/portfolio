export type SupportedLanguage = 'am' | 'en' | 'ru'

export type LanguageSwitcherProps = {
  lang: SupportedLanguage
  onChange: (lang: SupportedLanguage) => void
}
