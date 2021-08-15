import React, { FC } from 'react'

export type HeadingProps = {
  name: string
}

const Heading: FC<HeadingProps> = ({ name }) => {
  const typography = 'font-hand text-3xl'
  const border = 'border-2 border-border'
  return (
    <div className={`px-5 py-1 bg-white shadow-heading ${typography} ${border}`}>{name.toUpperCase()}</div>
  )
}

export default Heading
