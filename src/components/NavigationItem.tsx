import React, { FC, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { Size, getFontSize, getNavItemSize } from '../utils/tailwind'

type NavigationItemProps = {
  readonly className?: string;
  readonly to: string;
  readonly text: string;
  readonly hoverText: string;
  readonly fontSize?: Size;
}

const NavigationItem: FC<NavigationItemProps> = ({ className, to, text, hoverText, fontSize = 'xl' }: NavigationItemProps) => {
  const [ isHovered, setIsHovered ] = useState(false)
  const classes = classNames(
    className,
    'relative h-6',
    getNavItemSize(text.length, fontSize)
  )
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
    <Link href={to}>
      <a className={classes} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <span className={hoverTextClasses}>{hoverText}</span>
        <span className={textClasses}>{text}</span>
      </a>
    </Link>
  )
}

export default NavigationItem
