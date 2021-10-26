import React, { FC, MutableRefObject, ReactNode } from 'react'

import { navs } from './Navigation'
import NavigationItem from './NavigationItem'

type DrawerProps = {
  children: ReactNode[]
  toggleId: string
  scrollRef?: MutableRefObject<HTMLDivElement>
  onScroll?: () => void
}

const Drawer: FC<DrawerProps> = ({ children, toggleId, scrollRef, onScroll }: DrawerProps) => {
  const liOnClick = () => {
    const inputElements = document && document.getElementsByTagName('input')
    const toggle = inputElements.namedItem(toggleId)
    toggle.checked = false
  }

  return (
    <div className="drawer drawer-end">
      <input id={toggleId} type="checkbox" className="drawer-toggle"/> 
      <div className="drawer-content" ref={scrollRef} onScroll={onScroll}>
        { children }
      </div>
      <div className="drawer-side">
        <label className="drawer-overlay" htmlFor={toggleId} />
        <ul className="menu w-80 bg-white py-6">
          {navs.map(nav => (
            <li onClick={liOnClick}>
              <NavigationItem to={nav.src} text={nav.name} hoverText={nav.subname} className="mx-auto my-4" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Drawer
