import React from 'react'
import classNames from 'classnames'

import { Link } from 'gatsby'

type LearnMoreType = {
  url: string
  text: string
  color?: string
  className?: string
}

const LearnMore = ({ url, text, color = 'black', className }: LearnMoreType) => {
  const classes = classNames("flex", className)
  return (
    <Link className={classes} to={url}>
      <p className="font-light pr-1">{text}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={color}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </Link>
  )
}

export default LearnMore
