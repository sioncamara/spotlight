'use client'

import { useState, useRef } from 'react'
// @ts-ignore
import readerDemo from '@/app/projects/flow-reader/reader-demo.mov'
// @ts-ignore
import cardHover from '@/app/projects/portfolio/card-hover.mov'

const videoMap: { [key: string]: string } = {
  readerDemo,
  cardHover,
}



const VideoPlayer = ({ videoKey }: { videoKey: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const videoSrc = videoMap[videoKey]
  
  const togglePlayPause = () => {
    if (videoRef?.current?.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current?.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="group relative max-w-xl">
      <video
        ref={videoRef}
        className="w-full rounded-xl"
        src={videoSrc}
        style={{ clipPath: 'inset(0px 0px 2px 0px)' }}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Demo video"
      />
      <div
        onMouseDown={togglePlayPause}
        className="absolute inset-0 m-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isPlaying ? (
            <>
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </>
          ) : (
            <polygon points="5 3 19 12 5 21 5 3" />
          )}
        </svg>
      </div>
    </div>
  )
}

export default VideoPlayer
