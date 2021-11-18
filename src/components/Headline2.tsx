import React from 'react'
import type { FC, ReactNode } from 'react'
import * as styles from './Headline2.module.scss'

interface Headline2Props {
  children?: ReactNode
}

const Headline2: FC<Headline2Props> = ({ children }) => (
  <h2 className={styles.headline2}>{children}</h2>
)

export default Headline2
