import LogoLabel from '@/components/LogoLabel'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Dự án Điện mặt trời - Hộ gia đình',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    location: 'Thành phố Vũng Tàu',
    system: 'Hệ độc lập',
    power: '10kW',
    batteryStorage: 'Narada',
    amplifyier: 'LuxPower',
    img: '/img/image 32.png',
  },
  {
    title: 'Dự án Điện mặt trời - Hộ gia đình',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    location: 'Thành phố Vũng Tàu',
    system: 'Hệ độc lập',
    power: '10kW',
    batteryStorage: 'Narada',
    amplifyier: 'LuxPower',
    img: '/img/image 32.png',
  },
  {
    title: 'Dự án Điện mặt trời - Hộ gia đình',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    location: 'Thành phố Vũng Tàu',
    system: 'Hệ độc lập',
    power: '10kW',
    batteryStorage: 'Narada',
    amplifyier: 'LuxPower',
    img: '/img/image 32.png',
  },
]

export default function HighlightProjects() {
  return (
    <div id="projects" className="relative max-w-[86rem] mx-auto">
      <LogoLabel label="Dự án tiêu biểu" />
      <div className="relative z-0 w-full divide-y divide-gray-400">
        {services.map((item, idx) => (
          <div
            className="relative w-full flex flex-wrap items-start justify-between py-2 md:py-6 space-y-4 md:space-y-0"
            key={idx}
          >
            <div className="w-full md:w-3/5 p-0 md:pr-6 space-y-2 md:space-y-4 order-2 md:order-1">
              <h2 className="text-lg md:text-3xl font-extrabold mt-4 md:mt-0">
                {item.title}
              </h2>
              <p className="text-sm font-normal">{item.description}</p>

              <div className="divide-y divide-gray-400 max-w-md">
                <div className="flex items-center py-2">
                  <div className="w-1/3">Địa điểm:</div>
                  <div className="w-2/3">{item.location}</div>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-1/3">Hệ thống:</div>
                  <div className="w-2/3">{item.system}</div>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-1/3">Công suât:</div>
                  <div className="w-2/3">{item.power}</div>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-1/3">Biến tần:</div>
                  <div className="w-2/3">{item.amplifyier}</div>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-1/3">Pin lưu trữ:</div>
                  <div className="w-2/3">{item.batteryStorage}</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 order-1 md:order-2">
              <Image src={item.img} width={993} height={486} alt="logo" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <button className="box-border bg-[#0571FA] hover:bg-opacity-80 px-8 py-2 md:py-3 rounded-lg text-white text-sm font-semibold">
            Xem thêm
          </button>
        </Link>
      </div>
    </div>
  )
}
