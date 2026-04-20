import { CheckCircleOutlined } from '@ant-design/icons'
import { Card, List, Typography } from 'antd'
import { PureComponent } from 'react'
import { strengths } from './const'
import styles from './styles.module.css'

const { Title, Paragraph } = Typography

export class AboutPage extends PureComponent {
  render() {
    return (
      <Card variant="borderless">
        <Title level={2}>About</Title>
        <Paragraph type="secondary" className={styles.paragraph}>
          Replace this section with your story: years of experience, domains
          (fintech, SaaS, e‑commerce), and what you optimize for (DX, UX,
          reliability, velocity).
        </Paragraph>
        <Title level={4}>What I bring</Title>
        <List
          dataSource={strengths}
          renderItem={(item) => (
            <List.Item>
              <CheckCircleOutlined className={styles.listIcon} />
              {item}
            </List.Item>
          )}
        />
      </Card>
    )
  }
}

