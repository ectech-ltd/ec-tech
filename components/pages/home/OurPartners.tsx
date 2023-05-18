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
    <div className="relative mx-auto space-y-4">
      <div className="relative max-w-[86rem] mx-auto space-y-4">
        <LogoLabel label="Thương hiệu của chúng tôi" />
      </div>
      <div className="relative z-0 w-full flex flex-nowrap justify-between px-6 items-center overflow-scroll bg-white">
        {services.map((item, idx) => (
          <div className="relative w-28" key={idx}>
            <Image src={item.img} width={160} height={56} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  )
}
