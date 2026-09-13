'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
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

// On phones and tablets the footer is a dark band that mirrors the dark header
export const Footer: React.FC<FooterProps> = ({ colors }) => {
  const { t } = useTranslation();

  return (
    <footer className={`border-t ${colors.borderLight} max-md:bg-[#242428] max-md:border-zinc-600`}>
      <div className={`${CONTAINER} py-10`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/brand/logo-96.png"
              width={32}
              height={32}
              alt="OMNI Tech Solutions"
              className="h-8 w-8"
            />
            <span className={`${colors.text} max-md:text-white font-bold`}>OMNI Tech Solutions</span>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={`${colors.textSec} max-md:text-zinc-300 text-sm hover:underline`}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`${colors.textSec} max-md:text-zinc-300 text-sm hover:underline`}
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <p className={`mt-8 pt-6 border-t ${colors.borderLight} ${colors.textTer} max-md:border-zinc-600 max-md:text-zinc-400 text-sm`}>
          {t('footer.text', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};
