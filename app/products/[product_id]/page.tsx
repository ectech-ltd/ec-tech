import ImageGallery from '@/components/pages/product-details/ImageGallery'
import NotionPageContent from '@/components/pages/product-details/NotionPageContent'
import ProductDetailHeader from '@/components/pages/product-details/ProductDetailHeader'
import ProductList from '@/components/pages/product-details/ProductList'
import NotionClient from '@/lib/notion'
import { last } from 'lodash'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = last(params.product_id.split('.')) as string

  // fetch data
  const product = await NotionClient.getProduct(id, true)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  const previousImagesTw = (await parent).twitter?.images || []

  return {
    title: [
      product.data.properties.Title.title[0]?.plain_text,
      'EC-Tech.vn',
    ].join(' | '),
    openGraph: {
      images: [
        product.data.properties.Photos.files[0]?.file?.url,
        ...previousImages,
      ].filter(Boolean),
    },
    twitter: {
      images: [
        product.data.properties.Photos.files[0]?.file?.url,
        ...previousImagesTw,
      ].filter(Boolean),
    },
  }
}

export default async function Page({
  params,
}: {
  params: { product_id: string }
}) {
  const productID = last(params.product_id.split('.'))

  const [resp, relatedProducts] = await Promise.all([
    NotionClient.getProduct(productID!),
    NotionClient.getRelatedProducts(productID!),
  ])
  console.log(`>>>resp.pageContent`, resp.pageContent)

  return (
    <main className="min-h-screen max-w-[86rem] mx-auto py-6 px-6 md:px-0">
      <div className="flex items-start flex-wrap justify-between">
        <div className="w-full md:w-1/3">
          <ImageGallery data={resp.data.properties.Photos.files} />
        </div>
        <div className="w-full md:w-2/3 mt-6 md:mt-0">
          <ProductDetailHeader data={resp.data} />
        </div>
      </div>
      <NotionPageContent recordMap={resp.pageContent} />
      <ProductList data={relatedProducts} />
    </main>
  )
}
