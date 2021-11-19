import React from 'react'
import type { FC } from 'react'
import { FaSmile, FaMeh } from 'react-icons/fa'
import * as styles from './SkillStatusIcon.module.scss'

interface SkillStatusIconProps {
  status: 'good' | 'soso'
}

const SkillStatusIcon: FC<SkillStatusIconProps> = ({ status }) =>
  status === 'good' ? (
    <FaSmile className={styles.iconGood} />
  ) : (
    <FaMeh className={styles.iconSoso} />
  )

export default SkillStatusIcon
