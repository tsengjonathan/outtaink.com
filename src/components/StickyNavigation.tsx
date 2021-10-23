import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import Logo from './Logo'
import NavigationItem from './NavigationItem'
import { navs } from './Navigation'
import SearchButton from './SearchButton'

type StickyNavigationProps = {
  readonly className?: string;
  readonly isVisible?: boolean;
}

const StickyNavigation = ({ className, isVisible = false }: StickyNavigationProps) => {
  const transition = 'transform transition-transform'
  const classes = classNames(
    className,
    transition,
    { '-translate-y-16': !isVisible },
    { 'translate-y-0': isVisible },
    'h-16 bg-white px-14 hidden md:flex items-center justify-between fixed w-full z-20'
  )
  return (
    <div className={classes}>
      <div className="flex items-center">
        <Link to="/">
          <Logo className="mr-6" />
        </Link>
        {navs.map(nav => <NavigationItem className="mx-6" to={nav.src} text={nav.name} hoverText={nav.subname} fontSize="lg" />)}
      </div>
      <SearchButton className="tooltip-left" />
    </div>
  )
}

export default StickyNavigation
