export type AppLayoutViewProps = {
  pathname: string;
  onNavigate: (to: string) => void;
  isChatOpen: boolean;
  onOpenChat: () => void;
  onCloseChat: () => void;
  showGeminiWidget: boolean;
  themeMode: "dark" | "light";
  onToggleThemeMode: () => void;
  lang: 'am' | 'en' | 'ru';
  onChangeLanguage: (lang: 'am' | 'en' | 'ru') => void;
};
