import Image from 'next/image'
import bottle from './assets/three_bottle.svg'
import scroll from './assets/three_scroll.svg'
import tag from './assets/three_tag.svg'

const BottleThree = () => {
  return (
    <div className="absolute">
      <div className="absolute top-[610px] left-[530px] w-[420px]">
        <Image src={bottle} alt="Bottle Three Bottle" />
      </div>
      <div className="absolute top-[645px] left-[585px] w-[210px]">
        <Image src={scroll} alt="Bottle Three Scroll" />
      </div>
      <div className="absolute top-[544px] left-[830px] w-[20px]">
        <Image src={tag} alt="Bottle Three Tag" />
      </div>
    </div>
  )
}

export default BottleThree
