import { GlobalOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { PureComponent } from 'react'
import { languageLabelMap, languageMenuItems } from './const'
import styles from './styles.module.css'
import type { LanguageSwitcherProps } from './types'
import { isSupportedLanguage } from './utils'

export class LanguageSwitcher extends PureComponent<LanguageSwitcherProps> {
  render() {
    const { lang, onChange } = this.props

    return (
      <Dropdown
        menu={{
          items: languageMenuItems,
          selectedKeys: [lang],
          onClick: ({ key }) => {
            if (isSupportedLanguage(key)) {
              onChange(key)
            }
          },
        }}
        trigger={['click']}
      >
        <Button className={styles.switcherButton} icon={<GlobalOutlined />}>
          {languageLabelMap[lang]}
        </Button>
      </Dropdown>
    )
  }
}
