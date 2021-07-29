import React from 'react';

export default function FilterButton({ name, selected, onClick }) {
    const border = 'border border-solid border-black rounded-xl'

    const selectedStyles = selected ? 'bg-default-50 text-white' : ''

    return (
        <div onClick={onClick} className={`m-1 py-1 px-4 text-sm font-zh cursor-pointer ${selectedStyles} ${border}`}>
            {name}
        </div>
    )
}
