"use client"

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

// Documentação de referência: 
// https://ads.tiktok.com/help/article/nextjs-pixel?lang=en
// https://github.com/tiktok-ads-volcengine/tiktok-pixel-next-js

const TIKTOK_PIXEL_ID = 'D42BL4BC77U4F6VQIEP0'

declare global {
  interface Window {
    ttq: any
  }
}

export const TikTokPixel = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (window.ttq) {
      window.ttq.page()
    }
  }, [pathname])

  return (
    <>
      <Script
        id="tiktok-pixel-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=r+"?sdkid="+e+"&lib="+t;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(a,s)};
              ttq.load('${TIKTOK_PIXEL_ID}');
              ttq.page();
            }(window, document, 'ttq');
          `,
        }}
      />
    </>
  )
}
