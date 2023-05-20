'use client'
/* eslint-disable @next/next/no-img-element */
import NotionClient from '@/lib/notion'
import { IProduct } from '@/lib/notion/products'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'
import slugify from 'slugify'

const ProductLoading = () => {
  return (
    <div className="botder border-gray-400 bg-green-50 rounded-lg overflow-hidden min-h-[445px]">
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

export default memo(function ProductList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category = searchParams.category as string
  const tag = searchParams.tag as string
  const [loading, setLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [data, setData] = useState<IProduct[]>([])
  const [prePage, setPrePage] = useState<string | undefined>(undefined)
  const [page, setPage] = useState<string | undefined>(undefined)

  useEffect(() => {
    setLoading(true)
    axios
      .get('/api/products', {
        params: { page_size: 9, start_cursor: prePage, category, tag },
      })
      .then(({ data: resp }: any) => {
        setData((prev) => [...prev, ...resp.results])
        setHasMore(resp.has_more)
        setPage(resp.next_cursor)
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false)
      })
  }, [prePage, category, tag])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.map((item) => (
          <Link
            href={[
              '/products',
              slugify(
                `${item.properties.Title.title[0].plain_text}.${item.id}`,
              ),
            ].join('/')}
            className="w-full bg-green-50"
            key={item.id}
          >
            <div className="border border-gray-400 hover:border-green-dark rounded-lg overflow-hidden divide-y min-h-[445px]">
              <img
                src={item.properties.Photos.files[0].file.url}
                alt={item.properties.Photos.files[0].name}
                className="w-full h-full object-cover min-h-[397px]"
              />
              <div className="py-3">
                <div className="px-3 text-lg font-bold">
                  {item.properties.Title.title[0].plain_text}
                </div>
                <div className="px-3 text-base">
                  {item.properties.Rate.select.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ProductLoading />
          <ProductLoading />
        </div>
      )}
      {!loading && hasMore && (
        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            className="py-2 px-6 text-white bg-green-dark hover:opacity-80 rounded-lg"
            onClick={() => setPrePage(page)}
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
