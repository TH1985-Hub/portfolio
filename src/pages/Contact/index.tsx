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

    return (
      <Card variant="borderless" className={styles.card}>
        <Title level={2}>{t('contact.title')}</Title>
        <Paragraph type="secondary">
          {t('contact.introPrefix')}
          <Typography.Text code>onFinish</Typography.Text>
          {t('contact.introSuffix')}
        </Paragraph>
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
              {t('contact.submit')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
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

