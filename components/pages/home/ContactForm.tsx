'use client'
import LogoLabel from '@/components/LogoLabel'
import Select from '@/components/Select/indext'

import * as Slider from '@radix-ui/react-slider'
import * as Form from '@radix-ui/react-form'

const SliderDemo = () => (
  <Slider.Root
    className="relative flex items-center select-none touch-none w-full h-5"
    defaultValue={[50]}
    max={100}
    step={1}
    aria-label="Volume"
  >
    <Slider.Track className="bg-[#B8B8B8] relative grow rounded-full h-[3px]">
      <Slider.Range className="absolute bg-[#247B38] rounded-full h-full" />
    </Slider.Track>
    <Slider.Thumb className="block w-5 h-5 bg-[#247B38] rounded-[10px]" />
  </Slider.Root>
)

export default function ContactForm() {
  return (
    <div className="relative max-w-[86rem] mx-auto space-y-4">
      <LogoLabel label="Liên hệ" />
      <div className="relative z-0 w-full px-12">
        <form className="bg-[#F3F3F3] p-12 rounded-lg flex items-start justify-center">
          <div className="w-1/2 pr-12">
            <h2 className="font-bold text-2xl">
              Dự toán chi phí lắp đặt hệ thống
            </h2>
            <p className="text-sm">
              Nhận kết quả hệ thông Điện mặt trời phù hợp cho nhu cầu sử dụng mà
              khách hàng đang quan tâm
            </p>
            <div className=" space-y-6">
              <div className="relative">
                <label className="block mb-2 font-semibold">Khu vực</label>
                <Select />
              </div>
              <div className="relative">
                <label className="block mb-4 font-semibold">
                  Diện tích mái
                </label>
                <span className="absolute left-0 top-6 text-xs font-semibold">
                  0m2
                </span>
                <span className="absolute right-0 top-6 text-xs font-semibold">
                  100m2
                </span>
                <SliderDemo />
              </div>
              <div className="relative">
                <label className="block mb-4 font-semibold">
                  Hoá đơn tiền điện
                </label>
                <span className="absolute left-0 top-6 text-xs font-semibold">
                  Trung bình tháng
                </span>
                <SliderDemo />
                <span className="absolute left-0 top-14 text-xs font-semibold text-gray-500">
                  0.000.000 vnđ
                </span>
              </div>
              <div className="relative">
                <label className="block mb-4 font-semibold">
                  Tỉ lệ sử dụng điện ban ngày
                </label>
                <span className="absolute right-0 top-6 text-xs font-semibold">
                  10%
                </span>
                <SliderDemo />
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-12">
            <h2 className="font-bold text-2xl">Nhận báo giá</h2>
            <p className="text-sm">
              Nhận kết quả hệ thông Điện mặt trời phù hợp cho nhu cầu sử dụng mà
              khách hàng đang quan tâm
            </p>

            <Form.Root className="w-full">
              <Form.Field className="grid mb-3" name="email">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                    Họ tên
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <input
                    className="box-border w-full inline-flex py-3 px-6 border border-gray-900 appearance-none items-center justify-center rounded-lg text-sm leading-none text-black"
                    type="email"
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field className="grid mb-3" name="email">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                    Email
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <input
                    className="box-border w-full inline-flex py-3 px-6 border border-gray-900 appearance-none items-center justify-center rounded-lg text-sm leading-none text-black"
                    type="email"
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field className="grid mb-3" name="email">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                    Số điện thoại
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <input
                    className="box-border w-full inline-flex py-3 px-6 border border-gray-900 appearance-none items-center justify-center rounded-lg text-sm leading-none text-black"
                    type="email"
                    required
                  />
                </Form.Control>
              </Form.Field>{' '}
              <Form.Submit asChild>
                <button className="box-border bg-[#0571FA] hover:bg-opacity-80 px-8 py-3 rounded-lg text-white text-sm font-semibold">
                  Liên hệ
                </button>
              </Form.Submit>
            </Form.Root>
          </div>
        </form>
      </div>
    </div>
  )
}
