import React, { useState } from 'react'
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
  const [ isHovered, setIsHovered ] = useState(false)
  const classes = classNames(className, 'relative h-6 w-28')
  const commonClasses = 'absolute text-center h-full w-full font-mixed bg-white transition-clip-path'
  const textClasses = classNames(
    getFontSize(fontSize),
    commonClasses,
    { 'nav-item-uncovered': isHovered },
    { 'nav-item-covered': !isHovered }
  )
  const hoverTextClasses = classNames(
    getFontSize(fontSize),
    commonClasses,
    'font-medium highlight align-middle'
  )
  return (
    <Link className={classes} to={to} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <span className={hoverTextClasses}>{hoverText}</span>
      <span className={textClasses}>{text}</span>
    </Link>
  )
}

export default NavigationItem