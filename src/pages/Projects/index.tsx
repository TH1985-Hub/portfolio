import React, { Component } from 'react'
import { ArrowRightOutlined, GithubOutlined, RocketOutlined } from '@ant-design/icons'
import { Button, Spin, Tag, Typography, message } from 'antd'
import { withTranslation, type WithTranslation } from 'react-i18next'

import { PROJECTS } from './const'
import styles from './styles.module.css'
import { openUrl } from './utils'
import type { Project, ProjectLayout, ProjectsState } from './types'

const { Title, Paragraph, Text } = Typography

class ProjectsView extends Component<WithTranslation, ProjectsState> {
  constructor(props: WithTranslation) {
    super(props)
    this.state = { loading: false }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleViewProject = (project: Project): void => {
    const title = this.props.t(`projects.project${project.id}Title`)
    if (project.liveUrl) {
      openUrl(project.liveUrl)
    } else {
      message.info(this.props.t('projects.viewDetailsToast', { title }))
    }
  }

  handleViewGithub = (project: Project): void => {
    const title = this.props.t(`projects.project${project.id}Title`)
    if (project.githubUrl) {
      openUrl(project.githubUrl)
    } else {
      message.info(this.props.t('projects.viewRepoToast', { title }))
    }
  }

  cellClassForLayout = (layout: ProjectLayout): string => {
    switch (layout) {
      case 'feature':
        return styles.cellFeature
      case 'stack':
        return styles.cellStack
      case 'compact':
        return styles.cellCompact
      case 'horizontal':
        return styles.cellHorizontal
      default:
        return styles.cellFeature
    }
  }

  mediaFrameClassForLayout = (project: Project): string => {
    switch (project.layout) {
      case 'feature':
        return styles.mediaFrameFeature
      case 'stack':
        return styles.mediaFrameStack
      case 'compact':
        return styles.mediaFrameCompact
      case 'horizontal':
        return styles.mediaFrameHorizontal
      default:
        return styles.mediaFrameFeature
    }
  }

  renderProjectMedia = (project: Project): React.ReactNode => {
    const { t } = this.props
    const alt = t(`projects.project${project.id}ImageAlt`)
    const frameClass = `${styles.mediaFrame} ${this.mediaFrameClassForLayout(project)}`
    const toneClass = project.id === 3 ? styles.mediaToneLumina : ''

    return (
      <div className={`${frameClass} ${toneClass}`.trim()}>
        <img
          src={project.coverImage}
          alt={alt}
          className={styles.mediaImage}
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  renderLinkRow = (project: Project): React.ReactNode => {
    const { t } = this.props
    if (project.id === 3) {
      return (
        <div className={styles.linkRow}>
          <Button
            type="link"
            className={`${styles.textLink} ${styles.caseStudyLink}`}
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            onClick={() => this.handleViewProject(project)}
          >
            {t('projects.linkCaseStudy')}
          </Button>
        </div>
      )
    }

    if (project.id === 4) {
      return (
        <div className={styles.linkRow}>
          <Button
            type="link"
            className={styles.textLink}
            icon={<GithubOutlined />}
            onClick={() => this.handleViewGithub(project)}
          >
            {t('projects.linkRepository')}
          </Button>
          <Button
            type="link"
            className={styles.textLink}
            icon={<RocketOutlined />}
            onClick={() => this.handleViewProject(project)}
          >
            {t('projects.linkDemo')}
          </Button>
        </div>
      )
    }

    return (
      <div className={styles.linkRow}>
        <Button
          type="link"
          className={styles.textLink}
          icon={<GithubOutlined />}
          onClick={() => this.handleViewGithub(project)}
        >
          {t('projects.linkRepository')}
        </Button>
        <Button
          type="link"
          className={styles.textLink}
          icon={<RocketOutlined />}
          onClick={() => this.handleViewProject(project)}
        >
          {t('projects.linkLaunch')}
        </Button>
      </div>
    )
  }

  renderCardBody = (project: Project): React.ReactNode => {
    const { t } = this.props
    const title = t(`projects.project${project.id}Title`)
    const description = t(`projects.project${project.id}Description`)

    return (
      <>
        <Title level={4} className={styles.cardTitle}>
          {title}
        </Title>
        <Paragraph className={styles.cardDescription}>{description}</Paragraph>
        <div className={styles.tagRow}>
          {project.tags.map((tag) => (
            <Tag key={tag} className={styles.tagPill}>
              {tag}
            </Tag>
          ))}
        </div>
        {this.renderLinkRow(project)}
      </>
    )
  }

  renderHorizontalCard = (project: Project): React.ReactNode => {
    return (
      <article className={`${styles.projectArticle} ${styles.horizontalCard}`}>
        <div className={styles.horizontalBody}>{this.renderCardBody(project)}</div>
        <div className={styles.horizontalMedia}>{this.renderProjectMedia(project)}</div>
      </article>
    )
  }

  renderVerticalCard = (project: Project): React.ReactNode => {
    return (
      <article className={styles.projectArticle}>
        <div className={styles.projectMedia}>{this.renderProjectMedia(project)}</div>
        <div className={styles.cardBody}>{this.renderCardBody(project)}</div>
      </article>
    )
  }

  renderCompactCard = (project: Project): React.ReactNode => {
    return (
      <article className={styles.projectArticle}>
        <div className={styles.projectMedia}>{this.renderProjectMedia(project)}</div>
        <div className={styles.cardBody}>{this.renderCardBody(project)}</div>
      </article>
    )
  }

  renderProjectCell = (project: Project): React.ReactNode => {
    const cell = this.cellClassForLayout(project.layout)
    let inner: React.ReactNode
    if (project.layout === 'horizontal') {
      inner = this.renderHorizontalCard(project)
    } else if (project.layout === 'compact') {
      inner = this.renderCompactCard(project)
    } else {
      inner = this.renderVerticalCard(project)
    }

    return (
      <div key={project.id} className={`${styles.mosaicCell} ${cell}`}>
        {inner}
      </div>
    )
  }

  render() {
    const { loading } = this.state
    const { t } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <Title level={1} className={styles.heroTitle}>
              <span>{t('projects.heroTitleLead')}</span>
              <span className={styles.heroTitleAccent}>{t('projects.heroTitleAccent')}</span>
            </Title>
            <Paragraph className={styles.heroDescription}>
              {t('projects.heroDescription')}
            </Paragraph>
          </div>
        </div>

        <div className={styles.projectsSection}>
          {loading ? (
            <div className={styles.emptyState}>
              <Spin size="large" />
            </div>
          ) : PROJECTS.length === 0 ? (
            <div className={styles.emptyState}>
              <Title level={4} className={styles.emptyTitle}>
                {t('projects.noProjects')}
              </Title>
              <Text className={styles.emptyDescription}>{t('projects.noProjectsHint')}</Text>
            </div>
          ) : (
            <>
              <div className={styles.mosaicGrid}>
                {PROJECTS.map((project) => this.renderProjectCell(project))}
              </div>

              <div className={styles.ctaSection}>
                <Title level={2} className={styles.ctaTitle}>
                  {t('projects.ctaTitle')}
                </Title>
                <Paragraph className={styles.ctaDescription}>
                  {t('projects.ctaDescription')}
                </Paragraph>
                <Button
                  type="default"
                  className={styles.ctaButton}
                  onClick={() => message.info(t('projects.ctaToast'))}
                >
                  {t('projects.ctaButton')}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default withTranslation()(ProjectsView)
