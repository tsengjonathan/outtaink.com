import React from 'react'

type DrawerButtonProps = {
  toggleId?: string
}

const DrawerButton = ({ toggleId }: DrawerButtonProps) => {
  return (
    <label className="cursor-pointer" htmlFor={toggleId}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 md:h-9 drawer-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
  )
}

export default DrawerButton
