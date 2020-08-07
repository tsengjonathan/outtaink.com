import React from 'react';
import Header from '../components/header';

const Layout = ({ location, title, children }) => {
  return (
    <div className="px-8 py-4 flex flex-col min-h-screen">
      <Header title={title} />
      <main className="flex flex-1">{children}</main>
      <footer>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
