import React from 'react'
import type { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  title?: string
}

const Seo: FC<SeoProps> = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )

  const defaultTitle = site.siteMetadata?.title as string

  return (
    <Helmet
      title={title ? `${title} | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          property: 'og:title',
          content: title || defaultTitle,
        },
      ]}
    />
  )
}

export default Seo
