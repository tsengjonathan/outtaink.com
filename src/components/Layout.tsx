import React, { useRef } from 'react'
import { useScroll } from 'react-use'

import Navigation from './Navigation'
import Drawer from './Drawer'
import StickyNavigation from './StickyNavigation'
import Footer from './footer'

const Layout = ({ children }) => {
  const scrollRef = useRef(null)
  const { y } = useScroll(scrollRef)

  const drawerToggleId = 'drawer-toggle'

  return (
    <main className="bg-background h-full">
      <Drawer toggleId={drawerToggleId} scrollRef={scrollRef}>
        <StickyNavigation isVisible={y > 0} />
        <Navigation drawerToggleId={drawerToggleId} />
        { children }
        <Footer />
      </Drawer>
    </main>
  );
};

export default Layout;
