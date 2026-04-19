import type { ThemeConfig } from 'antd'

export const antdTheme: ThemeConfig = {
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
