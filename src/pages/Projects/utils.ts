import type { Project } from './types';
export const openUrl = (url: string): void => {
  if (url && url !== '#') {
    window.open(url, '_blank');
  }
};

// Get gradient based on theme mode
export const getGradient = (project: Project, mode: 'dark' | 'light'): string => {
  return mode === 'dark' ? project.gradient.dark : project.gradient.light;
};

// Format date for display
export const formatDate = (dateString?: string): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Truncate text if too long
export const truncateText = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Get project tags as string array (already in Project type)
export const getProjectTags = (project: Project): string[] => {
  return project.tags || [];
};

// Check if project has external links
export const hasExternalLinks = (project: Project): boolean => {
  return !!(project.githubUrl || project.liveUrl);
};

// Validate URL
export const isValidUrl = (url: string): boolean => {
  if (!url || url === '#') return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
