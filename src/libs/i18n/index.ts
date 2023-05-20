import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

export const fallbackLanguage = 'ja'
export const nonDefaultLanguages = ['en'] as const
export const languages = [fallbackLanguage, ...nonDefaultLanguages] as const
export type Language = (typeof languages)[number]

type useTranslationProps = Readonly<{
  lang: string
  translationDef: Readonly<{
    [L in Language]: Readonly<{}>
  }>
}>

export const useTranslation = async ({ lang, translationDef }: useTranslationProps) => {
  const i18n = createInstance()
  await i18n
    .use(initReactI18next)
    .use(resourcesToBackend(translationDef))
    .init({
      debug: process.env.NODE_ENV == 'development',
      supportedLngs: languages,
      fallbackLng: fallbackLanguage,
      lng: lang,
    })
  return {
    t: i18n.getFixedT(lang),
    i18n,
  }
}
