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
        <Script id="fb-chat" strategy="afterInteractive">
          {`
              var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "121862930891360");
              chatbox.setAttribute("attribution", "biz_inbox");
          `}
        </Script>
        <Script id="fb-sdk" strategy="afterInteractive">
          {`
              window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v17.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />

        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat" />
        <div
          className="zalo-chat-widget !bottom-[100px] !right-[28px]"
          data-oaid="2289315392676983323"
          data-welcome-message="Rất vui khi được hỗ trợ bạn!"
          data-autopopup="0"
          data-width=""
          data-height=""
        />
        <div className="fixed !bottom-[164px] !right-[32px] h-[52px] w-[52px] rounded-full bg-gradient-to-br from-green-200  to-orange-200 overflow-hidden p-3 shadow">
          <a href="tel:0936241501">
            <svg version="1.1" id="Capa_1" viewBox="0 0 202.592 202.592">
              <g>
                <g>
                  <path
                    style={{ fill: '#010002' }}
                    d={`M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761
      c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874
			c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769
			c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816
			c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055
			c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747
			C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507
			c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235
			C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497
			c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282
			c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067
			c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279
			C193.5,169.446,193.31,173.537,190.683,176.164z`}
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
          nonce="KvW1uplp"
        />
        <script src="https://sp.zalo.me/plugins/sdk.js" async defer />
      </body>
    </Html>
  )
}
