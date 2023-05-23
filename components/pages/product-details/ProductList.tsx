/* eslint-disable @next/next/no-img-element */
import LogoLabel from '@/components/LogoLabel'
import { IProduct } from '@/lib/notion/products'
import { createSlug } from '@/lib/utils/string'
import Link from 'next/link'
import { memo } from 'react'

export default memo(function ProductList({ data }: { data: IProduct[] }) {
  return (
    <div className="mt-24">
      <div className="block pb-4">
        <LogoLabel label="Sản phẩm liên quan" noLogo />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        {data.map((item) => (
          <Link
            href={createSlug(item)}
            className="w-full bg-white"
            key={item.id}
          >
            <div className="border border-gray-400 hover:border-green-dark rounded-lg overflow-hidden divide-y">
              <img
                src={item.properties.Photos?.files[0]?.file.url}
                alt={item.properties.Photos?.files[0]?.name}
                className="w-full h-full object-contain min-h-[160px]"
              />
              <div className="py-3">
                <div className="px-3 text-sm md:text-lg font-semibold md:font-bold truncate">
                  {item.properties.Title?.title[0]?.plain_text}
                </div>
                <div className="px-3 text-sm">
                  {item.properties.Rate?.select?.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})
