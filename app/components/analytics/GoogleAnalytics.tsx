import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

/**
 * Google Analytics 4 Component
 *
 * Usage in layout.tsx:
 * import { GoogleAnalytics } from '@/app/components/analytics/GoogleAnalytics';
 *
 * In the component:
 * <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
 */
export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure',
            anonymize_ip: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}

/**
 * Google Tag Manager Component (Alternative)
 *
 * Usage:
 * <GoogleTagManager gtmId="GTM-XXXXXXX" />
 */
export function GoogleTagManager({ gtmId }: { gtmId: string }) {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
