import Container from '@/components/common/Container'
import Headline1 from '@/components/common/Headline1'
import Headline2 from '@/components/common/Headline2'
import { nonDefaultLanguages, useTranslation } from '@/libs/i18n'

import translationDef from './translationDef'

export const generateStaticParams = async () => nonDefaultLanguages.map(lang => ({ lang }))

type IndexPageProps = Readonly<{
  params: {
    lang: string
  }
}>

const IndexPage = async (props: IndexPageProps) => {
  const { lang } = props.params
  const { t } = await useTranslation({ lang, translationDef })
  return (
    <div>
      <div>
        <div>Arthur&apos;s Portfolio</div>
      </div>
      <div lang="fr">
        La mélancolie nr&apos;est que de la ferveur retombée.
        <br />
        ──André Paul Guillaume Gide
      </div>
      <Headline1>{t('greeting')}</Headline1>
      <Container>
        <Headline2>greeting</Headline2>
        <p>{t('greeting')}</p>
      </Container>
    </div>
  )
}

export default IndexPage
