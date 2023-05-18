'use client'
/* eslint-disable @next/next/no-img-element */

import LogoLabel from '@/components/LogoLabel'
import Image from 'next/image'

import Slider, { Settings } from 'react-slick'
import cls from 'classnames'
import { useRef, useState } from 'react'

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const services = [
  {
    title: 'Lắp đặt Điện mặt trời hệ bơm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/img/image 4.png',
    CTA: 'Liên hệ',
  },
  {
    title: 'Lắp đặt Điện mặt trời hệ Lưu trữ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/img/image 5.png',
    CTA: 'Liên hệ',
  },
  {
    title: 'Lắp đặt Điện mặt trời hệ Bán tải',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/img/image 6.png',
    CTA: 'Liên hệ',
  },
  {
    title: 'Lắp đặt Điện Gió',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/img/image 7.png',
    CTA: 'Liên hệ',
  },
  {
    title: 'Vận hành bảo trì',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/img/image 8.png',
    CTA: 'Bảo hành',
  },
]

export default function OurServices() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const ref = useRef<Slider>(null)
  return (
    <div className="relative max-w-[86rem] mx-auto space-y-4">
      <div className="relative">
        <div className="text-2xl font-semibold text-[#006838] border-l-4 border-[#006838] px-4 py-2">
          Dịch vụ
        </div>
      </div>

      <div className="relative z-0 w-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent w-full" />
        <div className="absolute inset-0 z-20 p-12 max-w-2xl text-white space-y-6">
          <h2 className="text-5xl font-extrabold uppercase leading-tight">
            {services[currentIdx].title}
          </h2>
          <p>{services[currentIdx].description}</p>
          <button className="bg-white text-[#006838] font-semibold flex items-center justify-center text-xl px-12 py-3 rounded-lg hover:bg-slate-100">
            {services[currentIdx].CTA}
          </button>
        </div>
        <Slider
          {...settings}
          ref={ref}
          dotsClass="absolute bottom-12 left-0 w-full z-20 px-12"
          appendDots={(dots) => (
            <div className="w-full">
              <ul className="flex items-center justify-between gap-4 w-full">
                {(dots as []).map((dot: any, idx: number) => (
                  <li
                    onClick={() => {
                      setCurrentIdx(idx)
                      ref.current?.slickGoTo(idx)
                    }}
                    key={idx}
                    className={cls('border-2 rounded-xl overflow-hidden', {
                      'border-white': idx === currentIdx,
                      'border-transparent': idx !== currentIdx,
                    })}
                  >
                    <Image
                      src={services[idx].img}
                      width={300}
                      height={190}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        >
          {services.map((service, idx) => (
            <div key={idx} className="relative z-0">
              <img
                className="object-cover w-full"
                src={service.img}
                alt="solar-panel"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
