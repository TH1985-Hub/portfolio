export function redirectResumeReloadToHome(): void {
  const [navEntry] = performance.getEntriesByType('navigation')

  if (!(navEntry instanceof PerformanceNavigationTiming) || navEntry.type !== 'reload') {
    return
  }

  const route = window.location.hash.replace(/^#/, '')

  if (route === '/resume' || route.startsWith('/resume/') || route.startsWith('/resume?')) {
    window.location.replace(`${window.location.pathname}${window.location.search}#/`)
  }
}
