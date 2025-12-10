import React from 'react';

interface AdvancedMetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
  locale?: string;
}

/**
 * Advanced meta tags for enhanced social media sharing and SEO
 * Includes Pinterest, WhatsApp, Telegram, and other platform-specific tags
 */
export const AdvancedMetaTags: React.FC<AdvancedMetaTagsProps> = ({
  title,
  description,
  image,
  url,
  type = 'website',
  locale = 'bg_BG'
}) => {
  return (
    <>
      {/* Extended Open Graph tags */}
      <meta property="og:site_name" content="OMNI Tech Solutions" />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />

      {/* Article-specific tags (if type is article) */}
      {type === 'article' && (
        <>
          <meta property="article:publisher" content="OMNI Tech Solutions" />
          <meta property="article:author" content="OMNI Tech Solutions" />
        </>
      )}

      {/* Pinterest-specific tags */}
      <meta name="pinterest-rich-pin" content="true" />
      <meta property="og:see_also" content={url} />

      {/* WhatsApp optimization */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Telegram optimization */}
      <meta property="telegram:card" content="summary_large_image" />
      <meta property="telegram:title" content={title} />
      <meta property="telegram:description" content={description} />
      {image && <meta property="telegram:image" content={image} />}

      {/* Apple-specific tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="OMNI Tech" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Microsoft-specific tags */}
      <meta name="msapplication-TileColor" content="#ff6b1a" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* PWA tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="OMNI Tech Solutions" />

      {/* Additional SEO tags */}
      <meta name="author" content="OMNI Tech Solutions" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="BG" />
      <meta name="geo.placename" content="Bulgaria" />

      {/* Business/Organization tags */}
      <meta name="classification" content="Technology Services" />
      <meta name="category" content="Technology" />

      {/* Referrer policy */}
      <meta name="referrer" content="origin-when-cross-origin" />

      {/* Disable auto-detection of phone numbers on iOS (if needed) */}
      {/* <meta name="format-detection" content="telephone=no" /> */}
    </>
  );
};
