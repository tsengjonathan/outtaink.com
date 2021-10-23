import React from 'react'

export type HeadingProps = {
  name: string
}

const Heading = ({ name }: HeadingProps) => {
  const typography = 'font-hand text-3xl'
  const border = 'border-2 border-border'
  return (
    <div className={`px-5 py-1 bg-white shadow-heading ${typography} ${border}`}>{name.toUpperCase()}</div>
  )
}

export default Heading
