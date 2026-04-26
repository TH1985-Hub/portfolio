import { geminiWidgetConfig } from './const'

export function getSelectedMenuKeys(pathname: string) {
  return [pathname === '/' ? '/' : pathname]
}

export function shouldShowGeminiWidget(pathname: string) {
  if (pathname === '/gemini') {
    return false
  }

  if (geminiWidgetConfig.visibility === 'all') {
    return true
  }

  return geminiWidgetConfig.featuredPaths.includes(pathname)
}
