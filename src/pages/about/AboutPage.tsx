import { CheckCircleOutlined } from '@ant-design/icons'
import { Card, List, Typography } from 'antd'

const { Title, Paragraph } = Typography

const strengths = [
  'Architecture for medium/large SPAs (routing, boundaries, performance).',
  'UI systems: tokens, components, accessibility, documentation.',
  'TypeScript-first APIs, strict boundaries, predictable state.',
]

export function AboutPage() {
  return (
    <Card variant="borderless">
      <Title level={2}>About</Title>
      <Paragraph type="secondary" style={{ fontSize: 16, maxWidth: 720 }}>
        Replace this section with your story: years of experience, domains
        (fintech, SaaS, e‑commerce), and what you optimize for (DX, UX,
        reliability, velocity).
      </Paragraph>
      <Title level={4}>What I bring</Title>
      <List
        dataSource={strengths}
        renderItem={(item) => (
          <List.Item>
            <CheckCircleOutlined style={{ color: '#6366f1', marginRight: 8 }} />
            {item}
          </List.Item>
        )}
      />
    </Card>
  )
}
