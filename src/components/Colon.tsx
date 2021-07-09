import React from 'react';

export type ColonProps = {
  readonly className?: string;
  readonly fill?: string;
}

// eslint-disable-next-line no-empty-pattern
const Colon = ({ className, fill = '#00524D'}: ColonProps) => {
  return (
    <svg className={className} width="12" height="24" xmlns="http://www.w3.org/2000/svg">
      <g fill={fill}>
        <path d="M0 4.5324C0 1.9614 2.4166 0 5.6552 0 8.9435 0 11.36 1.9614 11.36 4.5324c0 2.6179-2.4166 4.5793-5.7048 4.5793C2.4166 9.1034241 0 7.1503 0 4.5324zM0 19.31c0-2.571 2.4166-4.5821 5.6552-4.5821 3.2883 0 5.7048 2.011 5.7048 4.5821s-2.4166 4.5241-5.7048 4.5241C2.4166 23.8341 0 21.87 0 19.31z"/>
      </g>
    </svg>
  )
}

export default Colon;
