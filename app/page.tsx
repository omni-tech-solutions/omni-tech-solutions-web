'use client';

import React, { useEffect } from 'react';

import '@/app/config/i18n';
import {useTheme} from "@/app/hooks/useTheme";
import {useActiveSection} from "@/app/hooks/useActiveSection";
import {Header} from "@/app/components/layout/Header";
import {HeroSection} from "@/app/components/sections/HeroSection";
import {ServicesSection} from "@/app/components/sections/ServicesSection";
import {TechnologiesSection} from "@/app/components/sections/TechnologiesSection";
import {AboutSection} from "@/app/components/sections/AboutSection";
import {ContactSection} from "@/app/components/sections/ContactSection";
import {Footer} from "@/app/components/layout/Footer";
import {useTranslation} from "react-i18next";

const OmniTechSolutions: React.FC = () => {
    const { theme, toggleTheme, colors } = useTheme();
    const activeSection = useActiveSection();
    const { t, i18n } = useTranslation();
    const [renderKey, setRenderKey] = React.useState(0);

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'dark' ? '#18181b' : '#ffffff';
        document.body.style.color = theme === 'dark' ? '#ffffff' : '#18181b';
    }, [theme]);

    useEffect(() => {
        setRenderKey(prev => prev + 1);
    }, [i18n.language]);

    // Handle hash navigation from other pages
    useEffect(() => {
        const handleHashNavigation = () => {
            const hash = window.location.hash;
            if (hash) {
                // Remove the # from hash
                const elementId = hash.substring(1);

                // Wait a bit for the page to fully render
                setTimeout(() => {
                    const element = document.getElementById(elementId);
                    if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        };

        // Handle on mount
        handleHashNavigation();

        // Handle when hash changes
        window.addEventListener('hashchange', handleHashNavigation);

        return () => {
            window.removeEventListener('hashchange', handleHashNavigation);
        };
    }, []);

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
            <Header
                theme={theme}
                toggleTheme={toggleTheme}
                colors={colors}
                activeSection={activeSection}
            />

            <main>
                <HeroSection colors={colors} />
                <ServicesSection colors={colors} />
                <TechnologiesSection colors={colors} />
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

export default OmniTechSolutions;