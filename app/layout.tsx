import type { Metadata, Viewport } from 'next';
import './globals.css';
import { structuredData } from './utils/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tech.omni-solutions.co'),
  title: {
    default: 'Omni Tech Solutions — софтуерни решения, мрежи и ИТ услуги',
    template: '%s | Omni Tech Solutions'
  },
  description: 'Софтуер по поръчка и изграждане на мрежи, плюс уебсайтове, компютърна поддръжка и видеонаблюдение за дома и бизнеса в България. Безплатна консултация.',
  keywords: [
    'софтуер по поръчка България',
    'изграждане на мрежи',
    'Wi-Fi покритие',
    'ИТ услуги',
    'изработка на сайт',
    'видеонаблюдение',
    'монтаж на камери',
    'IP камери',
    'компютърен сервиз',
    'инсталация на Windows',
    'ИТ поддръжка',
    'IT services Bulgaria',
    'CCTV installation Bulgaria'
  ],
  authors: [{ name: 'Omni Tech Solutions' }],
  creator: 'Omni Tech Solutions',
  publisher: 'Omni Tech Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tech.omni-solutions.co',
    languages: {
      'bg': 'https://tech.omni-solutions.co/bg',
      'en': 'https://tech.omni-solutions.co/en',
      'tr': 'https://tech.omni-solutions.co/tr',
    }
  },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    alternateLocale: ['en_US', 'tr_TR'],
    url: 'https://tech.omni-solutions.co',
    siteName: 'Omni Tech Solutions',
    title: 'Omni Tech Solutions — софтуер, мрежи и ИТ услуги',
    description: 'Софтуер по поръчка и мрежи, плюс уебсайтове, компютърна поддръжка и видеонаблюдение за дома и бизнеса.',
    images: [
      {
        url: '/og-image-placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'Omni Tech Solutions - Professional Technology Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omni Tech Solutions — софтуер, мрежи и ИТ услуги',
    description: 'Софтуер по поръчка и мрежи, плюс уебсайтове, компютърна поддръжка и видеонаблюдение за дома и бизнеса.',
    images: ['/og-image-placeholder.svg'],
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://tech.omni-solutions.co" />

        {/* Preload critical assets */}
        <link rel="preload" href="/assets/logo_dark.png" as="image" type="image/png" />
        <link rel="preload" href="/assets/logo_white.png" as="image" type="image/png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.localBusiness)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website)
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
