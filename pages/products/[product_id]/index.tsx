import ImageGallery from '@/components/pages/product-details/ImageGallery'
import NotionPageContent from '@/components/pages/product-details/NotionPageContent'
import ProductDetailHeader from '@/components/pages/product-details/ProductDetailHeader'
import ProductList from '@/components/pages/product-details/ProductList'
import NotionClient from '@/lib/notion'
import { IProduct } from '@/lib/notion/products'
import { last } from 'lodash'
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  Metadata,
  ResolvingMetadata,
} from 'next'
import { NextSeo } from 'next-seo'

// export async function generateMetadata(
//   { params }: any,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   // read route params
//   const id = last(params.product_id.split('.')) as string
//   const product = await NotionClient.getProduct(id, true)

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
//   const previousImagesTw = (await parent).twitter?.images || []

//   return {
//   title: [
//     product.data.properties.Title.title[0]?.plain_text,
//     'EC-Tech.vn',
//   ].join(' | '),
//   openGraph: {
//     images: [
//       product.data.properties.Photos.files[0]?.file?.url,
//       ...previousImages,
//     ].filter(Boolean),
//   },
//   twitter: {
//     images: [
//       product.data.properties.Photos.files[0]?.file?.url,
//       ...previousImagesTw,
//     ].filter(Boolean),
//   },
// }
// }

export const getServerSideProps: GetServerSideProps<{
  data: IProduct
  pageContent: string
  relatedProducts: IProduct[]
}> = async (ctx) => {
  try {
    const { product_id } = ctx.params as any
    const productID = last(product_id.split('.')) as string

    const [resp, relatedProducts] = await Promise.all([
      NotionClient.getProduct(productID),
      NotionClient.getRelatedProducts(productID),
    ])
    return {
      props: {
        data: resp.data,
        pageContent: resp.pageContent,
        relatedProducts: relatedProducts || [],
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
  relatedProducts,
  pageContent,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo
        title={data.properties.Title.title[0]?.plain_text}
        openGraph={{
          images: [{ url: data.properties.Photos.files[0]?.file?.url }].filter(
            Boolean,
          ),
        }}
      />
      <main className="min-h-screen max-w-6xl mx-auto py-6 px-6 md:px-6 lg:px-12">
        <div className="flex items-start flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <ImageGallery data={data.properties.Photos?.files || []} />
          </div>
          <div className="w-full md:w-2/3 mt-6 md:mt-0">
            <ProductDetailHeader data={data} />
          </div>
        </div>
        <NotionPageContent recordMap={pageContent} />
        <ProductList data={relatedProducts} />
      </main>
    </>
  )
}
