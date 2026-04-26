import { ArrowRightOutlined, FileTextOutlined } from '@ant-design/icons'
import { Button, Card, Space, Typography } from 'antd'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import resumeMarkdown from '@/content/resume.md?raw'
import styles from './styles.module.css'

export function ResumePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <Typography.Text className={styles.badge}>Saved Markdown Resume</Typography.Text>
          <Typography.Title level={1} className={styles.title}>
            Resume
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            This resume is stored in a standalone markdown file and rendered directly
            inside the portfolio.
          </Typography.Paragraph>
        </div>

        <Space wrap size={12}>
          <Typography.Text code>src/content/resume.md</Typography.Text>
          <Link to="/gemini">
            <Button className={styles.heroButton}>
              Ask Gemini About It <ArrowRightOutlined />
            </Button>
          </Link>
        </Space>
      </section>

      <Card className={styles.resumeCard}>
        <div className={styles.cardHeader}>
          <Typography.Text className={styles.cardBadge}>
            <FileTextOutlined /> Portfolio Resume
          </Typography.Text>
        </div>

        <div className={styles.markdownShell}>
          <div className={styles.markdownContent}>
            <ReactMarkdown>{resumeMarkdown}</ReactMarkdown>
          </div>
        </div>
      </Card>
    </div>
  )
}
