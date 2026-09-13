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
  ogImage: 'https://tech.omni-solutions.co/og/home.png',
  description: {
    en: 'Custom software and network installation, plus websites, PC support and video surveillance for homes and businesses in Bulgaria. Free consultation.',
    bg: 'Софтуер по поръчка и изграждане на мрежи, както и уебсайтове, компютърна поддръжка и видеонаблюдение за дома и бизнеса в България. Безплатна консултация.',
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
    '@id': 'https://tech.omni-solutions.co/#organization',
    name: 'Omni Tech Solutions',
    url: 'https://tech.omni-solutions.co',
    // Square PNG of the same coral mark as the header (scripts/brand/generate-icons.py)
    logo: {
      '@type': 'ImageObject',
      url: 'https://tech.omni-solutions.co/assets/brand/logo-512.png',
      width: 512,
      height: 512
    },
    image: 'https://tech.omni-solutions.co/assets/brand/logo-512.png',
    description: 'Софтуерни решения и ИТ инфраструктура за дома и бизнеса',
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
    '@id': 'https://tech.omni-solutions.co/#localbusiness',
    name: 'Omni Tech Solutions',
    image: 'https://tech.omni-solutions.co/assets/brand/logo-512.png',
    logo: 'https://tech.omni-solutions.co/assets/brand/logo-512.png',
    email: 'support@omni-solutions.co',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BG'
    },
    areaServed: { '@type': 'Country', name: 'България' },
    url: 'https://tech.omni-solutions.co',
    priceRange: '$$',
    // Same hours as the site shows: Mon–Fri 9:00–18:00
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
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
    inLanguage: 'bg'
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
