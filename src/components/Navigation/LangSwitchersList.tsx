import React from 'react'
import type { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import * as styles from './LangSwitchersList.module.scss'

const LangSwitcherList: FC = () => (
  <div className={styles.langSwitcherList}>
    <LangSwitcher lang="ja">日本語</LangSwitcher> | <LangSwitcher lang="en">English</LangSwitcher>
  </div>
)

export default LangSwitcherList
