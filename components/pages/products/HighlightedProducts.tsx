/* eslint-disable @next/next/no-img-element */
import { IProduct } from '@/lib/notion/products'
import { createSlug } from '@/lib/utils/string'
import classNames from 'classnames'
import Link from 'next/link'

export default function HighlightedProducts({ data }: { data: IProduct[] }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">Sản phẩm nổi bật</h3>
      <div className="divide-y">
        {data.map((item) => (
          <Link
            href={createSlug(item)}
            className={classNames(
              'flex items-center justify-between p-2 hover:bg-green-100 font-semibold hover:text-green-dark',
            )}
            key={item.id}
          >
            <img
              src={item.properties.Photos.files[0]?.file.url}
              className="w-16 h-16"
              alt=""
            />
            <div className="flex-1 px-2">
              <p>{item.properties.Title.title[0]?.plain_text}</p>
              <p>{item.properties.Rate?.select?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
