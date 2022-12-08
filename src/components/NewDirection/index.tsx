import Image from 'next/image'
import background from './assets/background.svg'
import BottleOne from './BottleOne'
import BottleThree from './BottleThree'
import BottleTwo from './BottleTwo'
import MainBottle from './MainBottle'

const NewDirection = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto my-16">
      <Image className="rounded-lg" src={background} alt="New Direction Background" />
      <div className="absolute top-0 left-0 h-full w-full">
        <MainBottle />
        <BottleOne />
        <BottleTwo />
        <BottleThree />
      </div>
    </div>
  )
}

export default NewDirection
