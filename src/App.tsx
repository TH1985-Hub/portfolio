import { App as AntdApp, ConfigProvider } from 'antd'
import { createContext, useEffect, useMemo, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'
import { getAntdTheme } from '@/theme/antdTheme'
import type { ThemeMode } from '@/theme/antdTheme'

const themeStorageKey = 'portfolio.themeMode'

export const ThemeModeContext = createContext<{
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
} | null>(null)

export function App() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(themeStorageKey)
    return stored === 'light' || stored === 'dark' ? stored : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = mode
    localStorage.setItem(themeStorageKey, mode)
  }, [mode])

  const ctxValue = useMemo(() => {
    return {
      mode,
      setMode,
      toggleMode: () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
      },
    }
  }, [mode])

  return (
    <ThemeModeContext.Provider value={ctxValue}>
      <ConfigProvider theme={getAntdTheme(mode)}>
        <AntdApp>
          <RouterProvider router={router} />
        </AntdApp>
      </ConfigProvider>
    </ThemeModeContext.Provider>
  )
}
