import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Dialog from '@mui/material/Dialog'

import DialogContent from '@mui/material/DialogContent'
import { PrismicVideo } from '../types/cms'
import Colon from './Colon'

type VideoCardProps = {
  video: PrismicVideo
}

const VideoCard: FC<VideoCardProps> = ({ video }: VideoCardProps) => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const {
    data: {
      name,
      description,
      title,
      cover,
      url
    }
  } = video

  const imageClasses = classNames(
    'relative',
  )

  const wrapperClasses = classNames(
    'bg-white p-5 mx-6 break-inside-avoid drop-shadow rounded',
    'md:mx-0 md:mb-10',
    'md:hover:scale-105 transition-transform duration-300',
    'cursor-pointer'
  )

  return (
    <>
      <div className={wrapperClasses} onClick={() => setIsOpen(!isOpen)}>
        <div className={imageClasses}>
          <Image
            src={cover.url}
            alt={cover.alt}
            layout="responsive"
            objectFit="cover"
            height={cover.dimensions.height}
            width={cover.dimensions.width}
          />
        </div>
        <div className="mt-3 md:mt-4 flex items-center">
          <h1 className="font-mixed font-medium text-lg md:text-xl">{name}</h1>
          <Colon width={8} className="mx-2" />
          <h1 className="font-mixed font-medium text-lg md:text-xl">{title}</h1>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          className: 'bg-transparent',
          elevation: 0
        }}
      >
        <div className="w-full">
          <div className="relative">
            <div className="lg:mr-24 relative z-10">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  id="player"
                  src={url}
                />
              </div>
            </div>
            <div className="bg-white w-full h-10 absolute right-0 bottom-0 rounded-t hidden lg:block" />
          </div>
          <div className="bg-white px-4 lg:px-12 py-4 lg:ml-24">
            <div className="flex items-center">
              <h1 className="font-mixed font-medium text-lg md:text-xl">{name}</h1>
              <Colon width={8} className="mx-2" />
              <h1 className="font-mixed font-medium text-lg md:text-xl">{title}</h1>
            </div>
            <p className="font-zh my-2 lg:my-0 text-sm lg:text-base">{description}</p>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default VideoCard
