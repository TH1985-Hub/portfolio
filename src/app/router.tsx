import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { AboutPage } from '@/pages/about/AboutPage'
import { ContactPage } from '@/pages/contact/ContactPage'
import { HomePage } from '@/pages/home/HomePage'
import { ProjectsPage } from '@/pages/projects/ProjectsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])
