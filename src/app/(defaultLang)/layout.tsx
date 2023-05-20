import React from 'react'
import I18NRootLayout from '@/app/[lang]/layout'
import { fallbackLanguage } from '@/libs/i18n'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

const RootLayout: React.FC<RootLayoutProps> = ({ children }) =>
  I18NRootLayout({
    children,
    params: {
      lang: fallbackLanguage,
    },
  })

export default RootLayout
