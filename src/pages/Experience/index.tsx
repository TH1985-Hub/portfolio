import { Card, Space, Tag, Typography } from 'antd'
import { PureComponent } from 'react'
import { withTranslation, type WithTranslation } from 'react-i18next'
import styles from './styles.module.css'

const { Title, Paragraph } = Typography

class ExperiencePageView extends PureComponent<WithTranslation> {
  render() {
    const { t } = this.props
    const highlights = [
      t('experience.tagReact'),
      t('experience.tagTypeScript'),
      t('experience.tagUiSystems'),
      t('experience.tagPerformance'),
      t('experience.tagAccessibility'),
    ]

    return (
      <Card variant="borderless" className={styles.card}>
        <Title level={2} className={styles.title}>
          {t('experience.title')}
        </Title>
        <Paragraph type="secondary" className={styles.subtitle}>
          {t('experience.subtitle')}
        </Paragraph>
        <Space wrap size={10}>
          {highlights.map((item) => (
            <Tag key={item} className={styles.tag}>
              {item}
            </Tag>
          ))}
        </Space>
      </Card>
    )
  }
}

export const ExperiencePage = withTranslation()(ExperiencePageView)

