import React from 'react'
import type { FC } from 'react'
import LinksListElement from './LinksListElement'
import type { LinkInfo } from './LinksListElement'
import * as styles from './LinksList.module.scss'

const links: LinkInfo[] = [
  {
    href: '/biography',
    label: 'Biography',
    isExternal: false,
  },
  {
    href: '/works',
    label: 'Works',
    isExternal: false,
  },
  {
    href: '/skills',
    label: 'Skills',
    isExternal: false,
  },
  {
    href: '/research',
    label: 'Research',
    isExternal: false,
  },
  {
    href: '/favorites',
    label: 'Favorites',
    isExternal: false,
  },
  {
    href: 'https://arthur.hateblo.jp/',
    label: 'Blog',
    isExternal: true,
  },
]

const LinksList: FC = () => (
  <ul className={styles.linksList}>
    {links.map(link => (
      <LinksListElement key={link.label} link={link} />
    ))}
  </ul>
)

export default LinksList
