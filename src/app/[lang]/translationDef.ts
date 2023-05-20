const ja = {
  translation: {
    greeting: 'こんにちは',
  },
} as const

const en = {
  translation: {
    greeting: 'Hello.',
  },
} as const

const translationDef = { ja, en } as const

export default translationDef
