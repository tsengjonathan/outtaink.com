import React from 'react';
import { Link } from 'gatsby';

export default function Header({title}) {
  return (
    <h3 className="my-0">
      <Link
        className="shadow-none text-current"
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )
}