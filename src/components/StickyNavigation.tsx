import React from 'react'
import classNames from 'classnames'

import Logo from './Logo'
import NavigationItem from './NavigationItem'
import { navs } from './Navigation'
import SearchButton from './SearchButton'

type StickyNavigationType = {
  readonly className?: string;
}

const StickyNavigation = ({ className }: StickyNavigationType) => {
  const transition = 'transform transition-transform -translate-y-14'
  const classes = classNames(className, transition, 'h-16 bg-white px-14 flex items-center justify-between absolute w-full')
  return (
    <div className={classes}>
      <div className="flex">
        <Logo className="mr-7" />
        {navs.map(nav => <NavigationItem className="mx-7" to={nav.src} text={nav.name} hoverText={nav.subname} fontSize="lg" />)}
      </div>
      <SearchButton />
    </div>
  )
}

export default StickyNavigation
