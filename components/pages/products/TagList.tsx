import NotionClient from '@/lib/notion'
import { ITag } from '@/lib/notion/tags'
import classNames from 'classnames'
import Link from 'next/link'

export default function TagsList({
  data: tags,
  active,
}: {
  data: ITag[]
  active: string
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">Từ khoá</h3>
      <div className="flex items-center justify-start flex-wrap gap-2">
        {tags.map((item) => (
          <Link
            href={`/products?tag=${item.id}`}
            className={classNames(
              'p-2 border border-gray-400 rounded-lg hover:bg-green-100 hover:text-green-dark font-semibold',
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
