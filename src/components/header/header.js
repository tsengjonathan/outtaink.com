import React, { useState } from 'react';
import { Link } from 'gatsby';

import NavItems from './nav-items';
import Logo from '../Logo';
import MobileLogo from '../../../content/svg/mobile-logo.svg';
import MobileNavOpen from '../../../content/svg/mobile-nav-open.svg';

const navs = [
  { name: '無墨精選集', subname: 'Featured', src: '/' },
  { name: '他們的故事', subname: 'Stories', src: '/stories' },
  { name: '關於', subname: 'About', src: '/' },
];

const bottomBorder = 'border-b border-gray-500 border-solid';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={`h-14 lg:h-auto flex my-auto lg:flex-row items-start lg:items-center lg:justify-between lg:mx-4 ${bottomBorder} lg:border-0`}>
      <button
        className="border-0 bg-transparent w-14 h-full items-center justify-center mx-4 p-2.5 cursor-pointer lg:hidden"
        onClick={() => setNavOpen(!navOpen)}
      >
        <MobileNavOpen />
      </button>
      <div className="hidden lg:block w-full">
        <div className="flex justify-center">
          <Link to="/">
            <Logo className="mt-4" textColor="#000000" colonColor="#00524D" />
          </Link>
        </div>
        <NavItems navItems={navs} isMobile={false} />
      </div>
      <div className="lg:w-8" />
      <Link
        className="flex-grow w-20 lg:hidden h-full border-0 border-solid border-l no-underline"
        to="/"
      >
        <MobileLogo className="h-full w-full px-6 py-3" />
      </Link>
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
