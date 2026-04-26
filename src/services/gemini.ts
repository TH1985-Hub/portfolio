import axios from 'axios'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim().replace(/;$/, '')
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models'
const MODEL_CANDIDATES = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.0-flash']

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string
      }>
    }
  }>
}

function getApiErrorMessage(error: unknown) {
  if (!axios.isAxiosError(error)) {
    return ''
  }

  const data = error.response?.data
  if (typeof data !== 'object' || data === null || !('error' in data)) {
    return error.message
  }

  const apiError = data as {
    error?: {
      message?: string
    }
  }

  return apiError.error?.message ?? error.message
}

function isMissingModelError(error: unknown) {
  if (!axios.isAxiosError(error)) {
    return false
  }

  return error.response?.status === 404
}

function buildModelUrl(model: string) {
  return `${BASE_URL}/${model}:generateContent?key=${API_KEY}`
}

function extractText(data: GeminiResponse) {
  const parts = data.candidates?.[0]?.content?.parts ?? []
  return parts
    .map((part) => part.text ?? '')
    .join('\n')
    .trim()
}

export const generateGeminiContent = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error('Missing Gemini API key')
  }

  let lastError: unknown

  for (const model of MODEL_CANDIDATES) {
    try {
      const response = await axios.post<GeminiResponse>(buildModelUrl(model), {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      })

      const text = extractText(response.data)
      if (text) {
        return text
      }

      throw new Error('Empty Gemini response')
    } catch (error) {
      lastError = error
      if (!isMissingModelError(error)) {
        break
      }
    }
  }

  console.error('Gemini API Error:', getApiErrorMessage(lastError))
  throw new Error('Gemini request failed')
}
