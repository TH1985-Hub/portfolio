export type AppLayoutViewProps = {
  pathname: string
  onNavigate: (to: string) => void
  themeMode: 'dark' | 'light'
  onToggleThemeMode: () => void
}

