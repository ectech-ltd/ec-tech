import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'EC-TECH',
  description: 'EC-TECH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
