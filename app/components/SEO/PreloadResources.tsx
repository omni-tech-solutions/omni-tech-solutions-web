import React from 'react';

/**
 * PreloadResources component for preloading critical assets
 * This improves page load performance by preloading fonts, critical CSS, and other resources
 */
export const PreloadResources: React.FC = () => {
  return (
    <>
      {/* Preconnect to external domains for faster resource loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://omnitechsolutions.website" />

      {/* Preload critical assets */}
      <link
        rel="preload"
        href="/assets/logo_dark.png"
        as="image"
        type="image/png"
      />
      <link
        rel="preload"
        href="/assets/logo_white.png"
        as="image"
        type="image/png"
      />
    </>
  );
};
