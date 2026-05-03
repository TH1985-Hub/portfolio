import { FileTextOutlined, MessageOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Card, Input, Typography, message } from 'antd'
import { Component, type ChangeEvent, type KeyboardEvent } from 'react'
import ReactMarkdown from 'react-markdown'
import { withTranslation, type WithTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { createInitialBotMessage } from './const'
import styles from './styles.module.css'
import type { ChatState, Message } from './types'
import { fetchBotResponse } from './utils'

const { Text, Paragraph } = Typography
const { TextArea } = Input

class GeminiPageView extends Component<WithTranslation, ChatState> {
  constructor(props: WithTranslation) {
    super(props)
    this.state = {
      input: '',
      loading: false,
      messages: [createInitialBotMessage(props.t)],
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
      message.error(this.props.t('gemini.error'))
      this.setState({ loading: false })
    }
  }

  handleSend = async () => {
    await this.submitPrompt(this.state.input, true)
  }

  handleShowResume = async () => {
    await this.submitPrompt(this.props.t('gemini.resumePrompt'))
  }

  handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      void this.handleSend()
    }
  }

  render() {
    const { t } = this.props
    const { input, loading, messages } = this.state

    return (
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Typography.Text className={styles.badge}>{t('gemini.badge')}</Typography.Text>
            <Typography.Title level={1} className={styles.title}>
              {t('gemini.title')}
            </Typography.Title>
            <Typography.Paragraph className={styles.description}>
              {t('gemini.description')}
            </Typography.Paragraph>
          </div>
        </section>

        <Card className={styles.chatCard}>
          <div className={styles.cardHeader}>
            <div>
              <Typography.Text strong className={styles.cardTitle}>
                <MessageOutlined /> {t('gemini.conversationTitle')}
              </Typography.Text>
              <Typography.Paragraph className={styles.cardSubtitle}>
                {t('gemini.conversationSubtitle')}
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
              {t('gemini.showSavedResume')}
            </Button>
            <Paragraph className={styles.helperText}>
              {t('gemini.resumeHintPrefix')}
              <Link to="/resume" className={styles.helperLink}>
                {t('gemini.resumePageLink')}
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
                <Text type="secondary">{t('gemini.thinking')}</Text>
              </div>
            ) : null}
          </div>

          <div className={styles.inputArea}>
            <TextArea
              value={input}
              onChange={this.handleInputChange}
              onKeyDown={this.handleInputKeyDown}
              placeholder={t('gemini.inputPlaceholder')}
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
              {t('common.send')}
            </Button>
          </div>
        </Card>
      </div>
    )
  }
}

export const GeminiPage = withTranslation()(GeminiPageView)
export { GeminiPage as Gemini }
