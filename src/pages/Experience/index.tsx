import { Card, Space, Tag, Typography } from 'antd'
import { PureComponent } from 'react'
import { experienceHighlights } from './const'
import styles from './styles.module.css'

const { Title, Paragraph } = Typography

export class ExperiencePage extends PureComponent {
  render() {
    return (
      <Card variant="borderless" className={styles.card}>
        <Title level={2} className={styles.title}>
          Experience
        </Title>
        <Paragraph type="secondary" className={styles.subtitle}>
          Add your roles, companies, impact metrics, and the systems you’ve owned.
        </Paragraph>
        <Space wrap size={10}>
          {experienceHighlights.map((item) => (
            <Tag key={item} className={styles.tag}>
              {item}
            </Tag>
          ))}
        </Space>
      </Card>
    )
  }
}

