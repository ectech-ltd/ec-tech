import CategoryList from '@/components/pages/products/CategoryList'
import HighlightedProducts from '@/components/pages/products/HighlightedProducts'
import MobileFilter from '@/components/pages/products/MobileFilter'
import ProductList from '@/components/pages/products/ProductList'
import { ProductSearchBox } from '@/components/pages/products/ProductSearchBox'
import TagsList from '@/components/pages/products/TagList'
import ProductsContextProvider from '@/components/pages/products/context'
import NotionClient from '@/lib/notion'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [tagResp, catResp, productRsp] = await Promise.all([
    NotionClient.getTags(),
    NotionClient.getCategories(),
    NotionClient.getHightedProducts(),
  ])
  return (
    <main className="min-h-screen max-w-[86rem] mx-auto py-6 md:px-0 flex items-start justify-between flex-wrap">
      <div className="hidden md:block w-0 md:w-80">
        <div className="space-y-6">
          <ProductSearchBox />
          <CategoryList
            data={catResp.results}
            active={searchParams['category'] as string}
          />
          <HighlightedProducts data={productRsp.results} />
          <TagsList
            data={tagResp.results}
            active={searchParams['tag'] as string}
          />
        </div>
      </div>
      <ProductsContextProvider>
        <div className="flex-1 px-6">
          <div className="block mb-4 md:hidden space-y-4">
            <MobileFilter tags={tagResp.results} categories={catResp.results} />
            <ProductSearchBox />
          </div>
          <ProductList />
        </div>
      </ProductsContextProvider>
    </main>
  )
}
