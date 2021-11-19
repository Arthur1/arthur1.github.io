import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'
import Headline1 from '../components/Headline1'
import Headline2 from '../components/Headline2'
import HeadlineBgImage from '../images/headline-bg/favorites.jpg'

const FavoritesPage: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo title="Favorites" />
      <Layout>
        <Headline1 backgroundUrl={HeadlineBgImage}>Favorites</Headline1>
        <Container>
          <Headline2>{t('music.title')}</Headline2>
          <ul>
            <li>{t('music.artists.soundHorizon')}</li>
            <li>{t('music.artists.fujiFabric')}</li>
            <li>{t('music.artists.capsule')}</li>
          </ul>
          <p>{t('music.description')}</p>
          <Headline2>{t('videoGames.title')}</Headline2>
          <ul>
            <li>{t('videoGames.games.shiren')}</li>
            <li>{t('videoGames.games.mother')}</li>
            <li>{t('videoGames.games.kingdomHearts')}</li>
            <li>{t('videoGames.games.banjoKazooie')}</li>
          </ul>
          <p>{t('videoGames.description')}</p>
          <Headline2>{t('boardGames.title')}</Headline2>
          <ul>
            <li>{t('boardGames.games.agricola')}</li>
            <li>{t('boardGames.games.glassRoad')}</li>
            <li>{t('boardGames.games.loveLetter')}</li>
          </ul>
          <p>{t('boardGames.description')}</p>
          <Headline2>{t('pcGames.title')}</Headline2>
          <ul>
            <li>{t('pcGames.games.shadowverse')}</li>
            <li>{t('pcGames.games.battlegrounds')}</li>
            <li>{t('pcGames.games.genshinImpact')}</li>
          </ul>
          <Headline2>{t('japaneseIdols.title')}</Headline2>
          <ul>
            <li>{t('japaneseIdols.members.marikaIto')}</li>
            <li>{t('japaneseIdols.members.kazumiTakayama')}</li>
            <li>{t('japaneseIdols.members.rikaOzeki')}</li>
            <li>{t('japaneseIdols.members.akariNibu')}</li>
          </ul>
          <Headline2>{t('programmingLanguages.title')}</Headline2>
          <ul>
            <li>{t('programmingLanguages.languages.php')}</li>
            <li>{t('programmingLanguages.languages.scala')}</li>
            <li>{t('programmingLanguages.languages.typescript')}</li>
          </ul>
          <Headline2>{t('misc.title')}</Headline2>
          <ul>
            <li>{t('misc.items.monokai')}</li>
          </ul>
        </Container>
      </Layout>
    </>
  )
}

export default FavoritesPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "favorites"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
