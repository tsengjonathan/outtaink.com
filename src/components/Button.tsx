import React, { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  text: string | ReactNode
  selected?: boolean
  onClick?: () => void
}

const Button = ({ text, selected = false, onClick }: ButtonProps) => {
    const classes = classNames(
      'm1 py-1 px-4',
      'text-lg text-gray-400',
      'cursor-pointer',
      'transition-colors hover:text-default-50',
      { 'underline text-default-50': selected },
    )

    return (
      <button onClick={onClick} className={classes}>
          {text}
      </button>
    )
}

export default Button
