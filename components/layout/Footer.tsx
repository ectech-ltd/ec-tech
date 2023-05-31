import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="absolute w-full px-0 md:px-6 lg:px-12 py-8 md:py-12"
      style={{
        background:
          'radial-gradient(474.26% 474.26% at 50% 50%, #E9FFF5 0%, rgba(43, 62, 17, 0) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        <Image
          src="/img/logo-text.svg"
          width={150}
          height={56}
          alt="logo"
          className="h-16 md:h-20"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-900 text-sm mt-2 md:mt-10 space-y-6 md:space-y-0">
          <div className="w-full space-y-3">
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
          <div className="w-full space-y-3">
            <p className="font-bold text-lg">Tổng đài tư vấn:</p>
            <p>0936241501</p>
            <p className="font-bold text-lg">Email hỗ trợ khách hàng:</p>
            <a href="mailto:info.ectechltd@gmail.com">
              info.ectechltd@gmail.com
            </a>
          </div>
          <div className="w-full space-y-3">
            <p className="font-bold text-lg">Chính sách:</p>
            <ul>
              <li>
                <Link href="/chinh-sach#b3cfaef090e7449988395986c30996de">
                  Phương thức thanh toán
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach#48468611bbaf4207b94ea5e2b802a9b7">
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach#b3cfaef090e7449988395986c30996de">
                  Điều khoản dịch vụ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full space-y-3 overflow-hidden">
            <p className="font-bold text-lg">Fanpage:</p>
            <div
              className="fb-page border-none overflow-hidden w-full"
              data-href="https://www.facebook.com/dienmatroiectech"
              data-tabs="timeline"
              data-width=""
              data-height="200"
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
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.12305399268!2d106.7128678!3d10.8089557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac6ca2a1ad3f4133%3A0xf3f057ec254598e5!2zxJBp4buHbiBt4bq3dCB0cuG7nWkgRWMtVGVjaA!5e0!3m2!1svi!2s!4v1684730473358!5m2!1svi!2s"
                data-width="260"
                data-height="300"
                className="border-none overflow-hidden w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
