import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'
import Headline1 from '../components/Headline1'
import Headline2 from '../components/Headline2'
import SkillsList from '../components/page.skills/SkillsList'
import type { SkillInfo } from '../components/page.skills/SkillsListElement'
import SkillStatusIcon from '../components/page.skills/SkillStatusIcon'
import HeadlineBgImage from '../images/headline-bg/skills.jpg'
import type { Query, SkillsJson } from '../../graphql-types'
import * as styles from './skills.module.scss'

interface SkillsPageDataType {
  skills: Query['allSkillsJson']
}

type SkillsPageProps = PageProps<SkillsPageDataType>

const SkillsPage: FC<SkillsPageProps> = ({ data }) => {
  const { skills } = data
  const categories = [
    'language',
    'frontendFramework',
    'serversideFramework',
    'httpServer',
    'virtualEnvironment',
    'cloudPlatform',
    'ci',
    'os',
    'misc',
  ]
  let skillMap: { [s: string]: SkillsJson[] } = {}
  for (let category of categories) {
    skillMap[category] = skills.nodes.filter(skill => skill.category === category)
  }

  return (
    <>
      <Seo title="Skills" />
      <Layout>
        <Headline1 backgroundUrl={HeadlineBgImage}>Skills</Headline1>
        <Container>
          <ul className={styles.skillStatusIconLegend}>
            <li>
              <SkillStatusIcon status="good" />: Familier
            </li>
            <li>
              <SkillStatusIcon status="soso" />: Beginner
            </li>
          </ul>
          <Headline2>Programming Languages</Headline2>
          <SkillsList skills={skillMap.language as SkillInfo[]} />
          <Headline2>Frameworks (Front-end)</Headline2>
          <SkillsList skills={skillMap.frontendFramework as SkillInfo[]} />
          <Headline2>Frameworks (Server-side)</Headline2>
          <SkillsList skills={skillMap.serversideFramework as SkillInfo[]} />
          <Headline2>HTTP Servers</Headline2>
          <SkillsList skills={skillMap.httpServer as SkillInfo[]} />
          <Headline2>Virtual Environments</Headline2>
          <SkillsList skills={skillMap.virtualEnvironment as SkillInfo[]} />
          <Headline2>Cloud Platforms</Headline2>
          <SkillsList skills={skillMap.cloudPlatform as SkillInfo[]} />
          <Headline2>Continuous Integrations</Headline2>
          <SkillsList skills={skillMap.ci as SkillInfo[]} />
          <Headline2>Operating Systems</Headline2>
          <SkillsList skills={skillMap.os as SkillInfo[]} />
          <Headline2>Misc</Headline2>
          <SkillsList skills={skillMap.misc as SkillInfo[]} />
        </Container>
      </Layout>
    </>
  )
}

export default SkillsPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    skills: allSkillsJson {
      nodes {
        name
        status
        category
      }
    }
  }
`
