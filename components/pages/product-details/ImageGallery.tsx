import { IFile } from '@/lib/notion/products'
import classNames from 'classnames'
import { useRef, useState } from 'react'
/* eslint-disable @next/next/no-img-element */

import Slider, { Settings } from 'react-slick'
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function ImageGallery({ data }: { data: IFile[] }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const ref = useRef<Slider>(null)

  return (
    <div className="relative max-w-3xl mx-auto space-y-4 border border-gray-400 rounded-lg bg-white overflow-hidden">
      <Slider
        {...settings}
        ref={ref}
        beforeChange={(_, next) => setCurrentIdx(next)}
        dotsClass="mt-12 mb-3 md:px-6"
        appendDots={(dots) => (
          <div className="w-full">
            <ul className="flex items-center justify-center gap-2 w-full z-20">
              {(dots as []).map((dot: any, idx: number) => (
                <li
                  onClick={() => {
                    setCurrentIdx(idx)
                    ref.current?.slickGoTo(idx)
                  }}
                  key={idx}
                  className={classNames(
                    'border md:border-2 rounded-lg overflow-hidden md:bg-white', // desktop
                    'h-2 md:h-auto w-2 md:w-auto rounded-full -mt-6 md:-mt-10', // mobile
                    {
                      'border-green-dark bg-green-dark': idx === currentIdx,
                      'border-gray-400 bg-[#75867E]': idx !== currentIdx,
                    },
                  )}
                >
                  <img
                    src={data[idx]?.file.url}
                    className="hidden md:block w-12 h-12 object-contain"
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      >
        {data.map((item) => (
          <div
            key={item.file.url}
            className="relative z-0 w-full h-full bg-white overflow-hidden rounded-lg outline-none"
          >
            <img
              className="object-contain max-w-96 max-h-96 mx-auto rounded-lg outline-none"
              src={item.file.url}
              alt="solar-panel"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
