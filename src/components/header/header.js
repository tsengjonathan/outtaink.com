import React, { useState } from 'react';
import { Link } from 'gatsby';

import NavItems from './nav-items';
import MobileLogo from '../../../content/svg/mobile-logo.svg';
import MobileNavOpen from '../../../content/svg/mobile-nav-open.svg';

const navs = [
  { name: '無墨精選集', subname: 'Featured', src: '/' },
  { name: '他們的故事', subname: 'Stories', src: '/stories' },
  { name: '關於', subname: 'About', src: '/' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="h-14 flex my-auto lg:flex-row items-start lg:items-center border-0 border-gray-500 border-solid border-b">
      <NavItems navItems={navs} isMobile={false} />
      <Link
        className="flex-grow w-20 lg:hidden h-full border-0 border-solid border-r no-underline"
        to="/"
      >
        <MobileLogo className="h-full w-full px-6 py-3" />
      </Link>
      <button
        className="border-0 bg-transparent w-14 h-full items-center justify-center mx-4 p-2.5 cursor-pointer lg:hidden"
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
