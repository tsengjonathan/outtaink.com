import React, { Dispatch, FC, SetStateAction } from 'react'

import MUIDrawer from '@mui/material/Drawer'
import { navs } from './Navigation'
import NavigationItem from './NavigationItem'

type DrawerProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer: FC<DrawerProps> = ({ isOpen, setIsOpen }: DrawerProps) => {
  const closeDrawer = () => setIsOpen(false)

  return (
    <MUIDrawer open={isOpen} onClose={closeDrawer} anchor="left">
      <ul className="menu w-80 bg-white py-6">
        {navs.map(nav => (
          <li onClick={closeDrawer} key={nav.src}>
            <NavigationItem to={nav.src} text={nav.name} hoverText={nav.subname} className="mx-auto my-4" />
          </li>
        ))}
      </ul>
    </MUIDrawer>
  )
}

export default Drawer
