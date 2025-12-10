# SEO Quick Reference Guide

## 🚀 Quick Start

Your website now has comprehensive SEO optimization! Here's what you need to know:

## 📍 Important URLs

Test these URLs after deployment:
- **Homepage:** https://omni-solutions.co
- **Sitemap:** https://omni-solutions.co/sitemap.xml
- **Robots.txt:** https://omni-solutions.co/robots.txt
- **English:** https://omni-solutions.co/en
- **Turkish:** https://omni-solutions.co/tr

## ✅ What's Been Optimized

### 1. **Meta Tags & Social Sharing**
- Page titles with proper templates
- Descriptions for all pages
- Open Graph tags for Facebook, LinkedIn
- Twitter Card tags
- Proper keywords

### 2. **Search Engine Visibility**
- XML Sitemap with all pages
- Robots.txt configured
- Structured data (Organization, LocalBusiness, Website)
- Canonical URLs to prevent duplicate content

### 3. **Multilingual SEO**
- Full support for Bulgarian, English, Turkish
- Automatic language detection
- hreflang tags for international SEO
- Separate URLs for each language

### 4. **Performance**
- Image optimization (AVIF, WebP)
- Resource preloading
- Compression enabled
- Fast page loads

### 5. **Images**
- All images have descriptive alt tags
- Logo optimized for SEO
- Social sharing images configured

## 🛠️ Testing Your SEO

### 1. Test Sitemap & Robots
```bash
# Start your server
npm run dev

# Visit these URLs:
http://localhost:3000/sitemap.xml
http://localhost:3000/robots.txt
```

### 2. Test Structured Data
1. Go to: https://search.google.com/test/rich-results
2. Enter your URL or paste HTML
3. Verify no errors

### 3. Test Social Sharing
1. **Facebook:** https://developers.facebook.com/tools/debug/
2. **Twitter:** https://cards-dev.twitter.com/validator
3. **LinkedIn:** https://www.linkedin.com/post-inspector/

### 4. Test Page Speed
1. Go to: https://pagespeed.web.dev/
2. Enter your URL
3. Check both mobile and desktop scores

## 📊 Monitoring SEO Performance

### Set Up Google Search Console
1. Visit: https://search.google.com/search-console
2. Add your property: https://omni-solutions.co
3. Verify ownership (use HTML file or DNS method)
4. Submit your sitemap: https://omni-solutions.co/sitemap.xml

### Set Up Google Analytics
1. Visit: https://analytics.google.com
2. Create a property for your website
3. Add the tracking code to your site
4. Monitor traffic and user behavior

## 🎯 Key SEO Files

### Configuration Files
- `app/utils/seo.ts` - SEO configuration and utilities
- `app/layout.tsx` - Main metadata and structured data
- `app/sitemap.ts` - Dynamic sitemap generator
- `app/robots.ts` - Robots.txt configuration
- `next.config.js` - Performance and image optimization
- `middleware.ts` - Language detection and routing

### SEO Components
- `app/components/SEO/DynamicMetadata.tsx` - Client-side metadata
- `app/components/SEO/JsonLd.tsx` - Structured data helper
- `app/components/SEO/PreloadResources.tsx` - Resource preloading

## 🔧 Customization

### Update Site Information
Edit `app/utils/seo.ts`:
```typescript
export const siteConfig = {
  name: 'OMNI Tech Solutions',
  url: 'https://omni-solutions.co',
  description: { ... }, // Update descriptions
  keywords: { ... },    // Update keywords
  social: {
    email: 'omnitechdev@gmail.com',
    phone: '+359893999881'
  }
};
```

### Add Social Media Links
Edit `app/utils/seo.ts` in the Organization schema:
```typescript
sameAs: [
  'https://facebook.com/yourpage',
  'https://twitter.com/yourhandle',
  'https://linkedin.com/company/yourcompany'
]
```

### Add Google Analytics
1. Get your GA4 Measurement ID
2. Add to `app/layout.tsx` in the `<head>` section:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### Verify Search Engines
Add verification codes in `app/layout.tsx`:
```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
}
```

## 📈 Expected Results

### Week 1-2
- Search engines discover your site
- Sitemap indexed
- Basic crawling begins

### Month 1
- Pages appear in search results
- Rich snippets may start showing
- Local search visibility improves

### Month 3+
- Rankings improve for target keywords
- Organic traffic increases
- Better click-through rates

## 🆘 Common Issues

### Sitemap not loading?
- Check your build: `npm run build`
- Verify the file exists after build
- Test locally first

### Structured data errors?
- Use Google Rich Results Test
- Check JSON syntax in structured data
- Verify all required fields are present

### Images not optimized?
- Check Next.js image configuration
- Verify image formats (AVIF, WebP)
- Use Next.js Image component where possible

### Wrong language showing?
- Check browser language settings
- Test middleware functionality
- Verify language alternates in metadata

## 📝 Monthly SEO Checklist

- [ ] Check Google Search Console for errors
- [ ] Monitor page speed with PageSpeed Insights
- [ ] Review and update content
- [ ] Check for broken links
- [ ] Update sitemap if needed
- [ ] Monitor keyword rankings
- [ ] Check competitor websites
- [ ] Update meta descriptions if needed

## 📞 Need Help?

For detailed information, see: `SEO_OPTIMIZATION.md`

## 🎉 You're All Set!

Your website is now fully optimized for search engines. Focus on:
1. Creating quality content
2. Building backlinks
3. Engaging on social media
4. Monitoring performance
5. Continuous improvement

Good luck with your SEO journey! 🚀
