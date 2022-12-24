import Image from 'next/image'
import bottle from './assets/main_bottle.svg'

const MainBottle = () => {
  return (
    <div className="absolute">
      <div className="absolute top-[128px] left-[53px] w-[475px]">
        <Image src={bottle} alt="Main Bottle" />
      </div>
      <div className="absolute top-[277px] left-[87px] w-[290px]">
        <MainScroll />
      </div>
      <div className="absolute top-[121px] left-[310px] w-[120px]">
        <MainTag />
      </div>
    </div>
  )
}

const MainScroll = () => (
  <svg version="1.1" id="Layer_2_00000044891579685865579030000017928351869556311733_" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 397.8 238.9">
    <g>
      <path
        style={{ fill: '#E6F4F4' }}
        d="M390,44C378.6,15,358.6-4.4,345.4,0.8c0,0,0,0,0,0l0,0l-334.7,132l0,0c-13,5.4-14.4,33-3,62
        c11.4,28.9,31.3,48.2,44.5,43.3l0,0l0.1,0c0,0,0.1,0,0.1,0s0.1,0,0.1,0l334.4-131.9l0,0c0,0,0,0,0,0
        C400.1,100.9,401.5,73.1,390,44z"
      />
      <text
        className="font-mixed text-2xl w-full text-center translate-y-[185px] -rotate-[20deg] translate-x-[50px]"
      >
        學會把每個社團都玩得很認真
      </text>
    </g>
  </svg>

)

const MainTag = () => (
  <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.95 199.53">
    <g id="Layer_1-2">
      <polygon
        style={{ fill: '#006862' }}
        points="87.53 129.21 142.33 199.53 164.95 181.82 110.15 111.5 87.53 129.21"
      />
      <polygon
        style={{ fill: '#4c9c97' }}
        points="110.15 111.5 22.86 0 23.37 27.09 0 17.89 87.29 129.39 110.15 111.5"
      />
      <text
        style={{ fill: '#e3f0ef' }}
        className="font-mixed rotate-[51.94deg] translate-x-[30px] translate-y-[40px]"
      >
        Janet Wang
      </text>
    </g>
  </svg>
)

export default MainBottle
