import React from 'react';
import Header from '../components/header';

const Layout = ({ location, title, children }) => {
  return (
    <div className="px-8 py-4 flex flex-col min-h-screen">
      <Header title={title} />
      <main className="flex flex-1">{children}</main>
    </div>
  );
};

export default Layout;
