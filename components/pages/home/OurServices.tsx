/* eslint-disable @next/next/no-img-element */

import LogoLabel from '@/components/LogoLabel'
import Image from 'next/image'

import Slider, { Settings } from 'react-slick'
import cls from 'classnames'
import { useRef, useState } from 'react'
import Link from 'next/link'
import NotionRichText from '@/components/NotionRichtext'

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function OurServices({
  data,
}: {
  data: Array<{
    id: string
    photo: string
    title: any
    content: any
    cta?: string
    url?: string
  }>
}) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const ref = useRef<Slider>(null)

  return (
    <div
      id="our-services"
      className="relative max-w-6xl px-0 md:px-6 lg:px-12 mx-auto space-y-4 overflow-hidden"
    >
      <LogoLabel label="Dịch vụ" />
      <div className="relative z-0 w-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent w-full" />
        <div className="absolute inset-0 z-20 px-6 py-4 md:p-12 max-w-2xl text-white space-y-2 md:space-y-6">
          <h2 className="text-xl md:text-5xl font-bold md:font-extrabold uppercase leading-none md:leading-tight">
            <NotionRichText items={data[currentIdx]?.title} />
          </h2>
          <p className="text-sm md:text-lg">
            <NotionRichText items={data[currentIdx]?.content} />
          </p>
          <Link href={data[currentIdx].url || '/#contact-us'}>
            <button className="bg-white text-green-dark font-semibold flex items-center justify-center text-sm md:text-lg px-6 md:px-10 py-1 md:py-2 rounded-lg hover:bg-slate-100 mt-4">
              {data[currentIdx]?.cta || 'Liên hệ ngay'}
            </button>
          </Link>
        </div>
        <Slider
          {...settings}
          ref={ref}
          dotsClass="absolute bottom-3 md:bottom-12 left-0 w-full z-20 px-6 md:px-12"
          appendDots={(dots) => (
            <div className="w-full">
              <ul className="flex items-center justify-between gap-2 md:gap-4 w-full">
                {(dots as []).map((dot: any, idx: number) => (
                  <li
                    onClick={() => {
                      setCurrentIdx(idx)
                      ref.current?.slickGoTo(idx)
                    }}
                    key={idx}
                    className={cls(
                      'border md:border-2 rounded-lg md:rounded-xl overflow-hidden',
                      {
                        'border-white': idx === currentIdx,
                        'border-transparent': idx !== currentIdx,
                      },
                    )}
                  >
                    <img
                      src={data[idx]?.photo}
                      width={300}
                      height={190}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        >
          {data.map((service) => (
            <div
              key={service.id}
              className="relative z-0 min-h-[320px] lg:min-h-[668px] w-full h-full bg-red-200"
            >
              <img
                className="relative w-full h-full min-h-[320px] lg:min-h-[668px] object-cover"
                src={service.photo}
                alt="solar-panel"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
