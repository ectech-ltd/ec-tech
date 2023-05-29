/* eslint-disable @next/next/no-img-element */

import LogoLabel from '@/components/LogoLabel'
import Image from 'next/image'

import Slider, { Settings } from 'react-slick'
import cls from 'classnames'
import { useRef, useState } from 'react'
import Link from 'next/link'

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
      'Trong nông nghiệp, thủy lợi chiếm một phần lớn chi phí của người nông dân. Để giảm thiểu các chi phí này, sử dụng điện năng lượng mặt trời là một giải pháp tối ưu và hiệu quả. Với nguồn điện được tạo ra từ các tấm pin năng lượng mặt trời, khách hàng không cần sử dụng nhiên liệu cho máy phát điện hay trả tiền điện từ lưới điện quốc gia. Điều này giúp tiết kiệm chi phí đáng kể cho người nông dân.',
    img: '/img/image 4.png',
    CTA: 'Liên hệ',
  },
  {
    title: 'Lắp đặt Điện mặt trời hệ Lưu trữ',
    description:
      'Đứng trước thực tế nhiều nguồn năng lượng như than đá, dầu mỏ, khí đốt sắp cạn kiệt. Nguồn năng lượng từ gió được coi là nguồn năng lượng trẻ và rất nhiều tiềm năng trong tương lai.',
    img: '/img/image 5.png',
    CTA: 'Liên hệ',
  },
  {
    title: 'Lắp đặt Điện mặt trời hệ Bán tải',
    description:
      'Đứng trước thực tế nhiều nguồn năng lượng như than đá, dầu mỏ, khí đốt sắp cạn kiệt. Nguồn năng lượng từ gió được coi là nguồn năng lượng trẻ và rất nhiều tiềm năng trong tương lai.',
    img: '/img/image 6.png',
    CTA: 'Liên hệ',
  },
  {
    title: 'Lắp đặt Điện Gió',
    description:
      'Đứng trước thực tế nhiều nguồn năng lượng như than đá, dầu mỏ, khí đốt sắp cạn kiệt. Nguồn năng lượng từ gió được coi là nguồn năng lượng trẻ và rất nhiều tiềm năng trong tương lai.',
    img: '/img/image 7.png',
    CTA: 'Liên hệ',
  },
  {
    title: 'Vận hành bảo trì',
    description:
      'Với kinh nghiệm thi công và bảo trì, bảo dưỡng hệ thống điện mặt trời cho hàng trăm hộ gia đình, doanh nghiệp cũng như các nhà máy điện mặt trời có công suất lớn, nhỏ . Chúng tôi đã và đang được nhiều nhà đầu tư, hộ gia đình lựa chọn để giúp các họ tiết kiệm thời gian – công sức – tiền bạc để từ đó thu được lợi nhuận tốt nhất',
    img: '/img/image 8.png',
    CTA: 'Bảo hành',
  },
]

export default function OurServices() {
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
            {services[currentIdx]?.title}
          </h2>
          <p className="text-sm md:text-lg">
            {services[currentIdx]?.description}
          </p>
          <Link href="/#contact-us">
            <button className="bg-white text-green-dark font-semibold flex items-center justify-center text-sm md:text-lg px-6 md:px-10 py-1 md:py-2 rounded-lg hover:bg-slate-100 mt-4">
              {services[currentIdx]?.CTA}
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
                    <Image
                      src={services[idx]?.img}
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
            <div
              key={idx}
              className="relative z-0 min-h-[320px] lg:min-h-[668px] w-full h-full bg-red-200"
            >
              <img
                className="relative w-full h-full min-h-[320px] lg:min-h-[668px]"
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
