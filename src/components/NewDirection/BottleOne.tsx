import Image from 'next/image'
import bottle from './assets/one_bottle.svg'
import scroll from './assets/one_scroll.svg'
import tag from './assets/one_tag.svg'

const BottleOne = () => {
  return (
    <div className="absolute">
      <div className="absolute top-[370px] left-[540px] w-[350px]">
        <Image src={bottle} alt="Bottle One Bottle" />
      </div>
      <div className="absolute top-[425px] left-[595px] w-[170px]">
        <Image src={scroll} alt="Bottle One Scroll" />
      </div>
      <div className="absolute top-[325px] left-[785px] w-[20.5px]">
        <Image src={tag} alt="Bottle One Tag" />
      </div>
    </div>
  )
}

export default BottleOne
