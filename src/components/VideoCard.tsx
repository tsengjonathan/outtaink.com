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
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="lg" fullWidth>
        <DialogContent className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            id="player"
            src={url}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default VideoCard
