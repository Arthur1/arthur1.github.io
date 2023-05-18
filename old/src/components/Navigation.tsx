import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import SiteLogo from './SiteLogo'
import LinksList from './Navigation/LinksList'
import LangSwitcherList from './Navigation/LangSwitchersList'
import SnsList from './Navigation/SnsList'
import * as styles from './Navigation.module.scss'
import { graphql, useStaticQuery } from 'gatsby'

const Navigation = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        buildTime
      }
    }
  `)
  const buildDate = new Date(site.buildTime)
  const buildDateString = buildDate.toLocaleString('ja-JP')
  const buildYear = buildDate.getFullYear()

  return (
    <>
      <div className={styles.logoBox}>
        <Link to="/">
          <SiteLogo className={styles.logo} />
        </Link>
      </div>
      <div className={styles.siteTitle}>Arthur's Portfolio</div>
      <nav>
        <LinksList />
        <LangSwitcherList />
        <SnsList />
        <div>
          <small className={styles.copyright}>&copy; 2020-{buildYear} Arthur</small>
        </div>
        <div>
          <small className={styles.copyright}>Last Modified: {buildDateString}</small>
        </div>
      </nav>
    </>
  )
}

export default Navigation
