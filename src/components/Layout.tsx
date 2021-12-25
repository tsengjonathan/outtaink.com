import React, { FC, ReactNode, useRef } from 'react'

import { useScroll } from 'react-use'
import Navigation from './Navigation'
import Drawer from './Drawer'
import StickyNavigation from './StickyNavigation'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { y } = useScroll(ref)

  const drawerToggleId = 'drawer-toggle'

  return (
    <main className="bg-background h-full">
      <Drawer toggleId={drawerToggleId} scrollRef={ref}>
        <StickyNavigation isVisible={y > 0} />
        <Navigation drawerToggleId={drawerToggleId} />
        { children }
        <Footer />
      </Drawer>
    </main>
  )
}

export default Layout;
