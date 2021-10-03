import React, { ReactNode, RefObject } from 'react'

import { navs } from './Navigation'
import NavigationItem from './NavigationItem'

type DrawerType = {
  children: ReactNode[]
  toggleId: string
  scrollRef?: RefObject<HTMLDivElement>
}

const Drawer = ({ children, toggleId, scrollRef }: DrawerType) => {
  return (
    <div className="drawer drawer-end">
      <input id={toggleId} type="checkbox" className="drawer-toggle"/> 
      <div className="drawer-content" ref={scrollRef}>
        { children }
      </div>
      <div className="drawer-side">
        <label className="drawer-overlay" htmlFor={toggleId} />
        <ul className="menu w-80 bg-white py-6">
          {navs.map(nav => (
            <li>
              <NavigationItem to={nav.src} text={nav.name} hoverText={nav.subname} className="mx-auto my-4" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Drawer
