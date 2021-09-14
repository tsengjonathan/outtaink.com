import React from 'react'
import { Link } from 'gatsby'

import { navs } from './Navigation'

const Drawer = ({ children, toggleId }) => {
  return (
    <div className="drawer">
      <input id={toggleId} type="checkbox" className="drawer-toggle"/> 
      <div className="drawer-content">
        { children }
      </div>
      <div className="drawer-side">
        <label className="drawer-overlay" htmlFor={toggleId} />
        <ul className="menu w-80 bg-white py-6">
          {navs.map(nav => (
            <li>
              <Link to={nav.src}>
                <span className="mx-auto font-zh text-xl">{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Drawer
