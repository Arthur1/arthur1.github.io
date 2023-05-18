import React from 'react'
import type { FC, HTMLProps } from 'react'

const ExternalLink: FC<HTMLProps<HTMLAnchorElement>> = props => {
  return <a {...props} target="_blank" rel="noreferrer"></a>
}

export default ExternalLink
