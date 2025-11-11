'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '@/public/assets/logo.png';
import {COLORS} from "@/app/styles/theme";


interface FooterProps {
  colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
}

export const Footer: React.FC<FooterProps> = ({ colors }) => {
  const { t } = useTranslation();

  return (
    <footer className={`${colors.section} py-10 px-4 sm:px-6 lg:px-8 border-t ${colors.borderLight}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={logo.src}
              alt="Logo"
              className="h-10 w-auto"
            />
            <span className={`text-[${COLORS.primary}] font-bold text-lg`}>
              Omni Tech Solutions
            </span>
          </div>

          <p className={`${colors.textSec} text-center text-sm`}>
            {t('footer.text')}
          </p>

          <p className={`${colors.textTer} text-center text-xs`}>
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};
