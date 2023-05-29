import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { ChangeEvent, useCallback, useRef } from 'react'
import qs from 'qs'
import { useRouter } from 'next/router'

export function ProductSearchBox() {
  const router = useRouter()
  const searchParams = router.query
  const ref = useRef<any>()
  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (ref.current) {
        clearTimeout(ref.current)
      }

      ref.current = setTimeout(() => {
        const q = qs.stringify({
          ...searchParams,
          search: e.target.value,
        })
        router.push(`/products?${q}`, `/products?${q}`, {
          shallow: true,
        })
      }, 250)
    },
    [searchParams, router],
  )

  return (
    <div className="relative flex items-center justify-between w-full">
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 w-full pr-12"
        placeholder="Tìm kiếm sản phẩm"
        onChange={onSearch}
      />
      <MagnifyingGlassIcon className="w-6 h-6 absolute text-gray-600 right-2 top-2.5" />
    </div>
  )
}
