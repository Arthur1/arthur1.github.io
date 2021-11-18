import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import SiteLogo from './SiteLogo'
import LinksList from './Navigation/LinksList'
import LangSwitcherList from './Navigation/LangSwitchersList'
import SnsList from './Navigation/SnsList'
import * as styles from './Navigation.module.scss'

const Navigation = () => {
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
        <small className={styles.copyright}>&copy; 2020-2021 Arthur</small>
      </nav>
    </>
  )
}

export default Navigation
