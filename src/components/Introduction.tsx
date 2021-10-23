import React from 'react'

import LearnMore from './LearnMore'
import { introduction } from '../utils/constants'

// TODO: Replace SVG with @heroicons/react once https://github.com/tailwindlabs/heroicons/pull/281 is merged
const ArrowCircleDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 mx-4 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="white">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
)

const Introduction = () => {
  return (
    <section className="bg-default-200 py-20 mt-0 mb-6 md:my-12">
      <div className="flex flex-col items-start md:items-center max-w-screen-md mx-6 md:mx-auto">
        <div className="flex items-center">
          <ArrowCircleDownIcon />
          <h1 className="text-white text-2xl font-en font-bold tracking-tight w-4/5 md:w-full">A Voice for Students Studying Abroad</h1>
          <ArrowCircleDownIcon />
        </div>
        <p className="text-white text-xl font-zh font-light tracking-wider mt-3 md:mt-6">{introduction}</p>
        <LearnMore url="/about" text="了解我們" color="white" className="self-start mt-3 md:hidden text-lg" />
      </div>
    </section>
  )
}

export default Introduction
