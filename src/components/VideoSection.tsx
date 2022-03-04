import React from 'react'
import { PrismicVideo } from '../types/cms'
import Video from './Video'

type VideoSectionProps = {
  videos: PrismicVideo[]
}

const VideoSection = ({ videos }: VideoSectionProps) => {
  const featuredVideo = videos[0]

  return (
    <section className="max-w-screen-lg mx-auto flex">
      <Video video={featuredVideo} />
    </section>
  )
}

export default VideoSection
