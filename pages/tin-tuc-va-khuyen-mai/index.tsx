import BlogList from '@/components/pages/blogs/BlogList'
import NotionClient from '@/lib/notion'
import { IBlogsResp } from '@/lib/notion/blogs'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NextSeo } from 'next-seo'
import { useState } from 'react'

export const getServerSideProps: GetServerSideProps<{
  initialData: IBlogsResp
}> = async (ctx) => {
  try {
    const [resp] = await Promise.all([
      NotionClient.getBlogs({
        page_size: 10,
      }),
    ])

    return {
      props: {
        initialData: resp,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default function Page({
  initialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [data, setData] = useState(initialData?.results)
  const [page, setPage] = useState(initialData?.next_cursor)
  const [hasMore, setHasMore] = useState(initialData.has_more)
  const [loading, setLoading] = useState(false)

  const onLoadMore = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `/api/blogs?next_cursor=${page}&page_size=10`,
      )
      setData([...data.results])
      setPage(data.next_cursor)
      setHasMore(data.has_more)
    } catch (err) {
      console.error('[ERROR]', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <NextSeo title="Tin tức & Khuyến mãi" />
      <div className="min-h-screen max-w-6xl px-6 lg:px-12 mx-auto py-6">
        <BlogList data={data} />
        {hasMore && (
          <div className="flex w-full justify-center">
            <button
              className="box-border bg-[#0571FA] hover:bg-opacity-80 px-8 py-2 md:py-3 rounded-lg text-white text-sm font-semibold"
              onClick={onLoadMore}
              disabled={loading}
            >
              {loading ? 'Đang tải...' : 'Xem thêm'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
