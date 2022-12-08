import Image from 'next/image'
import bottle from './assets/main_bottle.svg'
import scroll from './assets/main_scroll.svg'
import tag from './assets/main_tag.svg'

const MainBottle = () => {
  return (
    <div className="absolute">
      <div className="absolute top-[128px] left-[53px] w-[475px]">
        <Image src={bottle} alt="Main Bottle" />
      </div>
      <div className="absolute top-[277px] left-[87px] w-[290px]">
        <Image src={scroll} alt="Main Scroll" />
      </div>
      <div className="absolute top-[121px] left-[310px] w-[120px]">
        <Image src={tag} alt="Main Tag" />
      </div>
    </div>
  )
}

export default MainBottle
