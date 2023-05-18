import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full py-4 z-50 backdrop-blur bg-[#D1E5D6] bg-opacity-80">
      <div className="max-w-[86rem] mx-auto flex items-center justify-between">
        <Image src="/img/logo-text.svg" width={200} height={56} alt="logo" />
        <div className="flex items-center justify-center space-x-4">
          <Link href="/">Về chúng tôi</Link>
          <Link href="/">Dịch vụ</Link>
          <Link href="/">Sản phẩm</Link>
          <Link href="/">Dự án tiêu biểu</Link>
          <Link href="/">Tin tức & Khuyến mãi</Link>
          <Link href="/">Câu hỏi thường gặp</Link>
          <Link href="/">Liên hệ</Link>
        </div>
      </div>
    </div>
  )
}
