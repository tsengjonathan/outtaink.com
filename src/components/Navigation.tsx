import React, { Dispatch, FC, SetStateAction } from 'react'
import Link from 'next/link'

import DrawerButton from './DrawerButton'
import { Logo } from './Icons'
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
      <div className="max-w-screen-lg mx-6 md:mx-auto pt-6 md:py-10 flex items-center justify-between">
        <DrawerButton setDrawerOpen={setDrawerOpen} />
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <SearchButton className="tooltip-left" />
      </div>
    </div>
  )
}

export default Navigation
