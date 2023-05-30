import { IFile } from '@/lib/notion/products'
import classNames from 'classnames'
import { map } from 'lodash'
import { useRef, useState } from 'react'
/* eslint-disable @next/next/no-img-element */

import Slider, { Settings } from 'react-slick'
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  arrows: false,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function ImageGallery({ data }: { data: IFile[] }) {
  const [currentIdx, setCurrentIdx] = useState(0)

  return (
    <div className="md:mx-0 overflow-hidden">
      <div className="relative z-0 w-full">
        <Slider
          {...settings}
          draggable
          beforeChange={(_, next) => setCurrentIdx(next)}
          customPaging={(i) => (
            <div
              className={classNames(
                'h-2 md:h-3 w-2 md:w-3 rounded-full -mt-6 md:-mt-10',
                {
                  'bg-[#00FF3B]': i === currentIdx,
                  'bg-[#75867E]': i !== currentIdx,
                },
              )}
            />
          )}
        >
          {map(data, (item: IFile, idx) => (
            <div key={idx}>
              <img
                className="object-cover w-full max-h-[60vh]"
                src={item.file.url || '/img/solar-panel.png'}
                alt={item.name || 'solar-panel'}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
