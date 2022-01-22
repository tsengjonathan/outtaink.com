import React, { useRef } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import plane from '../../assets/hairline_button_plane.png'
import useIsVisible from '../hooks/useIsVisible'

type HairlineButtonProps = {
  className?: string
  title: string
}

const HairlineButton = ({ className, title }: HairlineButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(ref)

  const planeClasses = classNames(
    'absolute w-14 top-3 right-20',
    'animate-plane origin-bottom-left scale-0'
  )

  const titleClasses = classNames(
    'font-zh font-medium text-2xl absolute',
    '-translate-y-1/2',
    'top-1/2 w-full text-center'
  )

  const divClasses = classNames(
    'relative w-72',
    className,
  )

  return (
    <div className={divClasses} ref={ref}>
      { isVisible && (
        <>
          <svg className='w-52 mx-auto' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 200'>
            <path
              className='animate-draw'
              d='M 3.3 191.9 C 4.7 179.5 12.1 167.8 22.3 160.6 A 43.8 43.8 0 0 1 40 153.1 C 45.8 152.1 53.9 152.7 56 159.3 C 56.7 161.6 56.6 164.2 54.6 165.8 A 5.1 5.1 0 0 1 52.2 166.7 A 7.4 7.4 0 0 1 48.7 166.1 A 9.3 9.3 0 0 1 43.7 161.4 C 42.4 158.4 43 154.6 44.1 151.5 C 46.5 144.8 51.9 138.9 57.1 134.1 A 68.2 68.2 0 0 1 74.8 122.3 C 81.3 119.3 88.9 116.8 96.1 117.3 A 14.2 14.2 0 0 1 105.3 121.1 A 9.9 9.9 0 0 1 108.6 128.7 A 5.5 5.5 0 0 1 104.8 133.6 A 6.3 6.3 0 0 1 98.5 132.4 A 5.8 5.8 0 0 1 97.5 131.2 C 97.1 130.7 96.8 130.2 96.5 129.7 C 94.6 126.5 94.4 126 94.2 125.6 C 94 125 93.9 124.8 93.8 124.5 A 21.8 21.8 0 0 1 92.9 121.7 C 92.8 121.2 92.8 120.8 92.7 120.3 L 92.6 119.4 A 22.4 22.4 0 0 1 92.6 116.7 A 25.6 25.6 0 0 1 93.4 111.7 C 93.5 111.3 93.7 110.8 93.8 110.4 A 26.9 26.9 0 0 1 95.4 106.9 C 95.9 106 96.4 105.1 97.067 104.14 C 97.3 103.8 97.6 103.4 97.9 103 C 104.6 94.3 112.4 88.7 120.7 83.7 A 196.5 196.5 0 0 1 150.7 69 A 248.2 248.2 0 0 1 181.2 59.2 Q 184.4 58.4 187.6 57.7'
              fill='none'
              stroke='#add0ce'
              strokeWidth='6'
              strokeDasharray='770'
              strokeDashoffset='770'
              strokeLinecap='round'
            />
          </svg>
          <div className={planeClasses}>
            <Image
              src={plane}
              width={614}
              height={426}
              alt='HairlineButton Plane'
            />
          </div>
          <h1 className={titleClasses}>
            {title}
          </h1>
        </>
      )}
    </div>
  )
}

export default HairlineButton
