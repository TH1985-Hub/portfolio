import { theme } from 'antd'
import type { ThemeConfig } from 'antd'

export type ThemeMode = 'dark' | 'light'

export function getAntdTheme(mode: ThemeMode): ThemeConfig {
  return {
    algorithm: mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#6366f1',
      borderRadius: 8,
      fontFamily:
        "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    },
    components: {
      Layout: {
        headerHeight: 64,
      },
    },
  }
}
