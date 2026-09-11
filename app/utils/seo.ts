export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
}

export const siteConfig = {
  name: 'Omni Tech Solutions',
  url: 'https://tech.omni-solutions.co',
  ogImage: 'https://tech.omni-solutions.co/og-image.jpg',
  description: {
    en: 'Custom software and network installation, plus websites, PC support and video surveillance for homes and businesses in Bulgaria. Free consultation.',
    bg: 'Софтуер по поръчка и изграждане на мрежи, плюс уебсайтове, компютърна поддръжка и видеонаблюдение за дома и бизнеса в България. Безплатна консултация.',
    tr: 'Özel yazılım ve ağ kurulumu; ayrıca Bulgaristan\'da evler ve işletmeler için web siteleri, bilgisayar desteği ve güvenlik kameraları. Ücretsiz danışmanlık.'
  },
  keywords: {
    en: 'custom software Bulgaria, network setup Bulgaria, IT services Bulgaria, website for business, computer repair, video surveillance, CCTV installation',
    bg: 'софтуер по поръчка България, изграждане на мрежи, ИТ услуги, изработка на сайт, компютърен сервиз, видеонаблюдение, монтаж на камери',
    tr: 'özel yazılım Bulgaristan, ağ kurulumu, BT hizmetleri, web sitesi, bilgisayar servisi, güvenlik kamerası, kamera montajı'
  },
  social: {
    email: 'support@omni-solutions.co'
  }
};

export const generateMetadata = (
  locale: 'bg' | 'en' | 'tr',
  pageTitle?: string,
  pageDescription?: string,
  pagePath?: string
): SEOMetadata => {
  const title = pageTitle
    ? `${pageTitle} | ${siteConfig.name}`
    : `${siteConfig.name} - Professional Technology Services`;

  const description = pageDescription || siteConfig.description[locale];
  const keywords = siteConfig.keywords[locale];
  const canonical = pagePath ? `${siteConfig.url}${pagePath}` : siteConfig.url;

  return {
    title,
    description,
    keywords,
    ogImage: siteConfig.ogImage,
    canonical
  };
};

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Omni Tech Solutions',
    url: 'https://tech.omni-solutions.co',
    logo: 'https://tech.omni-solutions.co/assets/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@omni-solutions.co',
      availableLanguage: ['Bulgarian', 'English', 'Turkish']
    },
    sameAs: [
      // Add social media profiles here when available
    ]
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://tech.omni-solutions.co',
    name: 'Omni Tech Solutions',
    image: 'https://tech.omni-solutions.co/assets/logo.png',
    email: 'support@omni-solutions.co',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BG'
    },
    areaServed: { '@type': 'Country', name: 'България' },
    geo: {
      '@type': 'GeoCoordinates'
      // Add coordinates when available
    },
    url: 'https://tech.omni-solutions.co',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    }
  },

  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://tech.omni-solutions.co/#website',
    url: 'https://tech.omni-solutions.co',
    name: 'Omni Tech Solutions',
    description: 'Софтуерни решения, мрежи и ИТ услуги за дома и бизнеса',
    publisher: {
      '@id': 'https://tech.omni-solutions.co/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://tech.omni-solutions.co/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['bg', 'en', 'tr']
  }
};

export const generateServiceStructuredData = (service: {
  id: string;
  name: string;
  description: string;
  price?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  provider: {
    '@type': 'Organization',
    name: 'Omni Tech Solutions',
    url: 'https://tech.omni-solutions.co'
  },
  description: service.description,
  areaServed: {
    '@type': 'Country',
    name: 'България'
  },
  ...(service.price && {
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'EUR'
    }
  })
});

export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});
