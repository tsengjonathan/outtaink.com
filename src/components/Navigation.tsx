import React, { Dispatch, FC, SetStateAction } from 'react'
import Link from 'next/link'

import DrawerButton from './DrawerButton'
import Logo from './Logo'
import SearchButton from './SearchButton'

export const navs = [
  { name: '無墨精選集', subname: 'FEATURED', src: '/' },
  { name: '他們的故事', subname: 'STORIES', src: '/stories' },
  { name: '關於', subname: 'ABOUT', src: '/about' },
  { name: '投稿', subname: 'SURVEY', src: '/survey' },
];

type NavigationProps = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

const Navigation: FC<NavigationProps> = ({ setDrawerOpen }: NavigationProps) => {
  return (
    <div className="md:px-6">
      <div className="max-w-screen-page mx-6 md:mx-auto pt-6 md:py-10 flex items-center justify-between">
        <SearchButton className="tooltip-right" />
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <DrawerButton setDrawerOpen={setDrawerOpen} />
      </div>
    </div>
  )
}

export default Navigation
