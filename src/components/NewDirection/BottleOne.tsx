import Image from 'next/image'
import bottle from './assets/one_bottle.svg'

const BottleOne = () => {
  return (
    <div className="absolute">
      <div className="absolute top-[370px] left-[540px] w-[350px]">
        <Image src={bottle} alt="Bottle One Bottle" />
      </div>
      <div className="absolute top-[425px] left-[595px] w-[170px]">
        <ScrollOne />
      </div>
      <div className="absolute top-[325px] left-[785px] w-[20.5px]">
        <TagOne />
      </div>
    </div>
  )
}

const ScrollOne = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.57 74.59">
    <g>
      <path
        style={{ fill: '#e6f4f4' }}
        d="M234.4,0H7.87C3.51,.33,0,16.89,0,37.3s3.51,36.97,7.87,37.28h0s226.53,.01,226.53,.01c8.93,0,16.17-16.7,16.17-37.3S243.33,0,234.4,0Z"
      />
        <text className="text-lg font-medium translate-x-[24px] translate-y-[44px]">
          留學生是孩子也相對脆弱
      </text>
    </g>
  </svg>
)

const TagOne = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.03 218.72">
    <g>
      <rect style={{ fill: '#006862' }} x=".3" y="141.63" width="28.73" height="77.09" />
      <polygon style={{ fill: '#4c9c97' }} points="29.03 141.63 29.03 0 12.74 21.65 0 0 0 141.63 29.03 141.63" />
      <text
        style={{ fill: '#e3f0ef' }}
        className="font-mixed rotate-90 translate-x-[12px] translate-y-[36px]"
        transform="translate(8 31.18)"
      >
          Janet Wang
      </text>
    </g>
  </svg>
)

export default BottleOne
