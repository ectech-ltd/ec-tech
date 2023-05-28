import LogoLabel from '@/components/LogoLabel'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const services = [
  {
    img: '/img/partners/image 33.png',
  },
  {
    img: '/img/partners/image 34.png',
  },
  {
    img: '/img/partners/image 35.png',
  },
  {
    img: '/img/partners/image 36.png',
  },
  {
    img: '/img/partners/image 37.png',
  },
  {
    img: '/img/partners/image 38.png',
  },
  {
    img: '/img/partners/image 39.png',
  },
  {
    img: '/img/partners/image 40.png',
  },
  {
    img: '/img/partners/image 41.png',
  },
]

export default function OurPartners() {
  return (
    <div id="our-partners" className="relative mx-auto space-y-4">
      <div className="relative max-w-6xl px-0 md:px-6 lg:px-12 mx-auto">
        <LogoLabel label="Thương hiệu của chúng tôi" />
      </div>
      <div className="mx-0">
        <Marquee
          className="flex justify-center items-center overflow-hidden bg-white py-2"
          pauseOnHover
          direction="right"
        >
          {services.map((item, idx) => (
            <div className="relative mx-4 md:mx-10 w-28" key={idx}>
              <Image
                src={item.img}
                width={160}
                height={56}
                alt="logo"
                className="max-h-20 md:max-h-28 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
