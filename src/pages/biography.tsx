import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'
import Headline1 from '../components/Headline1'
import Headline2 from '../components/Headline2'
import ExternalLink from '../components/ExternalLink'
import HeadlineBgImage from '../images/headline-bg/biography.jpg'
import * as styles from './biography.module.scss'

interface HistoryRow {
  date: string
  description: string
}

const BiographyPage: FC = () => {
  const { language } = useI18next()
  const { t } = useTranslation()

  const historyList = t('history.list', { returnObjects: true }) as HistoryRow[]
  const historyListClassName = language === 'ja' ? styles.historyList : styles.historyListEn

  return (
    <>
      <Seo title="Biography" />
      <Layout>
        <Headline1 backgroundUrl={HeadlineBgImage}>Biography</Headline1>
        <Container>
          <h1>ASAKURA Kazuki a.k.a. Arthur</h1>
          <Headline2>{t('history.title')}</Headline2>
          <dl className={historyListClassName}>
            {historyList.map((historyRow, index) => (
              <React.Fragment key={index}>
                <dt>{historyRow.date}</dt>
                <dd>{historyRow.description}</dd>
              </React.Fragment>
            ))}
          </dl>
          <Headline2>{t('currentAffiliations.title')}</Headline2>
          <ul>
            <li>{t('currentAffiliations.affiliations.jointConcertPa')}</li>
            <li>
              <ExternalLink href="https://titech.app/">
                {t('currentAffiliations.affiliations.titechAppProject')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.mdi.c.titech.ac.jp/">
                {t('currentAffiliations.affiliations.mdiLab')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="http://www.ocw.titech.ac.jp/index.php?module=General&action=T0300&GakubuCD=4&GakkaCD=342300&KeiCD=23&KougiCD=202102444&Nendo=2021&vid=03">
                {t('currentAffiliations.affiliations.sysdes2021')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="http://www.ocw.titech.ac.jp/index.php?module=General&action=T0300&GakubuCD=4&GakkaCD=342300&KeiCD=23&KougiCD=202102449&Nendo=2021&vid=03">
                {t('currentAffiliations.affiliations.sysimpl2021')}
              </ExternalLink>
            </li>
          </ul>
          <Headline2>{t('formerAffiliations.title')}</Headline2>
          <ul>
            <li>{t('formerAffiliations.affiliations.jizi')}</li>
            <li>{t('formerAffiliations.affiliations.buszemi')}</li>
            <li>{t('formerAffiliations.affiliations.swimmingInstructor')}</li>
            <li>{t('formerAffiliations.affiliations.koryosai67')}</li>
            <li>{t('formerAffiliations.affiliations.numazuTabloid')}</li>
          </ul>
          <Headline2>{t('awards.title')}</Headline2>
          <ul>
            <li>{t('awards.awards.globalSystem')}</li>
            <li>{t('awards.awards.sysimplWeb')}</li>
            <li>{t('awards.awards.enpit')}</li>
          </ul>
          <Headline2>{t('qualifications.title')}</Headline2>
          <ul>
            <li>{t('qualifications.qualifications.ap')}</li>
            <li>{t('qualifications.qualifications.toeic')}</li>
          </ul>
        </Container>
      </Layout>
    </>
  )
}

export default BiographyPage

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
  }
`
