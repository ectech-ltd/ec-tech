/* eslint-disable @next/next/no-img-element */
import NotionRichText from '@/components/NotionRichtext'
import { IBlog } from '@/lib/notion/blogs'
import { createBlogSlug } from '@/lib/utils/string'
import { map } from 'lodash'
import Link from 'next/link'

export default function BlogList({ data }: { data: IBlog[] }) {
  return (
    <div className="relative z-0 w-full grid gap-4 grid-cols-1 md:grid-cols-3">
      {map(data, (item) => (
        <Link
          href={createBlogSlug(item)}
          className="relative block h-full w-full bg-white rounded-lg shadow-md"
          key={item.id}
        >
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src={
                item.cover?.external?.url ||
                item.cover?.file?.url ||
                '/img/solar-panel.png'
              }
              className="relative w-full h-full object-cover h-64"
              alt={item.properties.Title.title[0]?.plain_text}
            />
            <div className="relative p-4 w-full">
              <div className="text-lg md:text-xl font-semibold">
                <NotionRichText items={item.properties.Title?.title as any} />
              </div>
              <div className="text-sm font-normal">
                <NotionRichText
                  items={item.properties['Short Description']?.rich_text as any}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
