import { App as AntdApp, Button, Card, Form, Input, Typography } from 'antd'
import { PureComponent } from 'react'
import styles from './styles.module.css'
import { contactFormDelayMs } from './const'
import type { ContactFormValues, ContactPageViewProps } from './types'
import { delay } from './utils'

const { Title, Paragraph } = Typography

type ContactPageViewState = {
  submitting: boolean
}

class ContactPageView extends PureComponent<
  ContactPageViewProps,
  ContactPageViewState
> {
  state: ContactPageViewState = { submitting: false }

  private onFinish = async (values: ContactFormValues) => {
    this.setState({ submitting: true })
    try {
      await delay(contactFormDelayMs)
      this.props.notifySuccess(
        `Thanks, ${values.name}. Hook this form to your API or form service.`,
      )
    } finally {
      this.setState({ submitting: false })
    }
  }

  render() {
    return (
      <Card variant="borderless" className={styles.card}>
        <Title level={2}>Contact</Title>
        <Paragraph type="secondary">
          Wire <Typography.Text code>onFinish</Typography.Text> to EmailJS,
          Resend, a serverless function, or your backend.
        </Paragraph>
        <Form<ContactFormValues>
          layout="vertical"
          onFinish={this.onFinish}
          requiredMark="optional"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Jane Doe" autoComplete="name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Enter a valid email' },
            ]}
          >
            <Input placeholder="you@example.com" autoComplete="email" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter a message' }]}
          >
            <Input.TextArea
              rows={5}
              placeholder="What would you like to build?"
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
              Send
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export function ContactPage() {
  const { message } = AntdApp.useApp()

  return (
    <ContactPageView
      notifySuccess={(text) => {
        void message.success(text)
      }}
    />
  )
}

