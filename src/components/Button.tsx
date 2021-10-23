import React, { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  text: string | ReactNode
  selected?: boolean
  onClick?: () => void
}

const Button = ({ text, selected = false, onClick }: ButtonProps) => {
    const classes = classNames(
      'mt-1 mx-4 py-1 px-1',
      'text-lg text-gray-400',
      'cursor-pointer',
      'border-b border-transparent',
      'transition-colors hover:text-default-200',
      { 'border-black text-default-200': selected },
    )

    return (
      <button onClick={onClick} className={classes}>
          {text}
      </button>
    )
}

export default Button
