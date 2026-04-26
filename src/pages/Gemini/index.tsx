import { FileTextOutlined, MessageOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Card, Input, Typography, message } from 'antd'
import { Component, type ChangeEvent, type KeyboardEvent } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import {
  ERROR_MESSAGE,
  INITIAL_BOT_MESSAGE,
  INPUT_PLACEHOLDER,
  THINKING_MESSAGE,
} from './const'
import styles from './styles.module.css'
import type { ChatState, Message } from './types'
import { fetchBotResponse } from './utils'

const { Text, Paragraph } = Typography
const { TextArea } = Input

export class GeminiPage extends Component<{}, ChatState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      input: '',
      loading: false,
      messages: [INITIAL_BOT_MESSAGE],
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ input: event.target.value })
  }

  submitPrompt = async (prompt: string, clearInput = false) => {
    const trimmedPrompt = prompt.trim()
    const { loading } = this.state

    if (!trimmedPrompt || loading) {
      return
    }

    const userMsg: Message = { role: 'user', text: trimmedPrompt }
    this.setState((prevState) => ({
      messages: [...prevState.messages, userMsg],
      input: clearInput ? '' : prevState.input,
      loading: true,
    }))

    try {
      const response = await fetchBotResponse(trimmedPrompt)
      const botMsg: Message = { role: 'bot', text: response }

      this.setState((prevState) => ({
        messages: [...prevState.messages, botMsg],
        loading: false,
      }))
    } catch (error) {
      message.error(ERROR_MESSAGE)
      this.setState({ loading: false })
    }
  }

  handleSend = async () => {
    await this.submitPrompt(this.state.input, true)
  }

  handleShowResume = async () => {
    await this.submitPrompt('Show my saved resume in markdown.')
  }

  handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      void this.handleSend()
    }
  }

  render() {
    const { input, loading, messages } = this.state

    return (
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Typography.Text className={styles.badge}>Gemini Chat</Typography.Text>
            <Typography.Title level={1} className={styles.title}>
              Ask Gemini About the Portfolio
            </Typography.Title>
            <Typography.Paragraph className={styles.description}>
              Chat here about projects, experience, or ask Gemini to bring the saved
              resume directly into the conversation.
            </Typography.Paragraph>
          </div>
        </section>

        <Card className={styles.chatCard}>
          <div className={styles.cardHeader}>
            <div>
              <Typography.Text strong className={styles.cardTitle}>
                <MessageOutlined /> Gemini Conversation
              </Typography.Text>
              <Typography.Paragraph className={styles.cardSubtitle}>
                Try prompts like “show my resume”, “summarize my experience”, or
                “write a short recruiter intro”.
              </Typography.Paragraph>
            </div>
          </div>

          <div className={styles.helperRow}>
            <Button
              type="primary"
              icon={<FileTextOutlined />}
              className={styles.helperButton}
              onClick={() => {
                void this.handleShowResume()
              }}
              loading={loading}
            >
              Show Saved Resume
            </Button>
            <Paragraph className={styles.helperText}>
              The resume itself now lives on the separate{' '}
              <Link to="/resume" className={styles.helperLink}>
                Resume page
              </Link>
              .
            </Paragraph>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.role === 'user' ? styles.userRow : styles.botRow}
              >
                <div className={msg.role === 'user' ? styles.userMsg : styles.botMsg}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}

            {loading ? (
              <div className={styles.loader}>
                <Text type="secondary">{THINKING_MESSAGE}</Text>
              </div>
            ) : null}
          </div>

          <div className={styles.inputArea}>
            <TextArea
              value={input}
              onChange={this.handleInputChange}
              onKeyDown={this.handleInputKeyDown}
              placeholder={INPUT_PLACEHOLDER}
              disabled={loading}
              autoSize={{ minRows: 3, maxRows: 6 }}
            />
            <Button
              type="primary"
              size="large"
              icon={<SendOutlined />}
              onClick={() => {
                void this.handleSend()
              }}
              loading={loading}
            >
              Send
            </Button>
          </div>
        </Card>
      </div>
    )
  }
}

export { GeminiPage as Gemini }
