const ja = {
  translation: {
    education: {
      title: '学歴',
      list: [
        {
          date: '2022.03',
          content: '東京工業大学 工学部 情報工学科 卒業 学士(工学)',
        },
        {
          date: '2021.03',
          content: '同 IT特別教育プログラム基礎 (enPiT AiBiC) 修了',
        },
        {
          date: '2015.04',
          content: '同 第5類 入学',
        },
        {
          date: '2015.03',
          content: '静岡県立沼津東高等学校 普通科 卒業',
        },
      ],
    },
    greeting: 'こんにちは',
  },
} as const

const en = {
  translation: {
    education: {
      title: 'Education',
      list: [
        {
          date: 'Apr. 2015 - Mar. 2022',
          content: 'B.E. in Computer Science, Tokyo Institute of Technology',
        },
        {
          date: 'Mar. 2021',
          content:
            'Completed Basic Education Program for Leading Information Technology Specialists [enPiT AiBiC (AI & Big data) Course] at Tokyo Tech',
        },
        {
          date: 'Apr. 2012 - Mar. 2015',
          content: 'Numazu Higashi High School',
        },
      ],
    },
    greeting: 'Hello.',
  },
} as const

const translationDef = { ja, en } as const

export default translationDef
