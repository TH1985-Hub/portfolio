/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_GEMINI_API_KEY: string;
}

type ImportMeta = {
  readonly env: ImportMetaEnv;
}