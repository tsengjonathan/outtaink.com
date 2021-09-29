import React from 'react'

import DrawerButton from './DrawerButton'
import Logo from './Logo'
import SearchButton from './SearchButton'

export const navs = [
  { name: '無墨精選集', subname: 'FEATURED', src: '/' },
  { name: '他們的故事', subname: 'STORIES', src: '/stories' },
  { name: '關於', subname: 'ABOUT', src: '/about' },
];

const Navigation = ({ drawerToggleId }) => {
  return (
    <div className="max-w-screen-page mx-6 md:mx-auto py-7 flex items-start md:items-center justify-between">
      <SearchButton className="tooltip-right" />
      <Logo />
      <DrawerButton toggleId={drawerToggleId} />
    </div>
  )
}

export default Navigation
