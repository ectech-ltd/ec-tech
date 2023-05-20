import ImageGallery from '@/components/pages/product-details/ImageGallery'
import NotionPageContent from '@/components/pages/product-details/NotionPageContent'
import ProductDetailHeader from '@/components/pages/product-details/ProductDetailHeader'
import NotionClient from '@/lib/notion'
import { last } from 'lodash'

export default async function Page({
  params,
}: {
  params: { product_id: string }
}) {
  const productID = last(params.product_id.split('.'))

  const resp = await NotionClient.getProduct(productID!)

  return (
    <main className="min-h-screen max-w-[86rem] mx-auto py-6 md:px-0">
      <div className="flex items-start justify-between">
        <div className="w-full md:w-1/3">
          <ImageGallery data={resp.data.properties.Photos.files} />
        </div>
        <div className="w-full md:w-2/3">
          <ProductDetailHeader data={resp.data} />
        </div>
      </div>
      <NotionPageContent recordMap={resp.pageContent} />
    </main>
  )
}
