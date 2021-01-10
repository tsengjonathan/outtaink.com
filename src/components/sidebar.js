import React from 'react';
import { Link } from 'gatsby';

export default function Sidebar() {
  return (
    <>
      <div className="w-20" />
      <div className="fixed h-screen w-20 border-0 border-r border-solid border-black">
        <h1 className="writing-mode-vertical text-orientation-sideways absolute transform translate-x-6 mt-8">
          <Link className="shadow-none text-current no-underline" to={`/`}>
            Outtaink: 記錄留學生的故事
          </Link>
        </h1>
      </div>
    </>
  );
}
