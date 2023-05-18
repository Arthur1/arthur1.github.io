import React from 'react'
import type { FC, ReactNode } from 'react'
import * as styles from './Container.module.scss'

interface ContainerProps {
  children?: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Container
