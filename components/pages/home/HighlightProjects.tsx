/* eslint-disable @next/next/no-img-element */
import LogoLabel from '@/components/LogoLabel'
import NotionRichText from '@/components/NotionRichtext'
import { IProject } from '@/lib/notion/project'
import { createProjectSlug } from '@/lib/utils/string'
import { map } from 'lodash'
import Link from 'next/link'

export default function HighlightProjects({ data }: { data: IProject[] }) {
  return (
    <div
      id="du-an-tieu-bieu"
      className="relative max-w-6xl px-0 md:px-6 lg:px-12 mx-auto"
    >
      <LogoLabel label="Dự án tiêu biểu" />
      <div className="relative z-0 w-full divide-y divide-gray-400">
        {map(data, (item) => (
          <Link
            href={createProjectSlug(item)}
            className="relative w-full flex flex-wrap items-start justify-between py-2 md:py-6 space-y-4 md:space-y-0"
            key={item.id}
          >
            <div className="w-full md:w-1/2 p-0 md:pr-6 space-y-2 md:space-y-4 order-2 md:order-1">
              <h2 className="text-lg md:text-3xl font-extrabold mt-4 md:mt-0">
                <NotionRichText items={item.properties.Page?.title as any} />
              </h2>
              <div className="text-sm font-normal">
                <NotionRichText
                  items={item.properties['Short Description']?.rich_text as any}
                />
              </div>

              <div className="divide-y divide-gray-400 max-w-md">
                <div className="flex items-center py-2">
                  <div className="w-1/3">Địa điểm:</div>
                  <div className="w-2/3">
                    <NotionRichText
                      items={item.properties.Location?.rich_text as any}
                    />
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-1/3">Hệ thống:</div>
                  <div className="w-2/3">
                    <NotionRichText
                      items={item.properties.System?.rich_text as any}
                    />
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-1/3">Công suất:</div>
                  <div className="w-2/3">
                    <NotionRichText
                      items={item.properties['Power']?.rich_text as any}
                    />
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-1/3">Biến tần:</div>
                  <div className="w-2/3">
                    <NotionRichText
                      items={item.properties.Inverter?.rich_text as any}
                    />
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <div className="w-1/3">Pin lưu trữ:</div>
                  <div className="w-2/3">
                    <NotionRichText
                      items={item.properties['Power Storage']?.rich_text as any}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src={item.properties.Photos?.files[0]?.file.url}
                width={993}
                height={486}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/du-an">
          <button className="box-border bg-[#0571FA] hover:bg-opacity-80 px-8 py-2 md:py-3 rounded-lg text-white text-sm font-semibold">
            Xem thêm
          </button>
        </Link>
      </div>
    </div>
  )
}
