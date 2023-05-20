import CategoryList from '@/components/pages/products/CategoryList'
import ProductList from '@/components/pages/products/ProductList'
import TagsList from '@/components/pages/products/TagList'

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <main className="min-h-screen max-w-[86rem] mx-auto py-6 md:px-0 flex items-start justify-between">
      <div className="hidden md:block w-0 md:w-80">
        <div className="space-y-6">
          <input
            className="box-border w-full flex py-2 md:py-3 px-6 border border-gray-400 appearance-none items-center justify-center rounded-lg text-sm leading-none"
            type="text"
            required
            placeholder="Tìm kiếm sản phẩm"
          />
          {/* @ts-ignore */}
          <CategoryList active={searchParams['category']} />
          {/* @ts-ignore */}
          <TagsList active={searchParams['tag']} />
        </div>
      </div>
      <div className="flex-1 px-6">
        <ProductList searchParams={searchParams} />
      </div>
    </main>
  )
}
