import React, { FC, ReactNode, useState } from 'react'

import { useWindowScroll } from 'react-use'
import Navigation from './Navigation'
import Drawer from './Drawer'
import StickyNavigation from './StickyNavigation'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [ drawerOpen, setDrawerOpen ] = useState(false)
  const { y } = useWindowScroll()

  return (
    <main className="bg-background h-full">
      <Drawer isOpen={drawerOpen} setIsOpen={setDrawerOpen}/>
      <StickyNavigation isVisible={y > 0} />
      <Navigation setDrawerOpen={setDrawerOpen} />
      { children }
      <Footer />
    </main>
  )
}

export default Layout;
