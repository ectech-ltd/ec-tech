'use client'
import { IProduct } from '@/lib/notion/products'
import createContext from '@/lib/utils/createContext'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

interface IProductsContext {
  loading: boolean
  hasMore: boolean
  data: IProduct[]
  page?: string
  loadMore: () => void
}

const [Provider, useContext] = createContext<IProductsContext>({
  name: 'ProductsContext',
})

export const useProductsContext = useContext

export default function ProductsContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()

  const category = searchParams?.get('category') as string
  const tag = searchParams?.get('tag') as string
  const search = searchParams?.get('search') as string

  const [loading, setLoading] = useState<boolean>(true)
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [data, setData] = useState<IProduct[]>([])
  const [nextPage, setNextPage] = useState<string | undefined>(undefined)

  useEffect(() => {
    setLoading(true)
    if (search) {
      setNextPage
      setData([])
    }
    axios
      .get('/api/products', {
        params: { page_size: 9, start_cursor: nextPage, category, tag, search },
      })
      .then(({ data: resp }: any) => {
        setData(resp.results)
        setHasMore(resp.has_more)
        setNextPage(resp.next_cursor)
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false)
      })
  }, [nextPage, category, tag, search])

  const loadMore = useCallback(() => {
    axios
      .get('/api/products', {
        params: { page_size: 9, start_cursor: nextPage, category, tag, search },
      })
      .then(({ data: resp }: any) => {
        setData((prev) => [...prev, ...resp.results])
        setHasMore(resp.has_more)
        setNextPage(resp.next_cursor)
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false)
      })
  }, [nextPage, category, tag, search])

  return (
    <Provider
      value={{
        loading: loading,
        hasMore,
        data,
        loadMore,
      }}
    >
      {children}
    </Provider>
  )
}
