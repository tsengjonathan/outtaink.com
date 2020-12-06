import React from 'react';
import Header from '../components/header';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      <main className="flex flex-1 h-screen">{children}</main>
    </div>
  );
};

export default Layout;
