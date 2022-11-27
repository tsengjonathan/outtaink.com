import React from 'react'
import classNames from 'classnames'

type Props = {
  readonly className?: string;
}

export const Logo = ({ className }: Props) => {
  const classes = classNames(className, 'h-6', 'md:h-8')
  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329.71 52.51">
      <path className="cls-1" d="M0 27.51c0-14.21 12.09-25 28.1-25s28.11 10.78 28.11 25-12.09 25-28.11 25S0 41.72 0 27.51zm46.43 0c0-8.12-7.93-14.21-18.33-14.21S9.78 19.39 9.78 27.51s7.93 14.21 18.32 14.21 18.33-6.09 18.33-14.21zM96.64 16v35.67h-8.85v-7.22a14.87 14.87 0 01-13.63 8.06c-8.55 0-14.32-5.32-14.32-13.38V16h8.77v20.05c0 3.71 3.7 6.23 9.32 6.23 5.85 0 9.86-2.59 9.86-6.37V16zM118.66 26v12.08c0 2.38 1.62 3.5 5 3.5h5.62v10.09h-6.62c-8.47 0-12.86-3.71-12.86-11.14V26h-7.62V16h7.62V7.7l8.85-2.24V16h10.63v10zM149.31 26v12.08c0 2.38 1.62 3.5 5 3.5h5.62v10.09h-6.62c-8.47 0-12.86-3.71-12.86-11.14V26h-7.63V16h7.63V7.7l8.85-2.24V16h10.63v10zM205.06 16v35.67h-8.78v-7.15a16.1 16.1 0 01-14.32 8c-10.78 0-18.94-8.06-18.94-18.7s8.16-18.7 18.98-18.7a16.11 16.11 0 0114.32 8V16zm-8.78 17.85c0-4.83-5.16-8.47-12.09-8.47s-12 3.64-12 8.47 5.08 8.47 12 8.47 12.09-3.68 12.09-8.51zM207.91 5.6C207.91 2.45 211 0 215 0s7.16 2.45 7.16 5.6-3.08 5.67-7.16 5.67-7.09-2.45-7.09-5.67zM210.6 16h8.78v35.67h-8.78zM263.12 28.7v23h-8.78V32.13c0-4.13-3.93-6.79-10-6.79-6.31 0-10.62 2.73-10.62 6.93v19.4h-8.78V16h8.78v7.49c3-5.46 8-8.33 14.39-8.33 9-.04 15.01 5.35 15.01 13.54zM283.14 37.8l-5.69 3.78v10.09h-8.78V1.26h8.78v27h1.69L292.38 16h14.71l-16.94 16.2 17.4 19.47h-11.39zM312.7 22.75c0-3.85 3.62-6.79 8.47-6.79s8.54 2.94 8.54 6.79-3.62 6.86-8.54 6.86-8.47-2.94-8.47-6.86zM312.7 44.87c0-3.85 3.62-6.86 8.47-6.86s8.54 3 8.54 6.86-3.62 6.8-8.54 6.8-8.47-2.94-8.47-6.8z"/>
    </svg>
  )
}

export const GitHub = ({ className }: Props) => (
  <svg className={className} width="121px" height="119px" viewBox="0 0 121 119" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="GitHub-Mark" transform="translate(-290.000000, -282.000000)" fill="#FFFFFE">
              <path d="M350.609,282.446 C317.262,282.446 290.221,309.481 290.221,342.833 C290.221,369.514 307.524,392.15 331.518,400.135 C334.536,400.694 335.644,398.825 335.644,397.23 C335.644,395.79 335.588,391.033 335.562,385.987 C318.762,389.64 315.217,378.862 315.217,378.862 C312.47,371.882 308.512,370.026 308.512,370.026 C303.033,366.278 308.925,366.355 308.925,366.355 C314.989,366.78 318.182,372.578 318.182,372.578 C323.568,381.81 332.309,379.141 335.755,377.598 C336.297,373.696 337.862,371.03 339.589,369.523 C326.176,367.996 312.076,362.818 312.076,339.679 C312.076,333.086 314.435,327.699 318.298,323.47 C317.671,321.948 315.604,315.807 318.883,307.489 C318.883,307.489 323.954,305.866 335.494,313.679 C340.311,312.341 345.477,311.67 350.609,311.647 C355.741,311.67 360.911,312.341 365.737,313.679 C377.263,305.866 382.327,307.489 382.327,307.489 C385.614,315.807 383.546,321.948 382.919,323.47 C386.791,327.699 389.134,333.086 389.134,339.679 C389.134,362.873 375.007,367.98 361.56,369.475 C363.726,371.349 365.656,375.024 365.656,380.658 C365.656,388.737 365.586,395.24 365.586,397.23 C365.586,398.837 366.673,400.72 369.734,400.127 C393.715,392.133 410.996,369.505 410.996,342.833 C410.996,309.481 383.959,282.446 350.609,282.446" id="Fill-52"></path>
          </g>
      </g>
  </svg>
)

export const Instagram = ({ className }: Props) => (
  <svg className={className} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
    <path className="fill-white" d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)" />
  </svg>
)