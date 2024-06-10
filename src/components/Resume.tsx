'use client'

import { useTheme } from 'next-themes'
import { useMemo, useEffect, useState, useRef } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { CiSaveDown1 } from 'react-icons/ci'
import Link from 'next/link'
// @ts-ignore
import resume from '@/app/resume/Resume_2024.pdf'
// @ts-ignore
import resumeDark from '@/app/resume/Resume_2024_dark.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString()

export default function Resume() {
  const options = useMemo(
    () => ({
      cMapUrl: '/cmaps/',
      standardFontDataUrl: '/standard_fonts/',
    }),
    [],
  )

  const { resolvedTheme } = useTheme()

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const style = window.getComputedStyle(containerRef.current)
        const contentWidth =
          containerRef.current.offsetWidth -
          (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight))
        setContainerWidth(contentWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [containerRef])

  return (
    <div className=" mt-12 flex justify-center sm:px-8">
      <div
        ref={containerRef}
        className="flex w-full max-w-7xl flex-col lg:px-8"
      >
        <Link
          href={resume}
          className="z-10 self-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiSaveDown1 className=" h-7 w-7 hover:text-teal-500 " />
        </Link>
        <Document
          file={resolvedTheme === 'dark' ? resumeDark : resume}
          loading={''}
          className="-mt-2 sm:-mt-4 lg:-mt-5 dark:bg-black"
          options={options}
        >
          <Page pageNumber={1} width={containerWidth} loading={''} />
        </Document>
      </div>
    </div>
  )
}
