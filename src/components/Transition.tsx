import React, { FC, ReactNode } from 'react'
import {
  Transition as ReactTransition,
  TransitionGroup,
} from 'react-transition-group'

const timeout = 250
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

type TransitionProps = {
  children: ReactNode
  location: Location
}

const Transition: FC<TransitionProps> = ({ children, location }: TransitionProps) => {
    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
}

export default Transition
