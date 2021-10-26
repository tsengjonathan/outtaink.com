import React, { FC } from 'react'

import Button from './Button'

type FilterProps = {
  options: Set<string>
  filters: Set<string>
  handleFilter: (option: string) => void
}

const Filter: FC<FilterProps> = ({ options, filters, handleFilter }: FilterProps) => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
        { Array.from(options).map(option => (
            <Button onClick={() => handleFilter(option)} text={option} key={option} selected={ filters.has(option) }/>
        ))}
    </div>
  )
}

export default Filter
