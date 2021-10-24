import React, { FC } from 'react'
import classNames from 'classnames'

import { Link } from 'gatsby'
import { Color, getTextColor } from '../utils/tailwind'

type LearnMoreProps = {
  url: string
  text: string
  color?: Color
  className?: string
}

const LearnMore: FC<LearnMoreProps> = ({ url, text, color = 'black', className }: LearnMoreProps) => {
  const classes = classNames("flex", className)
  const textClasses = classNames('font-light', 'pr-1', getTextColor(color))

  return (
    <Link className={classes} to={url}>
      <p className={textClasses}>{text}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={color}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </Link>
  )
}

export default LearnMore
