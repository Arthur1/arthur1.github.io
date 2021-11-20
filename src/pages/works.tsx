import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'
import Headline1 from '../components/Headline1'
import HeadlineBgImage from '../images/headline-bg/works.jpg'
import WorkBox from '../components/page.works/WorkBox'
import type { Query } from '../../graphql-types'

interface WorksPageDataType {
  works: Query['allWorksJson']
  images: Query['allFile']
}

type WorksPageProps = PageProps<WorksPageDataType>

const WorksPage: FC<WorksPageProps> = ({ data }) => {
  const { t } = useTranslation()
  const { works, images } = data
  const sortedWorks = [...works.nodes].reverse()

  const imagesMap = images.nodes.reduce((result, current) => {
    result[current.relativePath] = current.childImageSharp?.gatsbyImageData
    return result
  }, {} as { [index: string]: IGatsbyImageData })

  return (
    <>
      <Seo title="Works" description={t('description')} />
      <Layout>
        <Headline1 backgroundUrl={HeadlineBgImage}>Works</Headline1>
        <Container>
          {sortedWorks.map(work => (
            <WorkBox
              title={t(`${work.key}.title`)}
              work={work}
              key={work.key}
              image={imagesMap[work.image!]!}
            >
              {t(`${work.key}.description`)}
            </WorkBox>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export default WorksPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "works"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    works: allWorksJson {
      nodes {
        key
        year
        image
        devs
        urls
        repositoryUrls
      }
    }
    images: allFile(
      filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "works" } }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
