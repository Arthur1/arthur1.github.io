import React from 'react'
import type { FC, ReactNode } from 'react'
import type { WorksJson } from '../../../graphql-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import Headline2 from '../Headline2'
import ExternalLink from '../ExternalLink'
import DevBadge from './DevBadge'
import { FaLink, FaGithub } from 'react-icons/fa'
import * as styles from './WorkBox.module.scss'

interface WorkBoxProps {
  work: WorksJson
  title: string
  image?: IGatsbyImageData
  children: ReactNode
}

const WorkBox: FC<WorkBoxProps> = ({ work, title, image, children }) => (
  <div className={styles.workBox}>
    <div className={styles.workBoxChild}>
      <Headline2>
        {title} <small className={styles.workYear}>[{work.year}]</small>
      </Headline2>
      <div>{work.devs && work.devs.map(devId => <DevBadge devId={devId!} key={devId} />)}</div>
      <p>{children}</p>
      <dl className={styles.workLinks}>
        {work.urls &&
          work.urls.map((url, index) => (
            <React.Fragment key={index}>
              <dt>
                <FaLink />
              </dt>
              <dd>
                <ExternalLink href={url!}>{url}</ExternalLink>
              </dd>
            </React.Fragment>
          ))}
        {work.repositoryUrls &&
          work.repositoryUrls.map((url, index) => (
            <React.Fragment key={index}>
              <dt>
                <FaGithub />
              </dt>
              <dd>
                <ExternalLink href={url!}>{url}</ExternalLink>
              </dd>
            </React.Fragment>
          ))}
      </dl>
    </div>
    <div className={styles.workBoxChild}>{image && <GatsbyImage image={image} alt={title} />}</div>
  </div>
)

export default WorkBox
