import {
  ArrowRightOutlined,
  CloseOutlined,
  RobotOutlined,
  SendOutlined,
} from '@ant-design/icons'
import { Button, Card, Input, Space, Spin, Typography, message } from 'antd'
import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { createInitialBotMessage } from './const'
import styles from './widget.module.css'
import type { Message } from './types'
import { fetchBotResponse } from './utils'

function AssistantMark() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={styles.mark}
    >
      <defs>
        <linearGradient id="gemini-mark-gradient" x1="12" y1="10" x2="52" y2="54">
          <stop offset="0%" stopColor="#8B7BFF" />
          <stop offset="55%" stopColor="#3ABEFF" />
          <stop offset="100%" stopColor="#7CF2C3" />
        </linearGradient>
      </defs>
      <path
        d="M32 12C22.059 12 14 20.059 14 30C14 39.941 22.059 48 32 48C35.74 48 39.212 46.86 42.09 44.91L50 52"
        stroke="url(#gemini-mark-gradient)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 30C24 25.582 27.582 22 32 22C36.418 22 40 25.582 40 30C40 34.418 36.418 38 32 38"
        stroke="url(#gemini-mark-gradient)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="30" r="1.8" fill="#D7F2FF" />
      <circle cx="38" cy="30" r="1.8" fill="#D7F2FF" />
    </svg>
  )
}

export function GeminiWidget() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>(() => [createInitialBotMessage(t)])
  const messagesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMessages([createInitialBotMessage(t)])
  }, [i18n.language, t])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const node = messagesRef.current
    if (!node) {
      return
    }

    node.scrollTo({
      top: node.scrollHeight,
      behavior: 'smooth',
    })
  }, [isOpen, loading, messages])

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSend = async () => {
    if (!input.trim() || loading) {
      return
    }

    const userMsg: Message = { role: 'user', text: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const response = await fetchBotResponse(userMsg.text)
      const botMsg: Message = { role: 'bot', text: response }
      setMessages((prev) => [...prev, botMsg])
    } catch (error) {
      message.error(t('gemini.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.root}>
      {isOpen ? (
        <Card id="gemini-widget-panel" className={styles.panel} bordered={false}>
          <div className={styles.panelHeader}>
            <div className={styles.panelCopy}>
              <Typography.Text className={styles.badge}>{t('gemini.widgetBadge')}</Typography.Text>
              <Typography.Title level={5} className={styles.title}>
                <RobotOutlined /> {t('gemini.widgetChatTitle')}
              </Typography.Title>
              <Typography.Paragraph className={styles.subtitle}>
                {t('gemini.widgetSubtitle')}
              </Typography.Paragraph>
            </div>

            <Space size={8} className={styles.headerActions}>
              <Link to="/gemini" className={styles.pageLink}>
                <Button type="text" className={styles.openPageButton}>
                  {t('gemini.widgetOpenPage')} <ArrowRightOutlined />
                </Button>
              </Link>
              <Button
                aria-label={t('gemini.widgetCloseAria')}
                type="text"
                icon={<CloseOutlined />}
                className={styles.closeButton}
                onClick={toggleOpen}
              />
            </Space>
          </div>

          <div ref={messagesRef} className={styles.messages}>
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
                <Spin size="small" />
                <Typography.Text type="secondary">{t('gemini.thinking')}</Typography.Text>
              </div>
            ) : null}
          </div>

          <div className={styles.inputArea}>
            <Input
              value={input}
              onChange={handleInputChange}
              onPressEnter={() => {
                void handleSend()
              }}
              placeholder={t('gemini.inputPlaceholder')}
              disabled={loading}
              size="large"
            />
            <Button
              type="primary"
              size="large"
              icon={<SendOutlined />}
              onClick={() => {
                void handleSend()
              }}
              loading={loading}
            >
              {t('common.send')}
            </Button>
          </div>
        </Card>
      ) : null}

      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.triggerActive : ''}`}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="gemini-widget-panel"
        aria-label={isOpen ? t('gemini.widgetCloseAria') : t('gemini.widgetOpenAria')}
        title={isOpen ? t('gemini.widgetCloseAria') : t('gemini.widgetOpenAria')}
      >
        <span className={styles.triggerHalo} aria-hidden="true" />
        <span className={styles.triggerRing} aria-hidden="true" />
        <span className={styles.triggerIcon}>
          <AssistantMark />
        </span>
      </button>
    </div>
  )
}
