import React from 'react'
import type { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LinksListElement from './LinksListElement'
import type { LinkInfo } from './LinksListElement'
import * as styles from './LinksList.module.scss'

const LinksList: FC = () => {
  const { allNavigationLinksJson } = useStaticQuery(graphql`
    query {
      allNavigationLinksJson {
        nodes {
          href
          label
          isExternal
        }
      }
    }
  `)
  const links = allNavigationLinksJson.nodes as LinkInfo[]

  return (
    <ul className={styles.linksList}>
      {links.map(link => (
        <LinksListElement key={link.label} link={link} />
      ))}
    </ul>
  )
}

export default LinksList
