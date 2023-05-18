import LogoLabel from '@/components/LogoLabel'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="relative max-w-[86rem] mx-auto flex items-center justify-between">
      <div className="flex items-center justify-center w-full h-full -mx-4">
        <div className="w-3/5 px-4">
          <Image src="/img/image 3.png" width={995} height={599} alt="logo" />
        </div>
        <div className="w-2/5 px-4 space-y-4">
          <LogoLabel label="Về chúng tôi" />
          <h2 className="text-black text-4xl font-extrabold">
            “ We are the Best-In-Class Products & Solutions ”
          </h2>
          <p className="text-sm font-semibold">
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
        </div>
      </div>
    </div>
  )
}
