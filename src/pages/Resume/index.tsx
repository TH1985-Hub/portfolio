import { ArrowRightOutlined, FileTextOutlined } from '@ant-design/icons'
import { Button, Card, Space, Typography } from 'antd'
import { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { withTranslation, type WithTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import resumeMarkdown from '@/content/resume.md?raw'
import styles from './styles.module.css'

class ResumePageView extends PureComponent<WithTranslation> {
  render() {
    const { t } = this.props

    return (
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Typography.Text className={styles.badge}>{t('resume.badge')}</Typography.Text>
            <Typography.Title level={1} className={styles.title}>
              {t('resume.title')}
            </Typography.Title>
            <Typography.Paragraph className={styles.description}>
              {t('resume.description')}
            </Typography.Paragraph>
          </div>

          <Space wrap size={12}>
            <Typography.Text code>src/content/resume.md</Typography.Text>
            <Link to="/gemini">
              <Button className={styles.heroButton}>
                {t('resume.askGeminiButton')} <ArrowRightOutlined />
              </Button>
            </Link>
          </Space>
        </section>

        <Card className={styles.resumeCard}>
          <div className={styles.cardHeader}>
            <Typography.Text className={styles.cardBadge}>
              <FileTextOutlined /> {t('resume.cardBadge')}
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
}

export const ResumePage = withTranslation()(ResumePageView)
