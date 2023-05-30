/* eslint-disable @next/next/no-img-element */
import NotionRichText from '@/components/NotionRichtext'
import NotionPageContent from '@/components/pages/product-details/NotionPageContent'
import NotionClient from '@/lib/notion'
import { IBlog } from '@/lib/notion/blogs'
import { last } from 'lodash'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NextSeo } from 'next-seo'

export const getServerSideProps: GetServerSideProps<{
  data: IBlog
  pageContent: any
}> = async (ctx) => {
  try {
    const { blog_id } = ctx.params as any
    const productID = last(blog_id.split('.')) as string

    const [resp] = await Promise.all([NotionClient.getBlog(productID)])
    return {
      props: {
        data: resp.data,
        pageContent: resp.pageContent,
      },
    }
  } catch (err) {
    console.error(`[ERROR]`, err)
    return {
      notFound: true,
    }
  }
}

export default function Page({
  data,
  pageContent,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo
        title={data.properties.Title.title[0]?.plain_text}
        openGraph={{
          images: [
            {
              url:
                data.cover.external?.url ||
                data.cover.file?.url ||
                '/img/solar-panel.png',
            },
          ].filter(Boolean),
        }}
      />
      <img
        src={data.cover.external?.url || data.cover.file?.url}
        className="w-screen h-full object-cover"
        alt={data.properties.Title.title[0]?.plain_text}
      />
      <div className="min-h-screen max-w-6xl mx-auto py-6 px-6 md:px-6 lg:px-12">
        <h1 className="text-lg md:text-3xl font-bold">
          <NotionRichText items={data.properties.Title.title as any} />
        </h1>
        <NotionPageContent recordMap={pageContent} />
      </div>
    </>
  )
}
