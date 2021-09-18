import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import { getFontSize, Size } from '../utils/tailwind'

type NavigationItemType = {
  readonly className?: string;
  readonly to: string;
  readonly text: string;
  readonly hoverText: string;
  readonly fontSize?: Size;
}

const NavigationItem = ({ className, to, text, hoverText, fontSize = 'xl' }: NavigationItemType) => {
  const classes = classNames(className, 'relative p-0')
  const textClasses = classNames(getFontSize(fontSize), 'text-center h-full w-full font-zh')
  return (
    <Link className={classes} to={to}>
      <span className={textClasses}>{text}</span>
    </Link>
  )
}

export default NavigationItem
