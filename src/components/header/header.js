import React, { useState } from 'react';

import NavItems from './nav-items';
import MobileNavOpen from '../../../content/svg/mobile-nav-open.svg';

const navs = [
  { name: '無墨精選集', subname: 'Featured', src: '/' },
  { name: '他們的故事', subname: 'Stories', src: '/' },
  { name: '回憶留言板', subname: 'Memories', src: '/' },
  { name: '關於', subname: 'About', src: '/' },
];

const botStyle = 'border-0 border-gray-500 border-solid border-b';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      className={`h-14 flex flex-col my-auto lg:flex-row items-start lg:items-center ${botStyle}`}
    >
      <NavItems navItems={navs} isMobile={false} />
      <button
        className="border-0 bg-transparent w-12 h-12 items-center justify-center p-2 cursor-pointer lg:hidden"
        onClick={() => setNavOpen(!navOpen)}
      >
        <MobileNavOpen />
      </button>
      {navOpen ? (
        <div className="absolute h-mobile-nav w-full bg-white z-10 mt-14">
          <div className="flex flex-col">
            <NavItems navItems={navs} isMobile={true} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
