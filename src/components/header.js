import React from 'react';
import { Link } from 'gatsby';

export default function Header({title}) {
  return (
    <h3 className="my-0">
      <Link
        className="shadow-none text-current no-underline"
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )
}