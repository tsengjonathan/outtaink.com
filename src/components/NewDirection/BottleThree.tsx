import Image from 'next/image'
import Link from 'next/link'
import { PrismicArticle } from '../../types/cms'
import bottle from './assets/three_bottle.svg'

type Props = {
  article: PrismicArticle
}

const BottleThree = ({ article }: Props) => {
  const { data: { title, name }, url } = article

  return (
    <Link href={url}>
      <a className="absolute">
        <div className="absolute top-[610px] left-[530px] w-[420px]">
          <Image src={bottle} alt="Bottle Three Bottle" />
        </div>
        <div className="absolute top-[645px] left-[585px] w-[210px]">
          <ScrollThree title={title.map(heading => heading.text).join('')} />
        </div>
        <div className="absolute top-[544px] left-[830px] w-[20px]">
          <TagThree author={name} />
        </div>
      </a>
    </Link>
  )
}

const ScrollThree = ({ title }: { title: string }) => (
  <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.74 75">
    <path
      style={{ fill: '#e6f4f4' }}
      d="M280.07,0H18.52C8.28,.16,0,16.89,0,37.5s8.28,37.34,18.52,37.49h0s261.55,0,261.55,0c10.31,0,18.67-16.79,18.67-37.5S290.38,0,280.07,0Z"
    />
    <text className="text-xl font-medium translate-x-[30px] translate-y-[44px]">
      {title}
    </text>
  </svg >
)

const TagThree = ({ author }: { author: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.03 233.72">
    <g>
      <rect style={{ fill: '#006862' }} x=".3" y="141.63" width="28.73" height="92.09" />
      <polygon style={{ fill: '#4c9c97' }} points="29.03 141.63 29.03 0 12.74 21.65 0 0 0 141.63 29.03 141.63" />
      <text
        className="font-mixed rotate-90 translate-x-[12px] translate-y-[32px]"
        style={{ fill: '#e3f0ef' }}
      >
        {author}
      </text>
    </g>
  </svg>
)

export default BottleThree
