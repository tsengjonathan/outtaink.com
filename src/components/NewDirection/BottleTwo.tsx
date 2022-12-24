import Image from 'next/image'
import bottle from './assets/two_bottle.svg'

const BottleTwo = () => {
  return (
    <div className="absolute">
      <div className="absolute top-[565px] left-[20px] w-[350px]">
        <Image src={bottle} alt="Bottle Two Bottle" />
      </div>
      <div className="absolute top-[594px] left-[63px] w-[215px]">
        <ScrollTwo />
      </div>
      <div className="absolute top-[502px] left-[300px] w-[20.5px]">
        <TagTwo />
      </div>
    </div>
  )
}

const ScrollTwo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.81 86.12">
    <g>
      <path
        style={{ fill: '#e6f4f4' }}
        d="M280.07,0H18.52C8.28,.19,0,19.39,0,43.06s8.28,42.87,18.52,43.05h0s261.55,0,261.55,0c10.31,0,18.67-19.28,18.67-43.06S290.38,0,280.07,0Z"
      />
      <text
        className="text-xl font-medium translate-x-[40px] translate-y-[50px]"
      >
        (上) 那些年的成长之痛
      </text>
    </g>
  </svg>
)

const TagTwo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.03 216.72">
    <g>
      <rect style={{ fill: '#006862' }} x=".3" y="141.63" width="28.73" height="75.09" />
      <polygon style={{ fill: '#4c9c97' }} points="29.03 141.63 29.03 0 12.74 21.65 0 0 0 141.63 29.03 141.63" />
      <text
        style={{ fill: '#e3f0ef' }}
        className="font-mixed rotate-90 translate-x-[12px] translate-y-[32px]"
      >
        Janet Wang
      </text>
    </g>
  </svg>
)

export default BottleTwo
