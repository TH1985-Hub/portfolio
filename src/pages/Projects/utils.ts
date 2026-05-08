export const openUrl = (url: string): void => {
  if (url && url !== '#') {
    window.open(url, '_blank')
  }
}
