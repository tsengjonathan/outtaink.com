import React from 'react';
import { Link } from 'gatsby';

import DesktopLogo from '../../content/svg/desktop-logo.svg';

export default function Sidebar({ className }) {
  return (
    <>
      <div className={`${className} w-20`} />
      <div
        className={`${className} fixed h-screen w-20 border-0 border-r border-solid border-black`}
      >
        <Link className="shadow-none text-current no-underline" to={`/`}>
          <DesktopLogo className="mt-8 ml-6" />
        </Link>
      </div>
    </>
  );
}
