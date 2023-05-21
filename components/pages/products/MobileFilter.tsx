'use client'
import React from 'react'
import * as Menubar from '@radix-ui/react-menubar'
import { ICategory } from '@/lib/notion/categories'
import { ITag } from '@/lib/notion/tags'
import { useRouter } from 'next/navigation'

const MobileFilter = ({
  categories,
  tags,
}: {
  categories: ICategory[]
  tags: ITag[]
}) => {
  const router = useRouter()

  return (
    <Menubar.Root className="flex bg-white p-1.5 rounded-md">
      <Menubar.Menu>
        <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-green-dark text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green-100 data-[state=open]:bg-green-100">
          Sản phẩm
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-white rounded-md p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            {categories.map((item) => (
              <Menubar.Item
                key={item.id}
                onClick={() => router.push(`/products?category=${item.id}`)}
                className="group text-sm leading-none rounded flex items-center h-6 px-2 relative select-none outline-none data-[state=open]:bg-green-100 data-[state=open]:text-green-dark data-[highlighted]:text-green-dark data-[highlighted]:data-[state=open]:text-green-dark capitalize"
              >
                {item.properties.Name.title[0].plain_text}
              </Menubar.Item>
            ))}
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-green-dark text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green-100 data-[state=open]:bg-green-100">
          Từ khoá
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-white rounded-md p-1.5 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            {tags.map((item) => (
              <Menubar.Item
                key={item.id}
                onClick={() => router.push(`/products?tag=${item.id}`)}
                className="group text-sm leading-none rounded flex items-center h-6 px-2 relative select-none outline-none data-[state=open]:bg-green-100 data-[state=open]:text-green-dark data-[highlighted]:text-green-dark data-[highlighted]:data-[state=open]:text-green-dark capitalize"
              >
                {item.properties.Name.title[0].plain_text}
              </Menubar.Item>
            ))}
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  )
}

export default MobileFilter
