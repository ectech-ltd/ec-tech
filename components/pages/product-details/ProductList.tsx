/* eslint-disable @next/next/no-img-element */
import LogoLabel from '@/components/LogoLabel'
import { IProduct } from '@/lib/notion/products'
import Link from 'next/link'
import { memo } from 'react'
import slugify from 'slugify'

export default memo(function ProductList({ data }: { data: IProduct[] }) {
  return (
    <div className="space-y-6 mt-32">
      <LogoLabel label="Sản phẩm liên quan" noLogo />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full">
        {data.map((item) => (
          <Link
            href={[
              '/products',
              slugify(
                `${item.properties.Title?.title[0]?.plain_text}.${item.id}`,
              ),
            ]?.join('/')}
            className="w-full bg-green-50"
            key={item.id}
          >
            <div className="border border-gray-400 hover:border-green-dark rounded-lg overflow-hidden divide-y">
              <img
                src={item.properties.Photos?.files[0]?.file.url}
                alt={item.properties.Photos?.files[0]?.name}
                className="w-full h-full object-cover min-h-[268px]"
              />
              <div className="py-3">
                <div className="px-3 text-lg font-bold truncate">
                  {item.properties.Title?.title[0]?.plain_text}
                </div>
                <div className="px-3 text-base">
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
