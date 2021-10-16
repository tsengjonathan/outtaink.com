import React from 'react'
import { Link } from 'gatsby';

import DrawerButton from './DrawerButton'
import Logo from './Logo'
import SearchButton from './SearchButton'

export const navs = [
  { name: '無墨精選集', subname: 'FEATURED', src: '/' },
  { name: '他們的故事', subname: 'STORIES', src: '/stories' },
  { name: '關於', subname: 'ABOUT', src: '/about' },
  { name: '投稿', subname: 'SURVEY', src: '/survey' },
];

const Navigation = ({ drawerToggleId }) => {
  return (
    <div className="max-w-screen-page mx-6 md:mx-auto pt-6 md:py-10 flex items-center justify-between">
      <SearchButton className="tooltip-right" />
      <Link to="/">
        <Logo />
      </Link>
      <DrawerButton toggleId={drawerToggleId} />
    </div>
  )
}

export default Navigation
