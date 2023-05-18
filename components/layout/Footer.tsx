import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="absolute w-full py-12"
      style={{
        background:
          'radial-gradient(474.26% 474.26% at 50% 50%, #E9FFF5 0%, rgba(43, 62, 17, 0) 100%)',
      }}
    >
      <div className="max-w-[86rem] mx-auto">
        <Image src="/img/logo-text.svg" width={280} height={100} alt="logo" />
        <div className="flex justify-between items-start -mx-4 text-gray-900 text-sm mt-10">
          <div className="px-6 w-1/4 space-y-2">
            <p className="font-bold text-lg">Thông tin:</p>
            <h2 className="font-bold">Công ty TNHH EC-TECH</h2>
            <p className="font-bold">
              MST: <span className="font-normal">0317824461</span>
            </p>
            <p className="font-bold">
              Địa chỉ:&nbsp;
              <span className="font-normal">
                26 Ung Văn Khiêm, P.25, Quận Bình Thạnh, Thành phố Hồ Chí Minh,
                Việt Nam
              </span>
            </p>
            <p className="font-bold">
              Thời gian làm việc:
              <br />
              <span className="font-normal">
                Thứ 2 đến Thứ 7 ( 8:00 - 18:30 )
              </span>
              <br />
              <span className="font-normal">Chủ Nhật ( 8:00 - 17:00 )</span>
              <br />
              <span className="font-normal">
                Tư vấn online ( 8:00 - 18:30 )
              </span>
            </p>
          </div>
          <div className="px-6 w-1/4 space-y-2">
            <p className="font-bold text-lg">Thông tin:</p>
            <p>000000000000000</p>
            <p className="font-bold text-lg !mt-10">Email hỗ trợ khách hàng:</p>
            <a href="mailto:support@gmail.com">support@gmail.com</a>
            <div className="flex items-center justify-center -mx-2">
              <div className="px-2 w-1/2">
                <Image
                  src="/img/bo-cong-thuong.png"
                  width={172}
                  height={60}
                  alt="logo"
                />
              </div>
              <div className="px-2 w-1/2">
                <Image src="/img/DMCA.png" width={136} height={60} alt="logo" />
              </div>
            </div>
          </div>
          <div className="px-6 w-1/4 space-y-2">
            <p className="font-bold text-lg">Chính sách:</p>
            <ul>
              <li>Chính sách bảo hành</li>
              <li>Điều khoản dịch vụ </li>
              <li>Phương thức thanh toán</li>
              <li>Chính sách bảo mật thông tin</li>
            </ul>
          </div>
          <div className="px-6 w-1/4 space-y-2">
            <p className="font-bold text-lg">Fanpage:</p>
            <a href="https://www.facebook.com/dienmatroiectech">
              Điện Mặt Trời Ec-Tech
            </a>
            <p className="font-bold text-lg">Địa điểm:</p>
            <a href="https://www.facebook.com/dienmatroiectech">
              Điện Mặt Trời Ec-Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
