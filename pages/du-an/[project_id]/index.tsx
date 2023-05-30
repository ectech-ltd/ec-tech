import NotionRichText from '@/components/NotionRichtext'
import NotionPageContent from '@/components/pages/product-details/NotionPageContent'
import ImageGallery from '@/components/pages/project-details/ImageGallery'
import NotionClient from '@/lib/notion'
import { IProject } from '@/lib/notion/project'
import { last } from 'lodash'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NextSeo } from 'next-seo'

export const getServerSideProps: GetServerSideProps<{
  data: IProject
  pageContent: any
}> = async (ctx) => {
  try {
    const { project_id } = ctx.params as any
    const productID = last(project_id.split('.')) as string

    const [resp] = await Promise.all([NotionClient.getProject(productID)])
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
        title={data.properties.Page.title[0]?.plain_text}
        openGraph={{
          images: [{ url: data.properties.Photos.files[0]?.file?.url }].filter(
            Boolean,
          ),
        }}
      />
      <ImageGallery data={data.properties.Photos?.files || []} />
      <div className="min-h-screen max-w-6xl mx-auto py-6 px-6 md:px-6 lg:px-12">
        <h1 className="text-lg md:text-3xl font-bold">
          <NotionRichText items={data.properties.Page.title as any} />
        </h1>
        <NotionPageContent recordMap={pageContent} />
      </div>
    </>
  )
}
