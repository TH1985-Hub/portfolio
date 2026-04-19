import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Space, Typography, theme } from 'antd'
import { useMemo } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const menuItems = [
  { key: '/', label: 'Home' },
  { key: '/about', label: 'About' },
  { key: '/projects', label: 'Projects' },
  { key: '/contact', label: 'Contact' },
]

export function AppLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { token } = theme.useToken()

  const selectedKeys = useMemo(
    () => [location.pathname === '/' ? '/' : location.pathname],
    [location.pathname],
  )

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingInline: 24,
          gap: 16,
          background: token.colorBgContainer,
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
        }}
      >
        <Typography.Title level={4} style={{ margin: 0, flexShrink: 0 }}>
          Portfolio
        </Typography.Title>
        <Menu
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={menuItems}
          onClick={({ key }) => {
            void navigate(key)
          }}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            minWidth: 0,
            borderBottom: 'none',
            background: 'transparent',
          }}
        />
      </Header>
      <Content
        style={{
          padding: 24,
          width: '100%',
          maxWidth: 1120,
          marginInline: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Space direction="vertical" size={4}>
          <Typography.Text type="secondary">
            Senior frontend portfolio starter — React, TypeScript, Ant Design,
            Vite, pnpm.
          </Typography.Text>
          <Space size="middle">
            <Typography.Link href="https://github.com" target="_blank">
              <GithubOutlined /> GitHub
            </Typography.Link>
            <Typography.Link href="https://linkedin.com" target="_blank">
              <LinkedinOutlined /> LinkedIn
            </Typography.Link>
            <Typography.Link href="mailto:you@example.com">
              <MailOutlined /> Email
            </Typography.Link>
          </Space>
        </Space>
      </Footer>
    </Layout>
  )
}
