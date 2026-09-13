import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://tech.omni-solutions.co';

  // One rule for every crawler. /_next/ must stay open: it holds the CSS and
  // JavaScript that Bing, Yandex, DuckDuckGo & co. need to render the page.
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
