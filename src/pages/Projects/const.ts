
import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nexus Dashboard',
    description: 'A real-time financial analytics platform built with React, TypeScript, and D3.js. Features complex data visualization with millisecond-latency WebSocket updates and a custom-built state management engine.',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    gradient: {
      dark: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      light: 'linear-gradient(135deg, #5a67d8 0%, #6b46a0 100%)',
    },
    iconName: '',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Vapor Code',
    description: 'A collaborative code editor with retro-synthwave aesthetics and real-time cursor tracking using CRDTs.',
    tags: ['YJS', 'NEXT.JS'],
    gradient: {
      dark: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      light: 'linear-gradient(135deg, #e879f9 0%, #ef4444 100%)',
    },
    iconName: '',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Lumina Social',
    description: 'A privacy-focused social network experimenting with decentralized identity. Built with React and Three.js for interactive 3D profile avatars that respond to user motion.',
    tags: ['Three.js', 'Web3Auth', 'Framer Motion'],
    gradient: {
      dark: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      light: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    },
    iconName: '',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Atmosphere CMS',
    description: 'A headless CMS focused on digital creators, featuring an intuitive drag-and-drop schema builder.',
    tags: ['GRAPHQL', 'POSTGRESQL'],
    gradient: {
      dark: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      light: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
    },
    iconName: '',
    githubUrl: '#',
    liveUrl: '#',
  },
];