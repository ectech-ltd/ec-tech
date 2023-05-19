import LogoLabel from '@/components/LogoLabel'
import Image from 'next/image'

const services = [
  {
    img: '/img/image 33.png',
  },
  {
    img: '/img/image 34.png',
  },
  {
    img: '/img/image 35.png',
  },
  {
    img: '/img/image 36.png',
  },
  {
    img: '/img/image 37.png',
  },
  {
    img: '/img/image 38.png',
  },
  {
    img: '/img/image 39.png',
  },
  {
    img: '/img/image 40.png',
  },
  {
    img: '/img/image 41.png',
  },
]

export default function OurPartners() {
  return (
    <div id="our-partners" className="relative mx-auto space-y-4">
      <div className="relative max-w-[86rem] mx-auto">
        <LogoLabel label="Thương hiệu của chúng tôi" />
      </div>
      <div className="-mx-6 md:mx-0">
        <div className="relative z-0 w-full flex flex-wrap justify-center space-x-8 items-center overflow-scroll bg-white">
          {services.map((item, idx) => (
            <div className="relative w-1/2 md:w-28" key={idx}>
              <Image
                src={item.img}
                width={160}
                height={56}
                alt="logo"
                className="max-h-14 md:max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
