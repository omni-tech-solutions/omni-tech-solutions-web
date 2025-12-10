import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tech.omni-solutions.co';
  const lastModified = new Date();

  // Define your services - you can make this dynamic by reading from your translations
  const services = [
    'web-design',
    'local-networks',
    'video-surveillance',
    'smartphone-repair',
    'software-development',
    'it-consulting'
  ];

  const locales = ['bg', 'en', 'tr'];

  // Homepage entries for each language
  const homepages = locales.map(locale => ({
    url: locale === 'bg' ? baseUrl : `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
    alternates: {
      languages: Object.fromEntries(
        locales.map(l => [l, l === 'bg' ? baseUrl : `${baseUrl}/${l}`])
      )
    }
  }));

  // Service pages for each language
  const servicePages = services.flatMap(service =>
    locales.map(locale => ({
      url: locale === 'bg'
        ? `${baseUrl}/services/${service}`
        : `${baseUrl}/${locale}/services/${service}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [
            l,
            l === 'bg'
              ? `${baseUrl}/services/${service}`
              : `${baseUrl}/${l}/services/${service}`
          ])
        )
      }
    }))
  );

  return [
    ...homepages,
    ...servicePages
  ];
}
