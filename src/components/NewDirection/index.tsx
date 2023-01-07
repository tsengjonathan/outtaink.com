import Image from 'next/image'
import { PrismicArticle } from '../../types/cms'
import background from './assets/background.svg'
import BottleOne from './BottleOne'
import BottleThree from './BottleThree'
import BottleTwo from './BottleTwo'
import MainBottle from './MainBottle'

type Props = {
  articles: PrismicArticle[]
}

const NewDirection = ({ articles }: Props) => {
  return (
    <div className="hidden md:block relative max-w-screen-lg mx-auto my-16">
      <Image className="rounded-lg" src={background} alt="New Direction Background" />
      <div className="absolute top-0 left-0 h-full w-full">
        <MainBottle article={articles[0]} />
        <BottleOne article={articles[1]} />
        <BottleTwo article={articles[2]} />
        <BottleThree article={articles[3]} />
      </div>
    </div>
  )
}

export default NewDirection
