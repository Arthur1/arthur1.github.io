import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'
import Headline1 from '../components/Headline1'
import Headline2 from '../components/Headline2'
import HeadlineBgImage from '../images/headline-bg/research.png'
import * as styles from './research.module.scss'

const ResearchPage: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo title="Research" description={t('description')} />
      <Layout>
        <Headline1 backgroundUrl={HeadlineBgImage}>Research</Headline1>
        <Container>
          <Headline2>{t('interests.title')}</Headline2>
          <ul>
            <li>{t('interests.interests.generalizedSampling')}</li>
            <li>{t('interests.interests.nlp')}</li>
            <li>{t('interests.interests.boardGameAi')}</li>
            <li>{t('interests.interests.postWeb')}</li>
          </ul>
          <Headline2>{t('publications.title')}</Headline2>
          <ol className={styles.publicationsList}>
            <li dangerouslySetInnerHTML={{ __html: t('publications.publications.sip2022') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('publications.publications.bthesis') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('publications.publications.vric2020') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('publications.publications.vrsj2019') }}></li>
          </ol>
        </Container>
      </Layout>
    </>
  )
}

export default ResearchPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "research"] }, language: { eq: $language } }
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
