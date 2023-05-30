/* eslint-disable @next/next/no-img-element */
import { PlusCircledIcon } from '@radix-ui/react-icons'
import LogoLabel from '@/components/LogoLabel'
import { IProduct } from '@/lib/notion/products'
import Link from 'next/link'
import { createProductSlug } from '@/lib/utils/string'

export default function HighlightProducts({ data }: { data: IProduct[] }) {
  return (
    <div
      id="products"
      className="relative max-w-6xl px-0 md:px-6 lg:px-12 mx-auto space-y-4 overflow-hidden"
    >
      <LogoLabel label="Sản phẩm nổi bật" />
      <div className="relative z-0 w-full flex items-center justify-start gap-3 overflow-scroll flex-nowrap">
        {data.map((item) => (
          <Link
            href={createProductSlug(item)}
            className="relative min-w-[280px] max-w-[280px] min-h-[360px] bg-white"
            key={item.id}
          >
            <img
              src={item.properties.Photos.files[0]?.file.url}
              alt={item.properties.Photos.files[0]?.name}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent w-full opacity-50" />
            <div className="absolute bottom-0 z-20 p-6 max-w-2xl text-white space-y-6">
              <div className="text-2xl font-semibold flex items-start gap-2">
                <div className="">
                  {item.properties.Title.title[0]?.plain_text}
                </div>
                <div className="min-w-10">
                  <PlusCircledIcon fontSize={64} className="h-10 w-10" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
