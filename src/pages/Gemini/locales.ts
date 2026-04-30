export type ComponentLocales = {
  [key: string]: string
}

export const LOCALES: Record<'am' | 'en' | 'ru', ComponentLocales> = {
  am: {
    badge: 'Gemini Զրույց',
    title: 'Հարցրու Gemini-ին պորտֆոլիոյի մասին',
    description:
      'Զրուցիր նախագծերի, փորձի մասին կամ խնդրիր Gemini-ին բերել պահված ռեզյումեն ուղիղ զրույցի մեջ։',
    conversationTitle: 'Gemini Զրույց',
    conversationSubtitle:
      'Փորձիր հարցումներ, օրինակ՝ «ցույց տուր իմ ռեզյումեն», «ամփոփիր իմ փորձը» կամ «գրի՛ր կարճ ներածական ռեքրութերի համար»։',
    showSavedResume: 'Ցույց տալ պահված ռեզյումեն',
    resumeHintPrefix: 'Ռեզյումեն հիմա գտնվում է առանձին ',
    resumePageLink: 'Ռեզյումե էջում',
    send: 'Ուղարկել',
    inputPlaceholder:
      'Հարցրու նախագծերի, փորձի կամ այս պորտֆոլիոյի հետ կապված ցանկացած բան...',
    thinking: 'Մտածում է...',
    error: 'Gemini-ն այժմ ժամանակավոր անհասանելի է։ Խնդրում ենք փորձել կրկին։',
    initialBotMessage:
      'Բարև։ Ես Tatevik-ի պորտֆոլիոյի օգնականն եմ։ Հարցրու ինձ նախագծերի, փորձի կամ հմտությունների մասին։',
    resumePrompt: 'Ցույց տուր իմ պահված ռեզյումեն markdown ձևաչափով։',
    widgetBadge: 'AI Օգնական',
    widgetSubtitle: 'Հարցրու նախագծերի, փորձի կամ այս պորտֆոլիոյի մասին։',
    widgetOpenPage: 'Բացել էջը',
    widgetCloseAria: 'Փակել Gemini օգնականը',
    widgetOpenAria: 'Բացել Gemini օգնականը',
    widgetChatTitle: 'Gemini AI Օգնական',
  },
  en: {
    badge: 'Gemini Chat',
    title: 'Ask Gemini About the Portfolio',
    description:
      'Chat here about projects, experience, or ask Gemini to bring the saved resume directly into the conversation.',
    conversationTitle: 'Gemini Conversation',
    conversationSubtitle:
      'Try prompts like "show my resume", "summarize my experience", or "write a short recruiter intro".',
    showSavedResume: 'Show Saved Resume',
    resumeHintPrefix: 'The resume itself now lives on the separate ',
    resumePageLink: 'Resume page',
    send: 'Send',
    inputPlaceholder: 'Ask about projects, experience, or anything on this portfolio...',
    thinking: 'Thinking...',
    error: 'Gemini is temporarily unavailable right now. Please try again in a moment.',
    initialBotMessage:
      "Hi! I am Tatevik's portfolio assistant. Ask me about projects, experience, or skills.",
    resumePrompt: 'Show my saved resume in markdown.',
    widgetBadge: 'AI Assistant',
    widgetSubtitle: 'Ask about projects, experience, or this portfolio.',
    widgetOpenPage: 'Open page',
    widgetCloseAria: 'Close Gemini assistant',
    widgetOpenAria: 'Open Gemini assistant',
    widgetChatTitle: 'Gemini AI Assistant',
  },
  ru: {
    badge: 'Чат Gemini',
    title: 'Спросите Gemini о портфолио',
    description:
      'Обсуждайте проекты и опыт или попросите Gemini показать сохраненное резюме прямо в чате.',
    conversationTitle: 'Диалог с Gemini',
    conversationSubtitle:
      'Попробуйте запросы вроде «покажи мое резюме», «суммируй мой опыт» или «напиши короткое интро для рекрутера».',
    showSavedResume: 'Показать сохраненное резюме',
    resumeHintPrefix: 'Само резюме теперь находится на отдельной ',
    resumePageLink: 'странице резюме',
    send: 'Отправить',
    inputPlaceholder:
      'Спросите о проектах, опыте или о чем угодно, связанном с этим портфолио...',
    thinking: 'Думает...',
    error:
      'Gemini временно недоступен. Пожалуйста, попробуйте еще раз через минуту.',
    initialBotMessage:
      'Привет! Я помощник портфолио Tatevik. Спросите меня о проектах, опыте или навыках.',
    resumePrompt: 'Покажи мое сохраненное резюме в формате markdown.',
    widgetBadge: 'AI Ассистент',
    widgetSubtitle: 'Спросите о проектах, опыте или об этом портфолио.',
    widgetOpenPage: 'Открыть страницу',
    widgetCloseAria: 'Закрыть ассистента Gemini',
    widgetOpenAria: 'Открыть ассистента Gemini',
    widgetChatTitle: 'Gemini AI Ассистент',
  },
}
