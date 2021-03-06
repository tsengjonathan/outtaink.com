import React from 'react';
import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-sidebar">
      <Sidebar className="hidden lg:block" />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
