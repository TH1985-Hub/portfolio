import type { MenuProps } from 'antd'

export const menuItems: NonNullable<MenuProps['items']> = [
  { key: '/', label: 'Home' },
  { key: '/projects', label: 'Projects' },
  { key: '/experience', label: 'Experience' },
  { key: '/contact', label: 'Contact' },
] satisfies NonNullable<MenuProps['items']>

