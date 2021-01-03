import React from 'react';
import Sidebar from './sidebar';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-sidebar">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 h-screen">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
