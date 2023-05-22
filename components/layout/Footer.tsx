import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="absolute w-full py-8 md:py-12"
      style={{
        background:
          'radial-gradient(474.26% 474.26% at 50% 50%, #E9FFF5 0%, rgba(43, 62, 17, 0) 100%)',
      }}
    >
      <div className="max-w-[86rem] mx-auto px-6 md:px-0">
        <Image
          src="/img/logo-text.svg"
          width={150}
          height={56}
          alt="logo"
          className="h-16 md:h-20"
        />
        <div className="flex flex-wrap justify-between items-start -mx-4 text-gray-900 text-sm mt-2 md:mt-10 space-y-6 md:space-y-0">
          <div className="px-6 w-full md:w-1/4 space-y-3">
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
          <div className="px-6 w-full md:w-1/4 space-y-3">
            <p className="font-bold text-lg">Tổng đài tư vấn:</p>
            <p>0936241501</p>
            <p className="font-bold text-lg">Email hỗ trợ khách hàng:</p>
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
          <div className="px-6 w-full md:w-1/4 space-y-3">
            <p className="font-bold text-lg">Chính sách:</p>
            <ul>
              <li>Chính sách bảo hành</li>
              <li>Điều khoản dịch vụ </li>
              <li>Phương thức thanh toán</li>
              <li>Chính sách bảo mật thông tin</li>
            </ul>
          </div>
          <div className="px-6 w-full md:w-1/4 space-y-3">
            <p className="font-bold text-lg">Fanpage:</p>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/dienmatroiectech"
              data-tabs="timeline"
              data-width=""
              data-height="240"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/dienmatroiectech"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/dienmatroiectech">
                  Điện Mặt Trời Ec-Tech
                </a>
              </blockquote>
            </div>
            <p className="font-bold text-lg">Địa điểm:</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.12305399268!2d106.7128678!3d10.8089557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac6ca2a1ad3f4133%3A0xf3f057ec254598e5!2zxJBp4buHbiBt4bq3dCB0cuG7nWkgRWMtVGVjaA!5e0!3m2!1svi!2s!4v1684730473358!5m2!1svi!2s"
              data-width="340"
              data-height="300"
              className="border-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  )
}
