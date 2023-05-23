import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import MobileMenu from './MobileMenu'
export default function Navbar() {
  return (
    <div className="sticky top-0 w-full py-4 px-6 xl:px-0 z-50 backdrop-blur bg-[#D1E5D6] bg-opacity-80">
      <div className="relative max-w-6xl mx-auto flex items-center justify-between w-full">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/img/logo-text.svg"
            alt="logo"
            width={150}
            height={56}
            className="h-10 md:h-14"
          />
        </Link>

        <div className="hidden md:flex text-sm items-center justify-center space-x-4">
          <Link
            href="/#about-us"
            className="font-semibold hover:text-green-dark"
          >
            Về chúng tôi
          </Link>
          <Link
            href="/#our-services"
            className="font-semibold hover:text-green-dark"
          >
            Dịch vụ
          </Link>
          <Link
            href="/products"
            className="font-semibold hover:text-green-dark"
          >
            Sản phẩm
          </Link>
          <Link
            href="/#projects"
            className="font-semibold hover:text-green-dark"
          >
            Dự án tiêu biểu
          </Link>
          <Link href="/news" className="font-semibold hover:text-green-dark">
            Tin tức & Khuyến mãi
          </Link>

          <Link href="/faq" className="font-semibold hover:text-green-dark">
            Câu hỏi thường gặp
          </Link>
          <Link
            href="/#contact-us"
            className="font-semibold hover:text-green-dark"
          >
            Liên hệ
          </Link>
          <MagnifyingGlassIcon className="w-6 h-6" />
        </div>
        <MobileMenu />
      </div>
    </div>
  )
}
