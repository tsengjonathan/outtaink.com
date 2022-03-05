import React from 'react'
import { PrismicVideo } from '../types/cms'
import Colon from './Colon'

type VideoProps = {
  video: PrismicVideo
}

const Video = ({ video }: VideoProps) => {
  const { data: { name, title, description, url } } = video

  return (
    <div className="w-full mb-10">
      <div className="relative">
        <div className="relative z-10 overflow-hidden pt-[56.25%] mx-6">
            <iframe
              className="absolute inset-0 w-full h-full"
              id="player"
              src={url}
            />
        </div>        
        <div className="h-12 bg-white absolute right-0 bottom-0 w-11/12" />
      </div>
      <div className="flex flex-col ml-12 px-8 pb-4 pt-3 justify-end bg-white">
        <div className="flex items-center mb-2">
          <h1 className="text-2xl font-mixed font-medium mr-2">{name}</h1>
          <Colon />
          <h1 className="text-2xl font-mixed font-medium ml-2">{title}</h1>
        </div>
        <p className="font-mixed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Video
