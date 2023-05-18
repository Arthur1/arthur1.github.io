import React from 'react'
import type { ReactNode, FC } from 'react'
import SkillStatusIcon from './SkillStatusIcon'

export interface SkillInfo {
  status: 'good' | 'soso'
  name: string
}

interface SkillsListElementProps {
  skill: SkillInfo
}

const SkillsListElement: FC<SkillsListElementProps> = ({ skill }) => (
  <li>
    <SkillStatusIcon status={skill.status} /> {skill.name}
  </li>
)

export default SkillsListElement
