import NotionClient from '@/lib/notion'
import { ICategory } from '@/lib/notion/categories'
import classNames from 'classnames'
import Link from 'next/link'

export default function CategoryList({
  data: categories,
  active,
}: {
  data: ICategory[]
  active: string
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">Sản phẩm</h3>
      <div className="divide-y">
        {categories.map((item) => (
          <Link
            href={`/products?category=${item.id}`}
            className={classNames(
              'block p-2 hover:bg-green-100 font-semibold hover:text-green-dark',
              {
                'bg-green-100 text-green-dark': active === item.id,
              },
            )}
            key={item.id}
          >
            {item.properties.Name.title[0]?.plain_text}
          </Link>
        ))}
      </div>
    </div>
  )
}
