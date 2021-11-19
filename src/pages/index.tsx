import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SiteLogo from '../components/SiteLogo'
import * as styles from './index.module.scss'

const IndexPage: FC = () => {
  return (
    <>
      <Seo />
      <Layout>
        <div className={styles.eyeCatch}>
          <div className={styles.eyeCatchLogo}>
            <SiteLogo className={styles.eyeCatchLogoImg} />
            <div className={styles.eyeCatchLogoText}>Arthur's Portfolio</div>
          </div>
          <div className={styles.eyeCatchText}>
            La mélancolie n'est que de la ferveur retombée.
            <br />
            ──André Paul Guillaume Gide
          </div>
        </div>
      </Layout>
    </>
  )
}

/*
const IndexPage2: FC = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    </p>
  </Layout>
)
*/

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
