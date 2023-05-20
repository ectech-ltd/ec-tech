import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import MobileMenu from './MobileMenu'
export default function Navbar() {
  return (
    <div className="sticky top-0 w-full py-4 px-6 xl:px-0 z-50 backdrop-blur bg-[#D1E5D6] bg-opacity-80">
      <div className="relative max-w-[86rem] mx-auto flex items-center justify-between w-full">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/img/logo-text.svg"
            alt="logo"
            width={150}
            height={56}
            className="h-10 md:h-14"
          />
        </Link>

        <div className="hidden md:flex items-center justify-center space-x-4">
          <Link
            href="/#about-us"
            className="font-semibold hover:text-[#247B38]"
          >
            Về chúng tôi
          </Link>
          <Link
            href="/#our-services"
            className="font-semibold hover:text-[#247B38]"
          >
            Dịch vụ
          </Link>
          <Link href="/products" className="font-semibold hover:text-[#247B38]">
            Sản phẩm
          </Link>
          <Link
            href="/#projects"
            className="font-semibold hover:text-[#247B38]"
          >
            Dự án tiêu biểu
          </Link>
          <Link href="/news" className="font-semibold hover:text-[#247B38]">
            Tin tức & Khuyến mãi
          </Link>

          <Link href="/faq" className="font-semibold hover:text-[#247B38]">
            Câu hỏi thường gặp
          </Link>
          <Link
            href="/#contact-us"
            className="font-semibold hover:text-[#247B38]"
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
