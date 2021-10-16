import React from 'react'

import Button from './Button'

type FilterType = {
  options: string[]
  filters: string[]
  handleFilter: (option: string) => void
}

const Filter = ({ options, filters, handleFilter }: FilterType) => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
        { options.map(option => (
            <Button onClick={() => handleFilter(option)} text={option} key={option} selected={ filters.includes(option) }/>
        ))}
    </div>
  )
}

export default Filter
