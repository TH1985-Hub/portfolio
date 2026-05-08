import {
  ApiOutlined,
  AppstoreOutlined,
  BgColorsOutlined,
  BranchesOutlined,
  CloudOutlined,
  CodeOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { Typography } from 'antd'
import type { ReactNode } from 'react'
import { PureComponent } from 'react'
import { withTranslation, type WithTranslation } from 'react-i18next'

import {
  ARSENAL_CARDS,
  EXPERIENCE_HERO_IMAGE,
  SKILL_BARS,
  TIMELINE_ITEMS,
} from './const'
import styles from './styles.module.css'
import type { ArsenalIconKey, TimelineItem } from './types'

const { Title, Paragraph } = Typography

class ExperiencePageView extends PureComponent<WithTranslation> {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  arsenalIcon = (key: ArsenalIconKey): ReactNode => {
    const iconClass = styles.arsenalIcon
    switch (key) {
      case 'layers':
        return <AppstoreOutlined className={iconClass} aria-hidden />
      case 'api':
        return <ApiOutlined className={iconClass} aria-hidden />
      case 'node':
        return <CodeOutlined className={iconClass} aria-hidden />
      case 'cloud':
        return <CloudOutlined className={iconClass} aria-hidden />
      case 'figma':
        return <BgColorsOutlined className={iconClass} aria-hidden />
      case 'git':
        return <BranchesOutlined className={iconClass} aria-hidden />
      default:
        return <CodeOutlined className={iconClass} aria-hidden />
    }
  }

  arsenalCardTKey = (id: string): string => {
    const map: Record<string, string> = {
      redux: 'arsenalCardRedux',
      api: 'arsenalCardApi',
      node: 'arsenalCardNode',
      firebase: 'arsenalCardFirebase',
      figma: 'arsenalCardFigma',
      git: 'arsenalCardGit',
    }
    return map[id] ?? 'arsenalCardRedux'
  }

  skillLabelKey = (id: string): string => {
    switch (id) {
      case 'reactNext':
        return 'skillReactNext'
      case 'typescript':
        return 'skillTypeScript'
      case 'tailwind':
        return 'skillTailwind'
      default:
        return 'skillReactNext'
    }
  }

  skillPctKey = (percent: number): string => {
    return `skillPct${percent}`
  }

  barFillClass = (percent: number): string => {
    switch (percent) {
      case 95:
        return styles.barFill95
      case 90:
        return styles.barFill90
      case 88:
        return styles.barFill88
      default:
        return styles.barFill95
    }
  }

  timelineMeta = (item: TimelineItem): ReactNode => {
    const { t } = this.props
    const titleClass =
      item.tone === 'purple' ? styles.jobTitlePurple : styles.jobTitlePink
    return (
      <div className={styles.timelineMeta}>
        <div className={titleClass}>{t(`experience.timeline${item.id}JobTitle`)}</div>
        <div className={styles.jobCompany}>{t(`experience.timeline${item.id}Company`)}</div>
        <div className={styles.datePill}>{t(`experience.timeline${item.id}Dates`)}</div>
      </div>
    )
  }

  timelineBody = (item: TimelineItem): ReactNode => {
    const { t } = this.props
    return (
      <Paragraph className={styles.timelineDescription}>
        {t(`experience.timeline${item.id}Description`)}
      </Paragraph>
    )
  }

  renderTimelineRow = (item: TimelineItem): ReactNode => {
    const isFlip = item.layout === 'flip'
    const nodeClass =
      item.tone === 'purple' ? styles.timelineNodePurple : styles.timelineNodePink

    return (
      <div key={item.id} className={styles.timelineRow}>
        <div className={styles.timelineColLeft}>
          {isFlip ? this.timelineBody(item) : this.timelineMeta(item)}
        </div>
        <div className={styles.timelineRail} aria-hidden>
          <span className={styles.timelineRailLine} />
          <span className={`${styles.timelineNode} ${nodeClass}`} />
        </div>
        <div className={styles.timelineColRight}>
          {isFlip ? this.timelineMeta(item) : this.timelineBody(item)}
        </div>
      </div>
    )
  }

  render() {
    const { t } = this.props

    return (
      <div className={styles.root}>
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.narrativeBadge}>{t('experience.heroBadge')}</div>
                <Title level={1} className={styles.heroHeadline}>
                  <span className={styles.heroHeadPlain}>{t('experience.heroLead')}</span>
                  <span className={styles.heroHeadAccent}>{t('experience.heroAccentDigital')}</span>
                  <span className={styles.heroHeadAccent}>{t('experience.heroEther')}</span>
                  <span className={styles.heroHeadPlain}>{t('experience.heroThrough')}</span>
                  <span className={styles.heroHeadAccent}>{t('experience.heroAccentReact')}</span>
                </Title>
                <Paragraph className={styles.heroBody}>{t('experience.heroBody')}</Paragraph>
                <div className={styles.statRow}>
                  <div className={styles.statCard}>
                    <span className={styles.statValue}>{t('experience.statYearsValue')}</span>
                    <span className={styles.statLabel}>{t('experience.statYearsLabel')}</span>
                  </div>
                  <div className={styles.statCard}>
                    <span className={styles.statValue}>{t('experience.statUiValue')}</span>
                    <span className={styles.statLabel}>{t('experience.statUiLabel')}</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroImageFrame}>
                  <img
                    src={EXPERIENCE_HERO_IMAGE}
                    alt={t('experience.heroImageAlt')}
                    className={styles.heroImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.heroFloatBadge}>
                    <span className={styles.heroFloatIcon} aria-hidden>
                      <ThunderboltOutlined />
                    </span>
                    <div className={styles.heroFloatText}>
                      <span className={styles.heroFloatTitle}>{t('experience.floatBadgeTitle')}</span>
                      <span className={styles.heroFloatSub}>
                        {t('experience.floatBadgeSubtitle')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.odysseySection}>
          <Title level={2} className={styles.odysseyTitle}>
            {t('experience.odysseyTitle')}
          </Title>
          <div className={styles.odysseyUnderline} aria-hidden />
          <div className={styles.timelineWrap}>{TIMELINE_ITEMS.map((i) => this.renderTimelineRow(i))}</div>
        </section>

        <section className={styles.arsenalOuter}>
          <div className={styles.arsenalPanel}>
            <div className={styles.arsenalGrid}>
              <div className={styles.arsenalLeft}>
                <Title level={3} className={styles.arsenalTitle}>
                  {t('experience.arsenalTitle')}
                </Title>
                <Paragraph className={styles.arsenalIntro}>{t('experience.arsenalBody')}</Paragraph>
                <div className={styles.skillBars}>
                  {SKILL_BARS.map((bar) => (
                    <div key={bar.id} className={styles.skillRow}>
                      <div className={styles.skillRowTop}>
                        <span className={styles.skillName}>
                          {t(`experience.${this.skillLabelKey(bar.id)}`)}
                        </span>
                        <span className={styles.skillPct}>
                          {t(`experience.${this.skillPctKey(bar.percent)}`)}
                        </span>
                      </div>
                      <div className={styles.barTrack}>
                        <div className={`${styles.barFill} ${this.barFillClass(bar.percent)}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.arsenalRight}>
                <div className={styles.arsenalCardGrid}>
                  {ARSENAL_CARDS.map((card) => (
                    <div key={card.id} className={styles.arsenalCard}>
                      {this.arsenalIcon(card.icon)}
                      <span className={styles.arsenalCardLabel}>
                        {t(`experience.${this.arsenalCardTKey(card.id)}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export const ExperiencePage = withTranslation()(ExperiencePageView)
