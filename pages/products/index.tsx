import CategoryList from '@/components/pages/products/CategoryList'
import HighlightedProducts from '@/components/pages/products/HighlightedProducts'
import MobileFilter from '@/components/pages/products/MobileFilter'
import ProductList from '@/components/pages/products/ProductList'
import { ProductSearchBox } from '@/components/pages/products/ProductSearchBox'
import TagsList from '@/components/pages/products/TagList'
import ProductsContextProvider from '@/components/pages/products/context'
import NotionClient from '@/lib/notion'
import { ICategory } from '@/lib/notion/categories'
import { IProduct } from '@/lib/notion/products'
import { ITag } from '@/lib/notion/tags'
import { last } from 'lodash'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NextSeo } from 'next-seo'

export const getServerSideProps: GetServerSideProps<{
  categories: ICategory[]
  tags: ITag[]
  hightedProducts: IProduct[]
  searchParams: { [key: string]: string | string[] | undefined }
}> = async (ctx) => {
  try {
    const [tagResp, catResp, productRsp] = await Promise.all([
      NotionClient.getTags(),
      NotionClient.getCategories(),
      NotionClient.getHightedProducts(),
    ])

    return {
      props: {
        tags: tagResp.results,
        categories: catResp.results,
        hightedProducts: productRsp.results,
        searchParams: ctx.query,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default function Page({
  tags,
  categories,
  hightedProducts,
  searchParams,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo title="Sản phẩm" />
      <main className="min-h-screen max-w-6xl px-6 lg:px-12 mx-auto py-6 flex items-start justify-between flex-wrap">
        <div className="hidden md:block w-0 md:w-80 lg:w-60">
          <div className="space-y-6">
            <ProductSearchBox />
            <CategoryList
              data={categories}
              active={searchParams['category'] as string}
            />
            <HighlightedProducts data={hightedProducts} />
            <TagsList data={tags} active={searchParams['tag'] as string} />
          </div>
        </div>
        <ProductsContextProvider>
          <div className="flex-1">
            <div className="block mb-4 md:hidden space-y-4">
              <MobileFilter tags={tags} categories={categories} />
              <ProductSearchBox />
            </div>
            <ProductList />
          </div>
        </ProductsContextProvider>
      </main>
    </>
  )
}
