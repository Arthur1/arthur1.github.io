import I18NBiographyPage from '@/app/[lang]/biography/page'
import { fallbackLanguage } from '@/libs/i18n'

const BiographyPage: React.FC = () =>
  I18NBiographyPage({
    params: {
      lang: fallbackLanguage,
    },
  })

export default BiographyPage
