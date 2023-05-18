import React from 'react'
import type { FC } from 'react'
import ExternalLink from '../ExternalLink'
import { FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'
import * as styles from './SnsList.module.scss'

const snsLinks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/Arthur1__',
    icon: <FaTwitter />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/arthur1hope',
    icon: <FaFacebook />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Arthur1',
    icon: <FaGithub />,
  },
]

const SnsList: FC = () => (
  <ul className={styles.snsList}>
    {snsLinks.map(link => (
      <li className={styles.snsListElement} key={link.label}>
        <ExternalLink
          href={link.href}
          className={styles.snsListElementAnchor}
          aria-label={link.label}
        >
          {link.icon}
        </ExternalLink>
      </li>
    ))}
  </ul>
)

export default SnsList
