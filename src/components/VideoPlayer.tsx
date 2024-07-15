'use client'

import { useState, useRef } from 'react'

import clsx from 'clsx'

const videoMap: { [key: string]: string } = {
  readerDemo: '/videos/reader-demo.mp4',
  openBookDemo: '/videos/open-book-demo.mp4',
  uploadBookDemo: '/videos/upload-book-demo.mp4',
  cardHover: '/videos/card-hover.mp4',
  mdDemo: '/videos/md-demo.mp4',
  mdDemo2: '/videos/md-demo2.mp4',
}

const VideoPlayer = ({
  videoKey,
  large,
}: {
  videoKey: string
  large?: boolean
}) => {
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
    <div
      onMouseDown={togglePlayPause}
      className={clsx(
        'group relative cursor-pointer',
        large ? 'max-w-3xl' : 'max-w-xl',
      )}
    >
      <video
        ref={videoRef}
        className={clsx('w-full rounded-xl', { 'opacity-75': !isPlaying })}
        src={videoSrc}
        style={{ clipPath: 'inset(2px 0px 2px 0px)' }}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Demo video"
      />
      <div className="pointer-events-none absolute inset-0 m-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
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
