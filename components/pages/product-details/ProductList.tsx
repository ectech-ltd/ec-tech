/* eslint-disable @next/next/no-img-element */
import LogoLabel from '@/components/LogoLabel'
import { IProduct } from '@/lib/notion/products'
import { createSlug } from '@/lib/utils/string'
import classNames from 'classnames'
import Link from 'next/link'
import { memo } from 'react'

export default memo(function ProductList({ data }: { data: IProduct[] }) {
  return (
    <div className="mt-24">
      <div className="block pb-4">
        <LogoLabel label="Sản phẩm liên quan" noLogo />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-flow-row auto-rows-fr">
        {data.map((item) => (
          <Link
            href={createSlug(item)}
            className="w-full relative"
            key={item.id}
          >
            <div className="border border-gray-400 hover:border-green-dark rounded-lg overflow-hidden divide-y min-h-[260px] h-full bg-white">
              <img
                src={
                  item.properties.Photos.files[0]?.file.url ||
                  '/img/logo-text.svg'
                }
                alt={item.properties.Photos.files[0]?.name}
                className={classNames('w-full h-[250px] max-h-72', {
                  'object-contain px-12':
                    !item.properties.Photos.files[0]?.file.url,
                  'object-contain': item.properties.Photos.files[0]?.file.url,
                })}
              />
              <div className="py-3">
                <div className="px-3 text-lg font-bold flex-1">
                  {item.properties.Title.title[0]?.plain_text}
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
