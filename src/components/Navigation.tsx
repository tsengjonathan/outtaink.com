import React from 'react'

import DrawerButton from './DrawerButton'
import Logo from './Logo'
import SearchButton from './SearchButton'

export const navs = [
  { name: '無墨精選集', subname: 'Featured', src: '/' },
  { name: '他們的故事', subname: 'Stories', src: '/stories' },
  { name: '關於', subname: 'About', src: '/about' },
];

const Navigation = ({ drawerToggleId }) => {
  return (
    <div className="max-w-screen-page mx-auto py-7 flex items-center justify-between">
      <SearchButton />
      <Logo />
      <DrawerButton toggleId={drawerToggleId} />
    </div>

  )
}

export default Navigation
