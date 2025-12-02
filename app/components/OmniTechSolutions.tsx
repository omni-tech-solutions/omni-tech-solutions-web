'use client';

import React, { useEffect } from 'react';
import { useTheme } from '@/app/hooks/useTheme';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { ServicesSection } from '@/app/components/sections/ServicesSection';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { ContactSection } from '@/app/components/sections/ContactSection';
import '@/config/i18n';
import { I18nProvider } from "../config/I18nProvider";

const OmniTechSolutionsContent: React.FC = () => {
    const { theme, toggleTheme, colors } = useTheme();
    const activeSection = useActiveSection();

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'dark' ? '#18181b' : '#ffffff';
        document.body.style.color = theme === 'dark' ? '#ffffff' : '#18181b';
    }, [theme]);

    return (
        <div className={`min-h-screen ${colors.bgGradient} transition-colors duration-300`}>
            <Header
                theme={theme}
                toggleTheme={toggleTheme}
                colors={colors}
                activeSection={activeSection}
            />

            <main>
                <HeroSection colors={colors}/>
                <ServicesSection colors={colors} />
                <AboutSection colors={colors} />
                <ContactSection colors={colors} />
            </main>

            <Footer colors={colors} theme={theme} />

            <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div>
    );
};

const OmniTechSolutions: React.FC = () => {
    return (
        <I18nProvider>
            <OmniTechSolutionsContent />
        </I18nProvider>
    );
};

export default OmniTechSolutions;
