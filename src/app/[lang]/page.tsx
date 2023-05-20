import { nonDefaultLanguages } from '@/libs/i18n'
import Container from '@/components/common/Container'
import Headline1 from '@/components/common/Headline1'
import Headline2 from '@/components/common/Headline2'

export const generateStaticParams = async () => nonDefaultLanguages.map(lang => ({ lang }))

type IndexPageProps = Readonly<{
  params: {
    lang: string
  }
}>

const IndexPage: React.FC<IndexPageProps> = ({ params }) => {
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
      <Headline1>Hello</Headline1>
      <Container>
        <Headline2>greeting</Headline2>
        <p>hello. {params.lang}</p>
      </Container>
    </div>
  )
}

export default IndexPage
