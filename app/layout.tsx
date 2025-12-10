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
    default: 'Omni Tech Solutions - Professional Technology Services',
    template: '%s | Omni Tech Solutions'
  },
  description: 'Professional technology services for businesses and homes. Web design, local networks, video surveillance, smartphone repair, custom software development, and IT solutions.',
  keywords: [
    'technology services',
    'web design',
    'web development',
    'local networks',
    'video surveillance',
    'CCTV installation',
    'smartphone repair',
    'IT solutions',
    'network setup',
    'custom software',
    'Bulgaria',
    'технологични услуги',
    'уеб дизайн',
    'локални мрежи',
    'видеонаблюдение',
    'ремонт смартфони'
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
    title: 'Omni Tech Solutions - Professional Technology Services',
    description: 'Professional technology services for businesses and homes. Web design, local networks, video surveillance, smartphone repair, and IT solutions.',
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
    title: 'Omni Tech Solutions - Professional Technology Services',
    description: 'Professional technology services for businesses and homes. Web design, local networks, video surveillance, smartphone repair, and IT solutions.',
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
