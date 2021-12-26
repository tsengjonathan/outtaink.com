import React, { Dispatch, FC, SetStateAction } from 'react'

type DrawerButtonProps = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

const DrawerButton: FC<DrawerButtonProps> = ({ setDrawerOpen }: DrawerButtonProps) => {
  return (
    <label className="cursor-pointer" onClick={() => setDrawerOpen(true)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 md:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
  )
}

export default DrawerButton
