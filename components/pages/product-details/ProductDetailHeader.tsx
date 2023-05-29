import { IProduct } from '@/lib/notion/products'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function ProductDetailHeader({ data }: { data: IProduct }) {
  return (
    <div className="px-0 md:px-6 lg:px-12">
      <h1 className="text-3xl font-bold">
        {data.properties.Title.title[0]?.plain_text}
      </h1>
      <div>{data.properties.Rate?.select?.name}</div>
      <div className="divide-y">
        <div className="py-2">
          <ReactMarkdown>
            {data.properties.Summary?.rich_text[0]?.plain_text.replaceAll(
              '\n',
              '\n\n\n',
            )}
          </ReactMarkdown>
        </div>
        <div className="py-2">
          <h2 className="text-xl font-semibold">THÔNG TIN SẢN PHẨM</h2>
          <ReactMarkdown>
            {data.properties.Spec?.rich_text[0]?.plain_text.replaceAll(
              '\n',
              '\n\n',
            )}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
