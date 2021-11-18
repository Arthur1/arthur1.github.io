import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import ExternalLink from '../ExternalLink'
import * as styles from './LinksListElement.module.scss'

export interface LinkInfo {
  href: string
  label: string
  isExternal: boolean
}

interface LinksListElementProps {
  link: LinkInfo
}

const LinksListElement: FC<LinksListElementProps> = ({ link }) => {
  return (
    <li className={styles.linksListElement}>
      {link.isExternal ? (
        <ExternalLink href={link.href} className={styles.linksListElementAnchor}>
          {link.label}
        </ExternalLink>
      ) : (
        <Link
          to={`${link.href}`}
          className={styles.linksListElementAnchor}
          activeClassName={styles.linksListElementAnchorActive}
        >
          {link.label}
        </Link>
      )}
    </li>
  )
}

export default LinksListElement
