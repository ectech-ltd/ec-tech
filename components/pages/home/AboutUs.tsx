/* eslint-disable @next/next/no-img-element */
import LogoLabel from '@/components/LogoLabel'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="relative max-w-6xl px-0 md:px-6 lg:px-12 mx-auto flex items-stretch justify-between"
    >
      <div className="flex flex-wrap items-center justify-center w-full">
        <div className="hidden md:block w-1/2 xl:w-3/5 h-full">
          <img
            src="/img/image 3.png"
            alt="logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full px-0 md:pl-6 md:w-1/2 xl:w-2/5 space-y-4">
          <LogoLabel label="Về chúng tôi" />
          <h2 className="text-black text-xl md:text-3xl font-extrabold text-center md:text-left">
            “ We are the Best-In-Class Products & Solutions ”
          </h2>
          <p className="text-xs font-semibold text-justify">
            Công ty TNHH Ec-Tech là một công ty khởi nghiệp về thi công lắp đặt
            điện tái tạo, tập trung vào việc giảm thiểu lượng khí thải carbon và
            góp phần bảo vệ môi trường thông qua sử dụng năng lượng xanh.
            <br />
            <br />
            Đội ngũ kỹ thuật viên của chúng tôi là những chuyên gia giàu kinh
            nghiệm trong lĩnh vực năng lượng mặt trời, giúp giải pháp năng lượng
            tái tạo tốt nhất cho khách hàng. Chúng tôi cam kết sử dụng các thiết
            bị và vật liệu chất lượng cao để đảm bảo tính an toàn và hiệu quả
            của hệ thống. Tại Ec-Tech, chúng tôi coi trọng việc đem đến dịch vụ
            chuyên nghiệp và thân thiện cho khách hàng của mình.
            <br />
            <br />
            Liên hệ với chúng tôi để được tư vấn và báo giá miễn phí, và chung
            tay đóng góp vào một tương lai xanh hơn cho hành tinh này.
          </p>
          <Link href="/ve-chung-toi">
            <button className="bg-[#0571FA] text-white font-semibold flex items-center justify-center text-sm md:text-base px-6 md:px-10 py-1 md:py-2 rounded-lg hover:bg-opacity-80 mt-4">
              Tìm hiểu thêm
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
