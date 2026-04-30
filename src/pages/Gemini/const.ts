import type { TFunction } from 'i18next'

export const createInitialBotMessage = (t: TFunction) => {
  return {
    role: 'bot' as const,
    text: t('gemini.initialBotMessage'),
  }
}
