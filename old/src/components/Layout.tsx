import React, { useState, useEffect, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { globalHistory } from '@reach/router'
import { FaTimes, FaBars } from 'react-icons/fa'
import Navigation from './Navigation'
import * as styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [spNavIsOpen, setSpNavIsOpen] = useState(false)
  const [openButtonIsBlack, setOpenButtonIsBlack] = useState(false)
  const openSpNav = () => {
    setSpNavIsOpen(true)
  }
  const closeSpNav = () => {
    setSpNavIsOpen(false)
  }

  let navBoxClassName = styles.navBox
  if (spNavIsOpen) {
    navBoxClassName = `${navBoxClassName} ${styles.navBoxIsOpen}`
  }

  let toggleButtonBoxClassName = styles.toggleButtonBox
  if (!spNavIsOpen && openButtonIsBlack) {
    toggleButtonBoxClassName = `${toggleButtonBoxClassName} ${styles.openButtonBoxBlack}`
  }

  const scrollHandler = useCallback(() => {
    const scrollTop = window.scrollY
    setOpenButtonIsBlack(scrollTop > 175)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler, { passive: true })
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [spNavIsOpen])

  useEffect(() => {
    return globalHistory.listen(() => {
      closeSpNav()
    })
  }, [])

  return (
    <div className={styles.baseWrapper}>
      <header className={navBoxClassName}>
        <Navigation />
      </header>
      <main className={styles.mainBox}>{children}</main>
      <div className={toggleButtonBoxClassName}>
        {spNavIsOpen ? <FaTimes onClick={closeSpNav} /> : <FaBars onClick={openSpNav} />}
      </div>
    </div>
  )
}

export default Layout
