import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

const font = Montserrat({ subsets: ['latin'] })

import { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'

const seoTitle = 'EC-Tech'
const seoDescription =
  'Công ty TNHH Ec-Tech là một công ty khởi nghiệp về thi công lắp đặt điện tái tạo, tập trung vào việc giảm thiểu lượng khí thải carbon và góp phần bảo vệ môi trường thông qua sử dụng năng lượng xanh.'

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  category: 'Energy, Solar, Wind, Green',
  keywords: ['Energy, Solar, Wind, Green, Battery, Inverter, Solar Panel'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'dKftmTMDSJoq_9_0fMAJYXihdQXiHToSlgrf1A8YHlQ',
  },
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
  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
    images: ['https://ec-tech.vn/img/solar-panel.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <body className={font.className}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9HMGVT2JTS"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9HMGVT2JTS', {
                page_path: window.location.pathname,
              });
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
          nonce="KvW1uplp"
        />
      </body>
    </html>
  )
}
