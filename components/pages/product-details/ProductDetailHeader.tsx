import NotionRichText from '@/components/NotionRichtext'
import { IProduct } from '@/lib/notion/products'

export default function ProductDetailHeader({ data }: { data: IProduct }) {
  return (
    <div className="px-0 md:px-6 lg:px-12">
      <h1 className="text-3xl font-bold">
        {data.properties.Title.title[0]?.plain_text}
      </h1>
      <div>{data.properties.Rate?.select?.name}</div>
      <div className="divide-y">
        <div className="py-2">
          <NotionRichText items={data.properties.Summary?.rich_text as any} />
        </div>
        <div className="py-2">
          <h2 className="text-xl font-semibold">THÔNG TIN SẢN PHẨM</h2>
          <NotionRichText items={data.properties.Spec?.rich_text as any} />
        </div>
      </div>
    </div>
  )
}
