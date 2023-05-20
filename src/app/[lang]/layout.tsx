import { Inter } from 'next/font/google'
import 'ress'

import Navigation from '@/components/common/Navigation'

import './globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  params: Readonly<{
    lang: string
  }>
}>

const RootLayout: React.FC<RootLayoutProps> = ({ children, params }) => {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <div className={styles.BaseWrapper}>
          <header className={styles.NavigationWrapper}>
            <Navigation />
          </header>
          <main className={styles.ContentWrapper}>{children}</main>
          <div>{params.lang}</div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout