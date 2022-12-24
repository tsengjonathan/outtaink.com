import Image from 'next/image'
import bottle from './assets/three_bottle.svg'
import tag from './assets/three_tag.svg'

const BottleThree = () => {
  return (
    <div className="absolute">
      <div className="absolute top-[610px] left-[530px] w-[420px]">
        <Image src={bottle} alt="Bottle Three Bottle" />
      </div>
      <div className="absolute top-[645px] left-[585px] w-[210px]">
        <ScrollThree />
      </div>
      <div className="absolute top-[544px] left-[830px] w-[20px]">
        <Image src={tag} alt="Bottle Three Tag" />
      </div>
    </div>
  )
}

const ScrollThree = () => (
  <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.74 75">
    <path
      style={{ fill: '#e6f4f4' }}
      d="M280.07,0H18.52C8.28,.16,0,16.89,0,37.5s8.28,37.34,18.52,37.49h0s261.55,0,261.55,0c10.31,0,18.67-16.79,18.67-37.5S290.38,0,280.07,0Z"
    />
    <text className="text-xl font-medium translate-x-[30px] translate-y-[44px]">
      留學生是孩子也相對脆弱
    </text>
  </svg >
)

export default BottleThree
