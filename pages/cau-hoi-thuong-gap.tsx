import NotionPageContent from '@/components/pages/product-details/NotionPageContent'
import NotionClient from '@/lib/notion'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NextSeo } from 'next-seo'

export const getServerSideProps: GetServerSideProps<{
  pageContent: any
}> = async (ctx) => {
  try {
    const [resp] = await Promise.all([NotionClient.getFaqs()])
    return {
      props: {
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
  pageContent,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo
        title="Câu hỏi thường gặp"
        openGraph={{
          images: [{ url: '/img/logo-text.png' }],
        }}
      />
      <div className="min-h-screen max-w-6xl mx-auto py-6 px-6 md:px-6 lg:px-12">
        <NotionPageContent recordMap={pageContent} />
      </div>
    </>
  )
}
