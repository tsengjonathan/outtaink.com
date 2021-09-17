import React from 'react'
import { Link } from 'gatsby'

const NavigationItem = ({ to, text, hoverText }) => {
  return (
    <Link className="relative p-0" to={to}>
      <span className='text-xl text-center h-full w-full font-zh'>{text}</span>
    </Link>
  )
}

export default NavigationItem
