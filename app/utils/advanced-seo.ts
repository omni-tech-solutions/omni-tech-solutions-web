import { siteConfig } from './seo';

/**
 * Advanced SEO utilities for competitive advantage
 */

// FAQ Schema Generator
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

// Review/Rating Schema Generator
export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OMNI Tech Solutions',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length,
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1
  },
  review: reviews.map(review => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1
    }
  }))
});

// Product/Service Offer Schema
export const generateOfferSchema = (service: {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: service.name,
  description: service.description,
  seller: {
    '@type': 'Organization',
    name: 'OMNI Tech Solutions'
  },
  ...(service.price && {
    price: service.price,
    priceCurrency: service.priceCurrency || 'BGN'
  }),
  availability: service.availability || 'https://schema.org/InStock',
  url: siteConfig.url,
  priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
});

// Article Schema for Blog Posts
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.image || siteConfig.ogImage,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Person',
    name: article.author
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/assets/logo.png`
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url
  }
});

// HowTo Schema for Guides
export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string; image?: string }>;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  ...(howTo.totalTime && { totalTime: howTo.totalTime }),
  step: howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    ...(step.image && { image: step.image })
  }))
});

// Video Schema
export const generateVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  ...(video.duration && { duration: video.duration }),
  ...(video.contentUrl && { contentUrl: video.contentUrl }),
  ...(video.embedUrl && { embedUrl: video.embedUrl })
});

// Enhanced LocalBusiness with Service Areas
export const generateEnhancedLocalBusinessSchema = (options?: {
  address?: string;
  city?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  serviceAreas?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#localbusiness`,
  name: 'OMNI Tech Solutions',
  image: `${siteConfig.url}/assets/logo.png`,
  telephone: siteConfig.social.phone,
  email: siteConfig.social.email,
  url: siteConfig.url,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BG',
    ...(options?.city && { addressLocality: options.city }),
    ...(options?.address && { streetAddress: options.address }),
    ...(options?.postalCode && { postalCode: options.postalCode })
  },
  ...(options?.latitude && options?.longitude && {
    geo: {
      '@type': 'GeoCoordinates',
      latitude: options.latitude,
      longitude: options.longitude
    }
  }),
  ...(options?.serviceAreas && {
    areaServed: options.serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    }))
  }),
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
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Technology Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design & Development',
          description: 'Custom website design and development services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Local Network Setup',
          description: 'Professional local network installation and configuration'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Video Surveillance',
          description: 'CCTV and video surveillance system installation'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Consulting',
          description: 'Professional IT consulting and support services'
        }
      }
    ]
  }
});

// SiteNavigationElement Schema
export const generateSiteNavigationSchema = (navigationItems: Array<{
  name: string;
  url: string;
  position: number;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'Main Navigation',
  url: siteConfig.url,
  hasPart: navigationItems.map(item => ({
    '@type': 'WebPage',
    name: item.name,
    url: item.url,
    position: item.position
  }))
});

// ContactPoint Schema
export const generateContactPointSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'OMNI Tech Solutions',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.social.phone,
        contactType: 'customer service',
        email: siteConfig.social.email,
        availableLanguage: ['Bulgarian', 'English', 'Turkish'],
        areaServed: 'BG',
        hoursAvailable: {
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
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        email: siteConfig.social.email,
        availableLanguage: ['Bulgarian', 'English', 'Turkish']
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteConfig.social.email,
        telephone: siteConfig.social.phone,
        availableLanguage: ['Bulgarian', 'English', 'Turkish']
      }
    ]
  }
});

// Professional Service Schema
export const generateProfessionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OMNI Tech Solutions',
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/logo.png`,
  image: `${siteConfig.url}/assets/logo.png`,
  telephone: siteConfig.social.phone,
  email: siteConfig.social.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BG'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Bulgaria'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Professional Technology Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Web Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Design',
              serviceType: 'Web Design & Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Applications',
              serviceType: 'Custom Web Application Development'
            }
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'IT Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Network Setup',
              serviceType: 'Local Network Installation'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Support',
              serviceType: 'Technical Support & Consulting'
            }
          }
        ]
      }
    ]
  }
});

// Event Schema (for workshops, webinars, etc.)
export const generateEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  online?: boolean;
  url?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.name,
  description: event.description,
  startDate: event.startDate,
  ...(event.endDate && { endDate: event.endDate }),
  eventAttendanceMode: event.online
    ? 'https://schema.org/OnlineEventAttendanceMode'
    : 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  ...(event.location && {
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BG'
      }
    }
  }),
  organizer: {
    '@type': 'Organization',
    name: 'OMNI Tech Solutions',
    url: siteConfig.url
  }
});
