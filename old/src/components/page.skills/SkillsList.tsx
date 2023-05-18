import React from 'react'
import type { FC } from 'react'
import SkillsListElement from './SkillsListElement'
import { SkillInfo } from './SkillsListElement'
import * as styles from './SkillsList.module.scss'

interface SkillsListProps {
  skills: SkillInfo[]
}

const SkillsList: FC<SkillsListProps> = ({ skills }) => (
  <ul className={styles.skillsList}>
    {skills.map(skill => (
      <SkillsListElement skill={skill} key={skill.name} />
    ))}
  </ul>
)

export default SkillsList
