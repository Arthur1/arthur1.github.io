export const fallbackLanguage = 'ja'
export const nonDefaultLanguages = ['en'] as const
export const languages = [fallbackLanguage, ...nonDefaultLanguages] as const
export type Language = (typeof languages)[number]
