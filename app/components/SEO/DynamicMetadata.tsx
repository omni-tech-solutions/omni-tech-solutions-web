'use client';

import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/app/utils/seo';

interface DynamicMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  path?: string;
  structuredData?: object;
}

export const DynamicMetadata: React.FC<DynamicMetadataProps> = ({
  title,
  description,
  keywords,
  ogImage,
  path = '',
  structuredData
}) => {
  const { i18n } = useTranslation();
  const locale = i18n.language as 'bg' | 'en' | 'tr';

  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Professional Technology Services`;

  const metaDescription = description || siteConfig.description[locale];
  const metaKeywords = keywords || siteConfig.keywords[locale];
  const canonicalUrl = `${siteConfig.url}${path}`;
  const imageUrl = ogImage || siteConfig.ogImage;

  // Generate alternate language URLs
  const alternateUrls = {
    bg: `${siteConfig.url}${path}`,
    en: `${siteConfig.url}/en${path}`,
    tr: `${siteConfig.url}/tr${path}`
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="bg" href={alternateUrls.bg} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="tr" href={alternateUrls.tr} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.bg} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={locale === 'bg' ? 'bg_BG' : locale === 'en' ? 'en_US' : 'tr_TR'} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};
