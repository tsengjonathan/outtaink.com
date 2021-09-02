import React from 'react'
import classnames from 'classnames'

type ColonType = {
  width?: number,
  className?: string
}

const Colon = ({ width = 12, className }: ColonType) => {
  const classes = classnames("colon", className)
  return (
    <div className={classes}>
      <svg viewBox="0 0 12 24" width={width} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <g fill="#231F20">
          <path d="M0 4.5324C0 1.9614 2.4166 0 5.6552 0 8.9435 0 11.36 1.9614 11.36 4.5324c0 2.6179-2.4166 4.5793-5.7048 4.5793C2.4166 9.1034241 0 7.1503 0 4.5324zM0 19.31c0-2.571 2.4166-4.5821 5.6552-4.5821 3.2883 0 5.7048 2.011 5.7048 4.5821s-2.4166 4.5241-5.7048 4.5241C2.4166 23.8341 0 21.87 0 19.31z"/>
        </g>
      </svg>
    </div>
  )
}

export default Colon
