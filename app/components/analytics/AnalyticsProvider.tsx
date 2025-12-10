'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Analytics Provider Component
 * Tracks page views and user interactions
 *
 * To use:
 * 1. Get your Google Analytics 4 Measurement ID
 * 2. Replace 'G-XXXXXXXXXX' with your actual ID
 * 3. Uncomment the Google Analytics code below
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      });
    }
  }, [pathname, searchParams]);

  return null;
}

/**
 * Track custom events
 * Usage: trackEvent('button_click', { button_name: 'Contact Us' })
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track conversions
 * Usage: trackConversion('form_submission', { form_name: 'Contact Form' })
 */
export const trackConversion = (conversionName: string, conversionValue?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'G-XXXXXXXXXX/' + conversionName,
      value: conversionValue,
      currency: 'BGN'
    });
  }
};

/**
 * Track outbound links
 */
export const trackOutboundLink = (url: string, label?: string) => {
  trackEvent('outbound_click', {
    link_url: url,
    link_label: label
  });
};

/**
 * Track file downloads
 */
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth
  });
};

/**
 * Track form interactions
 */
export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    form_name: formName
  });
};

export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success
  });
};

/**
 * Track video interactions
 */
export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('video_play', {
    video_title: videoTitle
  });
};

/**
 * Track search
 */
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount
  });
};

/**
 * Track social sharing
 */
export const trackSocialShare = (platform: string, content: string) => {
  trackEvent('social_share', {
    platform: platform,
    content: content
  });
};
