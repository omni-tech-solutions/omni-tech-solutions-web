'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, colors }) => {
  const { t } = useTranslation();

  const allItems = [
    { label: t('nav.home', 'Home'), href: '/' },
    ...items
  ];

  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className={`py-4 ${colors.section}`}>
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="flex items-center gap-2">
                {isFirst && <Home className="w-4 h-4" />}
                {!isLast ? (
                  <>
                    <Link
                      href={item.href}
                      className={`${colors.textSec} hover:underline transition-colors duration-200`}
                      style={{ color: 'inherit' }}
                    >
                      {item.label}
                    </Link>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </>
                ) : (
                  <span className={`${colors.text} font-semibold`} aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: allItems.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.label,
              item: `${typeof window !== 'undefined' ? window.location.origin : 'https://tech.omni-solutions.co'}${item.href}`
            }))
          })
        }}
      />
    </>
  );
};
