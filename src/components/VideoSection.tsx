import React from 'react'
import { PrismicVideo } from '../types/cms'
import Colon from './Colon'
import Video from './Video'
import VideoCard from './VideoCard'

type VideoSectionProps = {
  videos: PrismicVideo[]
}

const VideoSection = ({ videos }: VideoSectionProps) => {
  const featuredVideo = videos[0]
  const otherVideos = videos.slice(1, 3)

  return (
    <>
      <section className="max-w-screen-lg mx-auto flex-col text-center">
        <h1 className="font-zh text-2xl font-medium mb-8">畢業了，然後呢？</h1>
        <Video video={featuredVideo} />
      </section>
      <section className="max-w-screen-lg mx-auto flex-col mb-16">
        <div className="flex font-mixed items-center mb-6 mx-6 lg:mx-0">
          <h2 className="text-2xl font-medium">Latest Episodes</h2>
          <Colon className="ml-2" />
        </div>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {otherVideos.map(video => <VideoCard video={video} key={video.id} />)}
        </div>
      </section>
    </>
  )
}

export default VideoSection
