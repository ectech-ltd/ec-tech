import AboutUs from '@/components/pages/home/AboutUs'
import ContactForm from '@/components/pages/home/ContactForm'
import HighlightProducts from '@/components/pages/home/HighlightProducts'
import HighlightProjects from '@/components/pages/home/HighlightProjects'
import HomePageSlider from '@/components/pages/home/HomePageSlider'
import OurPartners from '@/components/pages/home/OurPartners'
import OurServices from '@/components/pages/home/OurServices'

export default function Home() {
  return (
    <main className="min-h-screen space-y-8 md:space-y-14 px-6 md:px-0">
      <HomePageSlider />
      <AboutUs />
      <OurServices />
      <HighlightProducts />
      <HighlightProjects />
      <ContactForm />
      <OurPartners />
    </main>
  )
}
