import React from 'react';
import { Link } from 'gatsby';

const navs = [
  { name: '精選故事', src: '/' },
  { name: '分類編目', src: '/' },
  { name: '快問快答', src: '/' },
  { name: '關於', src: '/' },
];

const borderStyle = 'border-0 border-gray-500 border-solid';
const leftStyle = `${borderStyle} border-l`
const botStyle = `${borderStyle} border-b`

export default function Header() {
  return (
    <>
      <div className={`h-14 flex ${botStyle}`}>
        {navs.map((nav, idx) => (
          <Link
            className={`flex flex-1 justify-center items-center ${
              idx !== 0 ? leftStyle : null
            }`}
            to={nav.src}
          >
            {nav.name}
          </Link>
        ))}
      </div>
      <div className={`h-14 flex justify-center items-center ${botStyle}`}>
        最新故事
      </div>
    </>
  );
}
