import React from 'react';
import { Link } from 'gatsby';

const mobileBorder = 'border-0 border-solid border-b';
const commonStyle =
  'nav-item flex-col justify-center items-center font-sans font-medium no-underline';

const isBrowser = typeof window !== 'undefined';

export default function NavItems({ navItems, isMobile }) {
  const currentPage = isBrowser ? window.location.pathname : '/';
  return (
    <div className="flex flex-col lg:flex-row">
      {navItems.map((nav, idx) => (
        <Link
          key={idx}
          className={
            isMobile
              ? `${commonStyle} ${mobileBorder} flex flex-1 min-h-20`
              : `${commonStyle} h-full hidden lg:flex m-4`
          }
          to={nav.src}
        >
          <p
            className={`font-medium font-zh ${
              nav.src === currentPage ? 'nav-item-selected' : 'highlight-text'
            }`}
          >
            {nav.name}
          </p>
          <p
            className={`text-default-50 font-bold font-en tracking-widest mt-0.5 ${
              isMobile ? 'text-sm' : 'text-xs'
            }`}
          >
            {nav.subname.toUpperCase()}
          </p>
        </Link>
      ))}
    </div>
  );
}
