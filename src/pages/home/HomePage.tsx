import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography

export function HomePage() {
  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <div>
        <Title level={1} style={{ marginBottom: 8 }}>
          Hi, I’m a senior frontend engineer.
        </Title>
        <Paragraph type="secondary" style={{ fontSize: 16, maxWidth: 720 }}>
          This repo is a production-friendly baseline: routing, layout, Ant
          Design theming, and typed content modules you can extend with your
          real work.
        </Paragraph>
        <Space wrap>
          <Link to="/projects">
            <Button type="primary">
              View projects <ArrowRightOutlined />
            </Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </Space>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card title="Stack" variant="borderless">
            <Space wrap>
              <Tag color="geekblue">React</Tag>
              <Tag color="purple">TypeScript</Tag>
              <Tag color="magenta">Ant Design</Tag>
              <Tag color="cyan">Vite</Tag>
              <Tag color="green">pnpm</Tag>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Where to edit" variant="borderless">
            <Paragraph style={{ marginBottom: 0 }}>
              Pages live under <Typography.Text code>src/pages</Typography.Text>
              , shared UI under{' '}
              <Typography.Text code>src/components</Typography.Text>, and data
              under <Typography.Text code>src/data</Typography.Text>.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Next steps" variant="borderless">
            <Paragraph style={{ marginBottom: 0 }}>
              Swap placeholder copy, add screenshots, wire a CMS or markdown
              layer, and tune tokens in{' '}
              <Typography.Text code>src/theme/antdTheme.ts</Typography.Text>.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}
