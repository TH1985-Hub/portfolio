import {
  ArrowRightOutlined,
  BookOutlined,
  BulbOutlined,
  FileTextOutlined,
  ReadOutlined,
  RocketOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Typography } from 'antd'
import type { ReactNode } from 'react'
import { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { withTranslation, type WithTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import resumeMarkdown from '@/content/resume.md?raw'
import styles from './styles.module.css'
import type { ResumeSection } from './types'
import { extractListItems, parseResumeMarkdown } from './utils'

const { Title, Text } = Typography

const parsedResume = parseResumeMarkdown(resumeMarkdown)

class ResumePageView extends PureComponent<WithTranslation> {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sectionIcon = (section: ResumeSection): ReactNode => {
    switch (section.id) {
      case 'professional-summary':
        return <ReadOutlined />
      case 'personal-background':
        return <UserOutlined />
      case 'education':
        return <BookOutlined />
      case 'frontend-journey':
        return <RocketOutlined />
      case 'core-focus':
        return <BulbOutlined />
      default:
        return <FileTextOutlined />
    }
  }

  renderSection = (section: ResumeSection): ReactNode => {
    const focusItems =
      section.id === 'core-focus' ? extractListItems(section.body) : []

    return (
      <article key={section.id} className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>{this.sectionIcon(section)}</span>
          <Title level={3} className={styles.sectionTitle}>
            {section.title}
          </Title>
        </div>

        {focusItems.length > 0 ? (
          <div className={styles.focusGrid}>
            {focusItems.map((item) => (
              <span key={item} className={styles.focusPill}>
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className={styles.sectionBody}>
            <ReactMarkdown>{section.body}</ReactMarkdown>
          </div>
        )}
      </article>
    )
  }

  render() {
    const { t } = this.props

    return (
      <div className={styles.page}>
        <div className={styles.pageToolbar}>
          <Text className={styles.toolbarBadge}>{t('resume.cardBadge')}</Text>
          <Link to="/gemini">
            <Button className={styles.toolbarButton}>
              {t('resume.askGeminiButton')} <ArrowRightOutlined />
            </Button>
          </Link>
        </div>

        <article className={styles.resumeSheet}>
          <header className={styles.resumeHeader}>
            <Title level={1} className={styles.resumeName}>
              {parsedResume.name}
            </Title>
            <Text className={styles.resumeRole}>{parsedResume.role}</Text>
            <div className={styles.headerRule} aria-hidden="true" />
          </header>

          <div className={styles.sectionsStack}>
            {parsedResume.sections.map((section) => this.renderSection(section))}
          </div>
        </article>
      </div>
    )
  }
}

export const ResumePage = withTranslation()(ResumePageView)
