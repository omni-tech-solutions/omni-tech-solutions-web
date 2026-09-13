import { MetadataRoute } from 'next';
import { SERVICE_IDS } from '@/app/config/services';

/**
 * Only URLs that really exist. The language switch happens in the browser, so
 * there are no /en or /tr pages — listing them sent crawlers to 404s.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tech.omni-solutions.co';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Services come straight from the service config so the sitemap cannot drift
    ...SERVICE_IDS.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
