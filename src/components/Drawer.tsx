import React from 'react'

import { navs } from './Navigation'
import NavigationItem from './NavigationItem'

const Drawer = ({ children, toggleId }) => {
  return (
    <div className="drawer drawer-end">
      <input id={toggleId} type="checkbox" className="drawer-toggle"/> 
      <div className="drawer-content">
        { children }
      </div>
      <div className="drawer-side">
        <label className="drawer-overlay" htmlFor={toggleId} />
        <ul className="menu w-80 bg-white py-6">
          {navs.map(nav => (
            <li>
              <NavigationItem to={nav.src} text={nav.name} hoverText={nav.subname} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Drawer
