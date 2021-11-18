import React, { useEffect, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import * as styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [spNavIsOpen, setSpNavIsOpen] = React.useState(false)
  const [openButtonIsBlack, setOpenButtonIsBlack] = React.useState(false)
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
    console.log(scrollTop)
    setOpenButtonIsBlack(scrollTop > 175)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler, { passive: true })
  })

  return (
    <div className={styles.baseWrapper}>
      <header className={navBoxClassName}>
        {
          //<Navigation />
        }
      </header>
      <main className={styles.mainBox}>{children}</main>
      <div className={toggleButtonBoxClassName}>
        {spNavIsOpen ? <FaTimes onClick={closeSpNav} /> : <FaBars onClick={openSpNav} />}
      </div>
    </div>
  )
}

export default Layout
