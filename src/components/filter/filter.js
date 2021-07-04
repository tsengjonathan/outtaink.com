import React from 'react';

import FilterButton from './button';

export default function Filter({ options, filters, handleFilter }) {
    return (
        <div className="flex justify-center mt-4">
            { options.map(option => (
                <FilterButton onClick={() => handleFilter(option)} name={option} key={option} selected={ filters.includes(option) }/>
            ))}
        </div>
    )
}
