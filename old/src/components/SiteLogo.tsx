import React from 'react'
import type { FC } from 'react'

interface SiteLogoProps {
  className?: string
}

const SiteLogo: FC<SiteLogoProps> = ({ className }) => (
  <img
    src="/images/logo.svg"
    className={className}
    alt="Logo of Arthur's Portfolio"
    width={407}
    height={127}
  />
)

export default SiteLogo
