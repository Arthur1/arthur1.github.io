import React from 'react'
import type { ReactNode, FC, MouseEvent } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  lang: string
  children: ReactNode
}

const LangSwitcher: FC<LangSwitcherProps> = ({ lang, children }) => {
  const { language, changeLanguage } = useI18next()
  const handleSwitcher = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    changeLanguage(lang)
  }
  return lang === language ? (
    <>{children}</>
  ) : (
    <a href="#" onClick={handleSwitcher} className={styles.langSwitcherLink}>
      {children}
    </a>
  )
}

export default LangSwitcher
