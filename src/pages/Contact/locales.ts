export type ComponentLocales = {
  [key: string]: string
}

export const LOCALES: Record<'am' | 'en' | 'ru', ComponentLocales> = {
  am: {
    title: 'Կապ',
    introPrefix: 'Կապեք ',
    introSuffix:
      'ը EmailJS-ի, Resend-ի, serverless ֆունկցիայի կամ ձեր backend-ի հետ։',
    nameLabel: 'Անուն',
    nameRequired: 'Խնդրում ենք մուտքագրել ձեր անունը',
    namePlaceholder: 'Jane Doe',
    emailLabel: 'Էլ. հասցե',
    emailRequired: 'Խնդրում ենք մուտքագրել ձեր էլ. հասցեն',
    emailInvalid: 'Մուտքագրեք վավեր էլ. հասցե',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Հաղորդագրություն',
    messageRequired: 'Խնդրում ենք մուտքագրել հաղորդագրություն',
    messagePlaceholder: 'Ի՞նչ կցանկանայիք կառուցել։',
    submit: 'Ուղարկել',
    success: 'Շնորհակալություն, {{name}}։ Կապեք այս ձևը ձեր API-ին կամ form service-ին։',
  },
  en: {
    title: 'Contact',
    introPrefix: 'Wire ',
    introSuffix:
      ' to EmailJS, Resend, a serverless function, or your backend.',
    nameLabel: 'Name',
    nameRequired: 'Please enter your name',
    namePlaceholder: 'Jane Doe',
    emailLabel: 'Email',
    emailRequired: 'Please enter your email',
    emailInvalid: 'Enter a valid email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messageRequired: 'Please enter a message',
    messagePlaceholder: 'What would you like to build?',
    submit: 'Send',
    success: 'Thanks, {{name}}. Hook this form to your API or form service.',
  },
  ru: {
    title: 'Контакты',
    introPrefix: 'Подключите ',
    introSuffix:
      ' к EmailJS, Resend, serverless-функции или вашему backend.',
    nameLabel: 'Имя',
    nameRequired: 'Пожалуйста, введите ваше имя',
    namePlaceholder: 'Jane Doe',
    emailLabel: 'Email',
    emailRequired: 'Пожалуйста, введите ваш email',
    emailInvalid: 'Введите корректный email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Сообщение',
    messageRequired: 'Пожалуйста, введите сообщение',
    messagePlaceholder: 'Что вы хотели бы разработать?',
    submit: 'Отправить',
    success:
      'Спасибо, {{name}}. Подключите эту форму к вашему API или form-сервису.',
  },
}
