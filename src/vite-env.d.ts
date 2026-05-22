/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_GEMINI_API_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_TELEGRAM_BOT_TOKEN: string;
  readonly VITE_TELEGRAM_CHAT_ID: string;
}

type ImportMeta = {
  readonly env: ImportMetaEnv;
}
