import I18NIndexPage from '@/app/[lang]/page'
import { fallbackLanguage } from '@/libs/i18n'

const IndexPage = async () =>
  await I18NIndexPage({
    params: {
      lang: fallbackLanguage,
    },
  })

export default IndexPage
