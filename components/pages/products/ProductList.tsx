/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { useProductsContext } from './context'
import classNames from 'classnames'
import { createSlug } from '@/lib/utils/string'

const ProductLoading = () => {
  return (
    <div className="botder border-gray-400 bg-green-50 rounded-lg overflow-hidden h-[260px]">
      <div className="animate-pulse w-full h-full divide-y flex flex-col">
        <div className="flex w-full items-center justify-center flex-1">
          <Image
            src="/img/logo-text.svg"
            alt="logo"
            width={250}
            height={100}
            className="h-10 md:h-14"
          />
        </div>
        <div className="p-3 space-y-2">
          <div className="h-3 w-4/5 bg-gray-400 rounded-lg" />
          <div className="h-3 w-2/5 bg-gray-400 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default memo(function ProductList() {
  const { data, hasMore, loading, loadMore } = useProductsContext()

  return (
    <div className="space-y-6 px-0 md:pl-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row auto-rows-fr">
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
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductLoading />
          <ProductLoading />
        </div>
      )}
      {!loading && hasMore && (
        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            className="py-2 px-6 text-white bg-green-dark hover:opacity-80 rounded-lg"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
      {!loading && !data.length && (
        <div className="w-full flex justify-center items-center">No data</div>
      )}
    </div>
  )
})
