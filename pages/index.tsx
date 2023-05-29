import AboutUs from '@/components/pages/home/AboutUs'
import ContactForm from '@/components/pages/home/ContactForm'
import HighlightProducts from '@/components/pages/home/HighlightProducts'
import HighlightProjects from '@/components/pages/home/HighlightProjects'
import HomePageSlider from '@/components/pages/home/HomePageSlider'
import OurPartners from '@/components/pages/home/OurPartners'
import OurServices from '@/components/pages/home/OurServices'
import NotionClient from '@/lib/notion'
import { IProduct } from '@/lib/notion/products'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps<{
  hightedProducts: IProduct[]
  searchParams: { [key: string]: string | string[] | undefined }
}> = async (ctx) => {
  try {
    const [productRsp] = await Promise.all([NotionClient.getHightedProducts()])

    return {
      props: {
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
  hightedProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="min-h-screen">
      <HomePageSlider />
      <div className="px-6 mt-8 md:mt-14 space-y-8 md:space-y-14">
        <AboutUs />
        <OurServices />
        <HighlightProducts data={hightedProducts} />
        <HighlightProjects />
        <ContactForm />
        <OurPartners />
      </div>
    </main>
  )
}
