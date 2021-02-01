import React, { useState } from 'react';
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
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={`h-14 flex flex-col my-auto lg:flex-row items-start lg:items-center ${botStyle}`}>
      {navs.map((nav, idx) => (
        <Link
          key={idx}
          className={`flex-1 justify-center items-center ${
            idx !== 0 ? leftStyle : null
          } font-sans no-underline hidden lg:flex`}
          to={nav.src}
        >
          {nav.name}
        </Link>
      ))}
      <button
        className="border-0 bg-transparent w-12 h-12 items-center justify-center p-2 cursor-pointer"
        onClick={() => setNavOpen(!navOpen)}
      >
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      { navOpen ? (
        <div className="flex flex-col w-full bg-white">
          {
            navs.map((nav, idx) => (
              <Link
                key={idx}
                className={`flex-1 justify-center items-center font-sans`}
                to={nav.src}
              >
                {nav.name}
              </Link>
            ))
          }
        </div>
      ) : null}
    </div>
  );
}
