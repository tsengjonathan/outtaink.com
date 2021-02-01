import React from 'react';
import { Link } from 'gatsby';

const navs = [
  { name: '無墨精選集', src: '/' },
  { name: '他們的故事', src: '/' },
  { name: '回憶留言板', src: '/' },
  { name: '關於', src: '/' },
];

const borderStyle = 'border-0 border-gray-500 border-solid';
const leftStyle = `${borderStyle} border-l`;
const botStyle = `${borderStyle} border-b`;

export default function Header() {
  return (
    <div className={`h-14 flex ${botStyle}`}>
      {navs.map((nav, idx) => (
        <Link
          key={idx}
          className={`flex flex-1 justify-center items-center ${
            idx !== 0 ? leftStyle : null
          } font-sans no-underline`}
          to={nav.src}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
}
