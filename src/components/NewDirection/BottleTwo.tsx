import Image from 'next/image'
import bottle from './assets/two_bottle.svg'
import scroll from './assets/two_scroll.svg'
import tag from './assets/two_tag.svg'

const BottleTwo = () => {
  return (
    <div className="absolute">
      <div className="absolute top-[565px] left-[20px] w-[350px]">
        <Image src={bottle} alt="Bottle Two Bottle" />
      </div>
      <div className="absolute top-[594px] left-[63px] w-[215px]">
        <Image src={scroll} alt="Bottle Two Scroll" />
      </div>
      <div className="absolute top-[502px] left-[300px] w-[20.5px]">
        <Image src={tag} alt="Bottle Two Tag" />
      </div>
    </div>
  )
}

export default BottleTwo
