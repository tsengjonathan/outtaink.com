import React from 'react';
import { Link } from 'gatsby';

const webBorder = 'border-0 border-gray-500 border-solid border-l';
const mobileBorder = 'border-0 border-solid border-b';
const commonStyle = 'nav-item flex-1 flex-col justify-center items-center font-sans font-medium no-underline';

const isBrowser = typeof window !== 'undefined';

export default function NavItems({ navItems, isMobile }) {
  const currentPage = isBrowser ? window.location.pathname : '/'
  return navItems.map((nav, idx) => (
    <Link
      key={idx}
      className={
        isMobile
          ? `${commonStyle} ${mobileBorder} flex min-h-20`
          : `${commonStyle} ${
              idx !== 0 ? webBorder : null
            } h-full hidden lg:flex`
      }
      to={nav.src}
    >
      <p className={`font-medium font-zh ${nav.src === currentPage ? 'nav-item-selected' : 'highlight-text'}`}>{nav.name}</p>
      <p
        className={`text-default-50 font-bold font-en tracking-widest mt-0.5 ${
          isMobile ? 'text-sm' : 'text-xs'
        }`}
      >
        {nav.subname.toUpperCase()}
      </p>
    </Link>
  ));
}
