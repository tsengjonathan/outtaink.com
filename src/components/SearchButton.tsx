import React, { FC } from 'react'
import classNames from 'classnames'

type SearchButtonProps = {
  readonly className?: string
}

const SearchButton: FC<SearchButtonProps> = ({ className }: SearchButtonProps) => {
  const tooltipText = "Coming Soon!"

  const classes = classNames(className, 'tooltip cursor-pointer')

  return (
    <div data-tip={tooltipText} className={classes} onClick={() => {throw Error('Sentry Test')}}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 md:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
}

export default SearchButton
