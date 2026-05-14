import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  RocketOutlined,
} from '@ant-design/icons'
import { App as AntdApp, Button, Card, Form, Input, Typography } from 'antd'
import { PureComponent } from 'react'
import { withTranslation, type WithTranslation } from 'react-i18next'
import styles from './styles.module.css'
import { contactFormDelayMs } from './const'
import type { ContactFormValues, ContactPageViewProps } from './types'
import { delay } from './utils'

const { Title, Paragraph } = Typography

type ContactPageViewState = {
  submitting: boolean
}

class ContactPageView extends PureComponent<
  ContactPageViewProps & WithTranslation,
  ContactPageViewState
> {
  state: ContactPageViewState = { submitting: false }

  private onFinish = async (values: ContactFormValues) => {
    this.setState({ submitting: true })
    try {
      await delay(contactFormDelayMs)
      this.props.notifySuccess(
        this.props.t('contact.success', { name: values.name }),
      )
    } finally {
      this.setState({ submitting: false })
    }
  }

  render() {
    const { t } = this.props
    const lang =
      this.props.i18n.language === 'am' || this.props.i18n.language === 'ru'
        ? this.props.i18n.language
        : 'en'

    const contactInfoCopy = {
      en: {
        eyebrow: "Let's Connect",
        title: 'Open to thoughtful remote work and meaningful collaborations.',
        description:
          "If you have a product idea, freelance opportunity, or frontend role in mind, I'd love to hear about it.",
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        availability: 'Availability',
        availabilityValue: 'Open to remote work',
      },
      ru: {
        eyebrow: 'Давайте свяжемся',
        title: 'Открыта к удаленной работе и красивым, продуманным проектам.',
        description:
          'Если у вас есть идея продукта, фриланс-проект или frontend-вакансия, я с радостью обсуду это с вами.',
        email: 'Email',
        phone: 'Телефон',
        location: 'Локация',
        availability: 'Доступность',
        availabilityValue: 'Открыта к удаленной работе',
      },
      am: {
        eyebrow: 'Կապվենք',
        title: 'Բաց եմ հեռավար աշխատանքի և մտածված, գեղեցիկ նախագծերի համար։',
        description:
          'Եթե ունեք պրոդուկտի գաղափար, ֆրիլանս նախագիծ կամ frontend դեր, սիրով կքննարկեմ այն ձեզ հետ։',
        email: 'Էլ. հասցե',
        phone: 'Հեռախոս',
        location: 'Վայր',
        availability: 'Հասանելիություն',
        availabilityValue: 'Բաց եմ հեռավար աշխատանքի համար',
      },
    }[lang]

    return (
      <div className={styles.layout}>
        <Card variant="borderless" className={styles.infoCard}>
          <div className={styles.infoHeader}>
            <span className={styles.infoEyebrow}>{contactInfoCopy.eyebrow}</span>
            <Title level={2} className={styles.infoTitle}>
              {contactInfoCopy.title}
            </Title>
            <Paragraph className={styles.infoDescription}>
              {contactInfoCopy.description}
            </Paragraph>
          </div>

          <div className={styles.infoGrid}>
            <a className={styles.infoItem} href="mailto:htatevik382@gmail.com">
              <span className={styles.infoIcon}>
                <MailOutlined />
              </span>
              <span className={styles.infoContent}>
                <span className={styles.infoLabel}>{contactInfoCopy.email}</span>
                <span className={styles.infoValue}>htatevik382@gmail.com</span>
              </span>
            </a>

            <a className={styles.infoItem} href="tel:+37493675097">
              <span className={styles.infoIcon}>
                <PhoneOutlined />
              </span>
              <span className={styles.infoContent}>
                <span className={styles.infoLabel}>{contactInfoCopy.phone}</span>
                <span className={styles.infoValue}>+37493675097</span>
              </span>
            </a>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <EnvironmentOutlined />
              </span>
              <span className={styles.infoContent}>
                <span className={styles.infoLabel}>{contactInfoCopy.location}</span>
                <span className={styles.infoValue}>Armenia, Vanadzor</span>
              </span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <RocketOutlined />
              </span>
              <span className={styles.infoContent}>
                <span className={styles.infoLabel}>{contactInfoCopy.availability}</span>
                <span className={styles.infoValue}>
                  {contactInfoCopy.availabilityValue}
                </span>
              </span>
            </div>
          </div>
        </Card>

        <Card variant="borderless" className={styles.card}>
          <Title level={2}>{t('common.contact')}</Title>
          {/* <Paragraph type="secondary">
            {t('contact.introPrefix')} */}
            {/* <Typography.Text code>onFinish</Typography.Text>
            {t('contact.introSuffix')} */}
          {/* </Paragraph> */}
          <Form<ContactFormValues>
            layout="vertical"
            onFinish={this.onFinish}
            requiredMark="optional"
          >
            <Form.Item
              name="name"
              label={t('contact.nameLabel')}
              rules={[{ required: true, message: t('contact.nameRequired') }]}
            >
              <Input placeholder={t('contact.namePlaceholder')} autoComplete="name" />
            </Form.Item>
            <Form.Item
              name="email"
              label={t('contact.emailLabel')}
              rules={[
                { required: true, message: t('contact.emailRequired') },
                { type: 'email', message: t('contact.emailInvalid') },
              ]}
            >
              <Input placeholder={t('contact.emailPlaceholder')} autoComplete="email" />
            </Form.Item>
            <Form.Item
              name="message"
              label={t('contact.messageLabel')}
              rules={[{ required: true, message: t('contact.messageRequired') }]}
            >
              <Input.TextArea
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
                className={styles.textarea}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.submitting}
                block
              >
                {t('common.send')}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

const LocalizedContactPageView = withTranslation()(ContactPageView)

export function ContactPage() {
  const { message } = AntdApp.useApp()

  return (
    <LocalizedContactPageView
      notifySuccess={(text) => {
        void message.success(text)
      }}
    />
  )
}
