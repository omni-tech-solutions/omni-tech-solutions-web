'use client';

import React, { useEffect } from 'react';
import '@/app/config/i18n';
import { useTheme } from "@/app/hooks/useTheme";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { ServiceDetailPage } from "@/app/components/sections/ServiceDetails";
import { useActiveSection } from "@/app/hooks/useActiveSection";

const ServicePage: React.FC = () => {
    const { theme, toggleTheme, colors } = useTheme();
    const activeSection = useActiveSection();

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'dark' ? '#18181b' : '#ffffff';
        document.body.style.color = theme === 'dark' ? '#ffffff' : '#18181b';
    }, [theme]);

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
            <Header
                theme={theme}
                toggleTheme={toggleTheme}
                colors={colors}
                activeSection={activeSection}
            />

            <main>
                <ServiceDetailPage colors={colors} />
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

                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
};

export default ServicePage;