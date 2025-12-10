'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useTheme } from '@/app/hooks/useTheme';
import { COLORS } from '@/app/styles/theme';

export default function NotFound() {
  const { theme, colors } = useTheme();
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#18181b' : '#ffffff';
  }, [theme]);

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${colors.section}`}>
      <div className="max-w-2xl w-full text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <h1
            className="text-9xl font-bold mb-4"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            404
          </h1>
          <div className="flex justify-center mb-4">
            <Search className="w-16 h-16 opacity-20" style={{ color: COLORS.primary }} />
          </div>
        </div>

        {/* Error Message */}
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${colors.text}`}>
          Page Not Found
        </h2>
        <p className={`text-lg ${colors.textSec} mb-8 max-w-md mx-auto`}>
          Sorry, the page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => router.back()}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border ${colors.border} ${colors.text} font-semibold transition-all duration-300 hover:scale-105 ${colors.cardHover}`}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`
            }}
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        {/* Helpful Links */}
        <div className={`border-t ${colors.border} pt-8`}>
          <p className={`${colors.textSec} mb-4`}>
            You might be interested in:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/#services"
              className={`px-4 py-2 rounded-lg ${colors.card} ${colors.border} border ${colors.text} text-sm font-medium transition-all duration-300 hover:scale-105 ${colors.cardHover}`}
            >
              Our Services
            </Link>
            <Link
              href="/#about"
              className={`px-4 py-2 rounded-lg ${colors.card} ${colors.border} border ${colors.text} text-sm font-medium transition-all duration-300 hover:scale-105 ${colors.cardHover}`}
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className={`px-4 py-2 rounded-lg ${colors.card} ${colors.border} border ${colors.text} text-sm font-medium transition-all duration-300 hover:scale-105 ${colors.cardHover}`}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: '404 - Page Not Found',
              description: 'The requested page could not be found on OMNI Tech Solutions website.'
            })
          }}
        />
      </div>
    </div>
  );
}
