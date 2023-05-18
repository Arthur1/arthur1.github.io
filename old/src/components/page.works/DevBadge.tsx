import React, { createElement } from 'react'
import type { FC } from 'react'
import { FaChevronRight, FaFileImport, FaTint, FaWordpress } from 'react-icons/fa'
import {
  SiAmazonaws,
  SiBootstrap,
  SiDocker,
  SiIfttt,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiRedis,
  SiScala,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import * as styles from './DevBadge.module.scss'

const devs = [
  {
    devId: 'php',
    label: 'PHP',
    bgColor: '#777cb4',
    textColor: 'white',
    icon: SiPhp,
  },
  {
    devId: 'javascript',
    label: 'JavaScript',
    bgColor: '#f7df1e',
    textColor: 'black',
    icon: SiJavascript,
  },
  {
    devId: 'typescript',
    label: 'TypeScript',
    bgColor: '#3178c6',
    textColor: 'white',
    icon: SiTypescript,
  },
  {
    devId: 'laravel',
    label: 'Laravel',
    bgColor: '#f55247',
    textColor: 'white',
    icon: SiLaravel,
  },
  {
    devId: 'vue',
    label: 'Vue.js',
    bgColor: '#42b883',
    textColor: 'white',
    icon: SiVuedotjs,
  },
  {
    devId: 'nuxt',
    label: 'Nuxt.js',
    bgColor: '#2f495e',
    textColor: 'white',
    icon: SiNuxtdotjs,
  },
  {
    devId: 'bootstrap',
    label: 'Bootstrap',
    bgColor: '#563e7b',
    textColor: 'white',
    icon: SiBootstrap,
  },
  {
    devId: 'wordpress',
    label: 'Wordpress',
    bgColor: '#21759b',
    textColor: 'white',
    icon: FaWordpress,
  },
  {
    devId: 'fuelphp',
    label: 'FuelPHP',
    bgColor: '#8303d8',
    textColor: 'white',
    icon: FaTint,
  },
  {
    devId: 'python',
    label: 'Python',
    bgColor: '#4584b6',
    textColor: 'white',
    icon: SiPython,
  },
  {
    devId: 'playFramework',
    label: 'PlayFramework',
    bgColor: '#48661f',
    textColor: 'white',
    icon: FaChevronRight,
  },
  {
    devId: 'scala',
    label: 'Scala',
    bgColor: '#df3835',
    textColor: 'white',
    icon: SiScala,
  },
  {
    devId: 'ifttt',
    label: 'IFTTT',
    bgColor: '#000000',
    textColor: 'white',
    icon: SiIfttt,
  },
  {
    devId: 'gas',
    label: 'Google Apps Script',
    bgColor: '#3e82f9',
    textColor: 'white',
    icon: FaFileImport,
  },
  {
    devId: 'aws',
    label: 'AWS',
    bgColor: '#ff9900',
    textColor: 'white',
    icon: SiAmazonaws,
  },
  {
    devId: 'mysql',
    label: 'MySQL',
    bgColor: '#00758f',
    textColor: 'white',
    icon: GrMysql,
  },
  {
    devId: 'redis',
    label: 'Redis',
    bgColor: '#da2b21',
    textColor: 'white',
    icon: SiRedis,
  },
  {
    devId: 'docker',
    label: 'Docker',
    bgColor: '#0db7ed',
    textColor: 'white',
    icon: SiDocker,
  },
  {
    devId: 'react',
    label: 'React',
    bgColor: '#61dafb',
    textColor: 'black',
    icon: SiReact,
  },
  {
    devId: 'next',
    label: 'Next.js',
    bgColor: '#000000',
    textColor: 'white',
    icon: SiNextdotjs,
  },
]

interface DevBadgeProps {
  devId: string
}

const DevBadge: FC<DevBadgeProps> = ({ devId }) => {
  const dev = devs.find(dev => dev.devId === devId)
  return dev ? (
    <span className={styles.badge} style={{ background: dev.bgColor, color: dev.textColor }}>
      {createElement(dev.icon, { className: styles.badgeIcon })}
      {dev.label}
    </span>
  ) : (
    <>hoge</>
  )
}

export default DevBadge
