'use client'

import { useTheme } from 'next-themes'
import { useMemo, useEffect, useState, useRef } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { CiSaveDown1 } from 'react-icons/ci'
import Link from 'next/link'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
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

  let { resolvedTheme } = useTheme()

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

    // Call updateWidth initially and on every resize
    updateWidth()
    window.addEventListener('resize', updateWidth)

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('resize', updateWidth)
  }, [containerRef])

  const pdfFile =
    resolvedTheme === 'dark'
      ? '/Resume_2023_v2_dark.pdf'
      : '/Resume_2023_v2.pdf'

  console.log(containerWidth)

  return (
    <div className=" mt-12 flex justify-center sm:px-8">
      <div
        ref={containerRef}
        className="flex w-full max-w-7xl flex-col lg:px-8"
      >
        <Link
          href="Resume_2023_v2.pdf"
          className="z-10 self-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiSaveDown1 className=" h-7 w-7 hover:text-teal-500 " />
        </Link>
        <Document
          file={pdfFile}
          loading={''}
          className="-mt-4 sm:-mt-8 dark:bg-black"
          options={options}
        >
          <Page pageNumber={1} width={containerWidth} loading={''} />
        </Document>
      </div>
    </div>
  )
}
