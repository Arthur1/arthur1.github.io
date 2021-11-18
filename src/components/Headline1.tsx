import React from 'react'
import type { FC, ReactNode, CSSProperties } from 'react'
import * as styles from './Headline1.module.scss'

interface Headline1Props {
  children?: ReactNode
  backgroundUrl: string
}

const Headline1: FC<Headline1Props> = ({ children, backgroundUrl }) => {
  const styleProp: CSSProperties = {
    backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('${backgroundUrl}')`,
  }
  return (
    <div className={styles.headlineBox} style={styleProp}>
      <h1 className={styles.headline}>{children}</h1>
    </div>
  )
}

export default Headline1
