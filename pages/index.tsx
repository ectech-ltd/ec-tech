import AboutUs from '@/components/pages/home/AboutUs'
import ContactForm from '@/components/pages/home/ContactForm'
import HighlightProducts from '@/components/pages/home/HighlightProducts'
import HighlightProjects from '@/components/pages/home/HighlightProjects'
import HomePageSlider from '@/components/pages/home/HomePageSlider'
import OurPartners from '@/components/pages/home/OurPartners'
import OurServices from '@/components/pages/home/OurServices'
import NotionClient from '@/lib/notion'
import { IProduct } from '@/lib/notion/products'
import { IProject } from '@/lib/notion/project'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps<{
  hightedProducts: IProduct[]
  projects: IProject[]
  searchParams: { [key: string]: string | string[] | undefined }
  homeBanners: Array<{ id: string; url?: string; name: string; photo: string }>
  services: Array<{
    id: string
    photo: string
    title: any
    content: any
    url?: string
  }>
}> = async (ctx) => {
  try {
    const [productRsp, cfg, projects] = await Promise.all([
      NotionClient.getHightedProducts(),
      NotionClient.getConfigs(),
      NotionClient.getProjects({ highlighted: true }),
    ])

    return {
      props: {
        hightedProducts: productRsp.results,
        searchParams: ctx.query,
        homeBanners: cfg.homeBanners as any,
        services: cfg.services,
        projects: projects.results || [],
      },
    }
  } catch (err) {
    console.log(`[ERROR]`, err)
    return {
      notFound: true,
    }
  }
}

export default function Page({
  hightedProducts,
  homeBanners,
  services,
  projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="min-h-screen">
      <HomePageSlider data={homeBanners} />
      <div className="px-6 mt-8 md:mt-14 space-y-8 md:space-y-14">
        <AboutUs />
        <OurServices data={services} />
        <HighlightProducts data={hightedProducts} />
        <HighlightProjects data={projects} />
        <ContactForm />
        <OurPartners />
      </div>
    </main>
  )
}
