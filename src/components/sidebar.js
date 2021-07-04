import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

import DesktopLogo from '../../content/svg/desktop-logo.svg';

export default function Sidebar({ className, changeLanguage }) {
  return (
    <>
      <div className={`${className} w-20`} />
      <div
        className={`${className} flex fixed h-screen w-20 border-0 border-r border-solid border-black`}
      >
        <Link className="shadow-none text-current no-underline" to={`/`}>
          <DesktopLogo className="mt-8 ml-6" />
        </Link>
        <div className="flex flex-grow" />
        <div className="flex w-full h-20 border-0 border-t border-solid border-black items-center justify-center cursor-pointer" onClick={changeLanguage}>
          <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
        </div>
      </div>
    </>
  );
}
