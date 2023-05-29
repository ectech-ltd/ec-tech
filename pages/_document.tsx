import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
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
      </Head>
      <body>
        <Main />
        <NextScript />

        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
          nonce="KvW1uplp"
        />
      </body>
    </Html>
  )
}
