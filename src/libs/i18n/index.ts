import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

export const fallbackLanguage = 'ja'
export const nonDefaultLanguages = ['en'] as const
export const languages = [fallbackLanguage, ...nonDefaultLanguages] as const
export type Language = (typeof languages)[number]

const resource = {
  en: {
    translation: {
      greeting: 'hello',
    },
  },
  ja: {
    translation: {
      greeting: 'こんにちは',
    },
  },
} as const

export const useTranslation = async (lang: string) => {
  const i18n = createInstance()
  await i18n.use(initReactI18next).use(resourcesToBackend(resource)).init({
    debug: true,
    supportedLngs: languages,
    fallbackLng: fallbackLanguage,
    lng: lang,
  })
  return {
    t: i18n.getFixedT(lang),
    i18n,
  }
}
