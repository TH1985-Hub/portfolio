import { App, Button, Card, Form, Input, Typography } from 'antd'
import { useState } from 'react'

const { Title, Paragraph } = Typography

type ContactFormValues = {
  name: string
  email: string
  message: string
}

export function ContactPage() {
  const { message } = App.useApp()
  const [submitting, setSubmitting] = useState(false)

  const onFinish = async (values: ContactFormValues) => {
    setSubmitting(true)
    try {
      await new Promise((r) => {
        setTimeout(r, 450)
      })
      message.success(`Thanks, ${values.name}. Hook this form to your API or form service.`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card variant="borderless" style={{ maxWidth: 560 }}>
      <Title level={2}>Contact</Title>
      <Paragraph type="secondary">
        Wire <Typography.Text code>onFinish</Typography.Text> to EmailJS,
        Resend, a serverless function, or your backend.
      </Paragraph>
      <Form<ContactFormValues>
        layout="vertical"
        onFinish={onFinish}
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
          <Input.TextArea rows={5} placeholder="What would you like to build?" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitting} block>
            Send
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
