import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SiteLogo from '../components/SiteLogo'
import * as styles from './index.module.scss'

const IndexPage: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo description={t('description')} />
      <Layout>
        <div className={styles.eyeCatch}>
          <div className={styles.eyeCatchLogo}>
            <SiteLogo className={styles.eyeCatchLogoImg} />
            <div className={styles.eyeCatchLogoText}>Arthur's Portfolio</div>
          </div>
          <div className={styles.eyeCatchText} lang="fr">
            La mélancolie n'est que de la ferveur retombée.
            <br />
            ──André Paul Guillaume Gide
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common"] }, language: { eq: $language } }) {
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
