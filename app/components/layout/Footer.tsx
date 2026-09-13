'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import logoDark from '@/public/assets/logo_dark.png';
import logoWhite from '@/public/assets/logo_white.png';
import { CONTAINER } from '@/app/styles/theme';

interface FooterProps {
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
  theme: 'dark' | 'light';
}

const CONTACT_EMAIL = 'support@omni-solutions.co';

const quickLinks = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/#services' },
  { key: 'about', href: '/#about' },
  { key: 'contact', href: '/#contact' }
];

export const Footer: React.FC<FooterProps> = ({ colors, theme }) => {
  const { t } = useTranslation();

  return (
    <footer className={`border-t ${colors.borderLight}`}>
      <div className={`${CONTAINER} py-10`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? logoWhite.src : logoDark.src}
              alt="Omni Tech Solutions Logo"
              className="h-8 w-auto"
            />
            <span className={`${colors.text} font-bold`}>OMNI Tech Solutions</span>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={`${colors.textSec} text-sm transition-colors hover:text-[#ff6b1a]`}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`${colors.textSec} text-sm transition-colors hover:text-[#ff6b1a]`}
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <p className={`mt-8 pt-6 border-t ${colors.borderLight} ${colors.textTer} text-sm`}>
          {t('footer.text', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};
