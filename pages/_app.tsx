import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { NextSeo, NextSeoProps } from 'next-seo'
const font = Montserrat({ subsets: ['latin'] })

import NProgressHandler from '@/components/NProgressHandler'

const seoTitle = 'ec-tech.vn'
const seoDescription =
  'Công ty TNHH Ec-Tech là một công ty khởi nghiệp về thi công lắp đặt điện tái tạo, tập trung vào việc giảm thiểu lượng khí thải carbon và góp phần bảo vệ môi trường thông qua sử dụng năng lượng xanh.'

const metadata: NextSeoProps = {
  titleTemplate: '%s | ec-tech.vn',
  description: seoDescription,
  canonical: 'https://ec-tech.vn',
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: 'website',
    url: 'https://ec-tech.vn/',
    siteName: 'ec-tech.vn',
    images: [
      {
        url: 'https://ec-tech.vn/img/solar-panel.png',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'google-site-verification',
      content: 'dKftmTMDSJoq_9_0fMAJYXihdQXiHToSlgrf1A8YHlQ',
    },
  ],
  twitter: {
    cardType: 'summary_large_image',
  },
}

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <NextSeo {...metadata} />
      <NProgressHandler />
      <main className={font.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default App
