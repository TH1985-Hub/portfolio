import { createHashRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/components/appLayout'
import { AboutPage } from '@/pages/About'
import { ContactPage } from '@/pages/Contact'
import { ExperiencePage } from '@/pages/Experience'
import { GeminiPage } from '@/pages/Gemini'
import { HomePage } from '@/pages/Home'
import  Projects  from '@/pages/Projects'
import { ResumePage } from '@/pages/Resume'

// GitHub Pages serves static files and does not rewrite SPA routes.
// Hash-based routing keeps deep links working after deployment.
export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'gemini', element: <GeminiPage /> },
      { path: 'projects', element: <Projects /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])
