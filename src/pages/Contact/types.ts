export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export type ContactPageViewProps = {
  notifySuccess: (text: string) => void
  notifyError: (text: string) => void
}
