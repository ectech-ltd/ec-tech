'use client'
import LogoLabel from '@/components/LogoLabel'
import Select from '@/components/Select/indext'

import * as RSlider from '@radix-ui/react-slider'
import * as Form from '@radix-ui/react-form'
import { useState } from 'react'
import { formatCurrency } from '@/lib/utils/string'
import axios from 'axios'

const Slider = ({
  value,
  max,
  step,
  onChange,
}: {
  value: number
  max: number
  step: number
  onChange?: (num: number[]) => void
}) => (
  <RSlider.Root
    className="relative flex items-center select-none touch-none w-full h-5"
    max={max}
    step={step}
    value={[value]}
    onValueChange={onChange}
    aria-label="Volume"
  >
    <RSlider.Track className="bg-[#B8B8B8] relative grow rounded-full h-1">
      <RSlider.Range className="absolute bg-[#247B38] rounded-full h-full" />
    </RSlider.Track>
    <RSlider.Thumb className="block w-3.5 h-3.5 bg-[#247B38] rounded-full" />
  </RSlider.Root>
)

export default function ContactForm() {
  const [location, setLocation] = useState('')
  const [area, setArea] = useState(0)
  const [bill, setBill] = useState(0)
  const [powerUsage, setPowerUsage] = useState(0)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setLoading(true)
      if (
        !location ||
        !area ||
        !bill ||
        !powerUsage ||
        !name ||
        !phone ||
        !email
      ) {
        return
      }

      await axios.post('/api/contacts', {
        location,
        bill: formatCurrency(bill, 'VND'),
        area: `${area} m2`,
        powerUsage: `${powerUsage}%`,
        name,
        phone,
        email,
      })
      setArea(0)
      setBill(0)
      setPowerUsage(0)
      setName('')
      setPhone('')
      setEmail('')
      setLocation('')
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      id="contact-us"
      className="relative max-w-6xl px-0 md:px-6 lg:px-12 mx-auto space-y-4"
    >
      <LogoLabel label="Liên hệ" />
      <div className="relative z-0 w-full px-0 md:px-12">
        <form
          className="bg-[#F3F3F3] p-6 md:p-12 rounded-lg flex items-start justify-center flex-wrap space-y-4 md:space-y-0"
          onSubmit={submitForm}
        >
          <div className="w-full md:w-1/2 p-0 md:pr-12">
            <h2 className="font-semibold md:font-bold text-lg md:text-2xl">
              Dự toán chi phí lắp đặt hệ thống
            </h2>
            <p className="text-xs md:text-sm">
              Nhận kết quả hệ thông Điện mặt trời phù hợp cho nhu cầu sử dụng mà
              khách hàng đang quan tâm
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="relative">
                <label className="block text-sm md:text-base mb-2 font-semibold">
                  Khu vực
                </label>
                <Select value={location} onChange={setLocation} />
              </div>
              <div className="relative">
                <label className="block text-sm md:text-base mb-4 font-semibold">
                  Diện tích mái
                </label>
                <span className="absolute left-0 top-6 text-xs font-semibold">
                  {area}m2
                </span>
                <span className="absolute right-0 top-6 text-xs font-semibold">
                  100m2
                </span>
                <Slider
                  value={area}
                  max={100}
                  step={1}
                  onChange={([num]) => setArea(num)}
                />
              </div>
              <div className="relative">
                <label className="block text-sm md:text-base mb-4 font-semibold">
                  Hoá đơn tiền điện
                </label>
                <span className="absolute left-0 top-6 text-xs font-semibold">
                  Trung bình tháng
                </span>
                <Slider
                  value={bill}
                  max={100000000}
                  step={1000}
                  onChange={([num]) => setBill(num)}
                />
                <span className="absolute left-0 top-14 text-xs font-semibold text-gray-500">
                  {formatCurrency(bill, 'VND')}
                </span>
              </div>
              <div className="relative">
                <label className="block text-sm md:text-base mb-4 font-semibold">
                  Tỉ lệ sử dụng điện ban ngày
                </label>
                <span className="absolute right-0 top-6 text-xs font-semibold">
                  {powerUsage}%
                </span>
                <Slider
                  max={100}
                  step={1}
                  value={powerUsage}
                  onChange={([num]) => setPowerUsage(num)}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-0 md:pl-12">
            <h2 className="font-semibold md:font-bold text-lg md:text-2xl">
              Nhận báo giá
            </h2>
            <p className="text-xs md:text-sm">
              Nhận kết quả hệ thông Điện mặt trời phù hợp cho nhu cầu sử dụng mà
              khách hàng đang quan tâm
            </p>

            <div className="w-full">
              <div className="grid mb-2 md:mb-3">
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-semibold leading-8">
                    Họ tên
                  </label>
                </div>
                <div className="block">
                  <input
                    name="name"
                    className="box-border w-full flex py-2 md:py-3 px-6 border border-gray-400 appearance-none items-center justify-center rounded-lg text-sm leading-none"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid mb-2 md:mb-3">
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-semibold leading-8">
                    Email
                  </label>
                </div>
                <div className="block">
                  <input
                    className="box-border w-full flex py-2 md:py-3 px-6 border border-gray-400 appearance-none items-center justify-center rounded-lg text-sm leading-none"
                    type="email"
                    value={email}
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid mb-2 md:mb-3">
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-semibold leading-8">
                    Số điện thoại
                  </label>
                </div>
                <div className="block">
                  <input
                    value={phone}
                    className="box-border w-full flex py-2 md:py-3 px-6 border border-gray-400 appearance-none items-center justify-center rounded-lg text-sm leading-none"
                    type="text"
                    name="phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="block">
                <button
                  type="submit"
                  className="box-border bg-[#0571FA] hover:bg-opacity-80 px-6 md:px-8 py-2 md:py-3 rounded-lg text-white text-sm font-semibold"
                  disabled={loading}
                >
                  {loading ? 'Đang gửi...' : 'Liên hệ'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
