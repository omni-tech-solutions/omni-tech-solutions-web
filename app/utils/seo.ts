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
    en: 'Professional technology services for businesses and homes. Web design, local networks, video surveillance, smartphone repair, and more.',
    bg: 'Професионални технологични услуги за бизнеса и дома. Уеб дизайн, локални мрежи, видеонаблюдение, ремонт на смартфони и още.',
    tr: 'İşletmeler ve evler için profesyonel teknoloji hizmetleri. Web tasarım, yerel ağlar, video gözetim, akıllı telefon tamiri ve daha fazlası.'
  },
  keywords: {
    en: 'technology services, web design, local networks, video surveillance, smartphone repair, IT solutions, web development, network setup, CCTV installation',
    bg: 'технологични услуги, уеб дизайн, локални мрежи, видеонаблюдение, ремонт смартфони, IT решения, уеб разработка, мрежова настройка, видеонаблюдение',
    tr: 'teknoloji hizmetleri, web tasarım, yerel ağlar, video gözetim, akıllı telefon tamiri, BT çözümleri, web geliştirme, ağ kurulumu, CCTV kurulumu'
  },
  social: {
    email: 'support@omni-solutions.co',
    phone: '+359899350531'
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
      telephone: '+359899350531',
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
    telephone: '+359899350531',
    email: 'support@omni-solutions.co',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BG'
    },
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
    description: 'Professional technology services for businesses and homes',
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
    name: 'Bulgaria'
  },
  ...(service.price && {
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'BGN'
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
