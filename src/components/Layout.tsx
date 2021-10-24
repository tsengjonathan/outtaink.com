import React, { FC, ReactNode } from 'react'
import { useScroll } from 'react-use'
import { useScrollRestoration } from 'gatsby-react-router-scroll'

import Navigation from './Navigation'
import Drawer from './Drawer'
import StickyNavigation from './StickyNavigation'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { ref, onScroll } = useScrollRestoration<HTMLDivElement>(`page-component-drawer`)
  const { y } = useScroll(ref)

  const drawerToggleId = 'drawer-toggle'

  return (
    <main className="bg-background h-full">
      <Drawer toggleId={drawerToggleId} scrollRef={ref} onScroll={onScroll}>
        <StickyNavigation isVisible={y > 0} />
        <Navigation drawerToggleId={drawerToggleId} />
        { children }
        <Footer />
      </Drawer>
    </main>
  );
};

export default Layout;
