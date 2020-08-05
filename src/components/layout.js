import React from 'react';
import Header from '../components/header';

const Layout = ({ location, title, children }) => {
  return (
    <div className="px-8 py-4">
      <Header title={title} />
      <main className="mx-auto my-8 max-w-2xl">{children}</main>
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
