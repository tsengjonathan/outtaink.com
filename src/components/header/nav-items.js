import React from 'react';
import { Link } from 'gatsby';

const webBorder = 'border-0 border-gray-500 border-solid border-l';
const mobileBorder = 'border-0 border-solid border-b';
const commonStyle =
  'flex-1 flex-col justify-center items-center font-sans font-medium no-underline';
const webStyle = 'h-full'
const mobileStyle = 'flex h-20';

export default function NavItems({ navItems, isMobile }) {
  return navItems.map((nav, idx) => (
    <Link
      key={idx}
      className={
        isMobile
          ? `${commonStyle} ${mobileBorder} ${mobileStyle}`
          : `${commonStyle} ${idx !== 0 ? webBorder : null} ${webStyle} hidden lg:flex`
      }
      to={nav.src}
    >
      <p>{nav.name}</p>
      <p
        className={`text-default-50 mt-0.5 ${isMobile ? 'text-sm' : 'text-xs'}`}
      >
        {nav.subname.toUpperCase()}
      </p>
    </Link>
  ));
}
