import React from 'react'
import type { FC } from 'react'
import { Helmet } from 'gatsby-plugin-react-i18next'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  title?: string
  description?: string
}

const Seo: FC<SeoProps> = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `,
  )

  const defaultTitle = site.siteMetadata.title as string
  const siteUrl = site.siteMetadata.siteUrl as string

  return (
    <Helmet
      title={title ? `${title} | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title || defaultTitle,
        },
        {
          property: 'og:description',
          content: description,
        },
        { property: 'og:site_name', content: defaultTitle },
        {
          property: 'og:image',
          content: `${siteUrl}/static/images/ogpimage.png`,
        },
      ]}
    />
  )
}

export default Seo
