'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layers } from 'lucide-react';
import { COLORS } from '@/app/styles/theme';

interface TechnologiesSectionProps {
    colors: ReturnType<typeof import('@/app/styles/theme').getThemeColors>;
    theme: 'dark' | 'light';
}

type Category = 'all' | 'frontend' | 'backend' | 'database' | 'mobile' | 'devops' | 'ai' | 'tools';

interface Technology {
    name: string;
    icon: string;
    darkIcon?: string;
    invertInDark?: boolean;
    category: Category[];
}

// Shuffled order like the reference design — mixed across categories
const technologies: Technology[] = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: ['frontend'] },
    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', category: ['backend'] },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: ['devops'] },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertInDark: true, category: ['frontend'] },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: ['database'] },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: ['backend', 'ai'] },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: ['frontend', 'backend'] },
    { name: 'Claude AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/claude/claude-original.svg', category: ['ai'] },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: ['frontend'] },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: ['database'] },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: ['backend'] },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: ['frontend'] },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: ['mobile'] },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: ['devops'] },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: ['database', 'backend'] },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: ['tools'] },
    { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', category: ['frontend'] },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertInDark: true, category: ['backend'] },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: ['devops'] },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: ['tools'] },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', category: ['backend'] },
    { name: 'Expo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg', invertInDark: true, category: ['mobile'] },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: ['devops'] },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: ['database'] },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: ['backend'] },
    { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg', invertInDark: true, category: ['frontend'] },
    { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg', invertInDark: true, category: ['ai'] },
    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: ['devops'] },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: ['backend'] },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: ['tools'] },
    { name: 'Sanity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg', category: ['tools', 'backend'] },
];

const categoryKeys: Category[] = ['all', 'frontend', 'backend', 'database', 'mobile', 'devops', 'ai', 'tools'];

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({ colors, theme }) => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const filtered = activeCategory === 'all'
        ? technologies
        : technologies.filter(tech => tech.category.includes(activeCategory));

    return (
        <section className="relative py-20 px-0 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05]"
                    style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 65%)` }}
                />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `radial-gradient(circle, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5"
                        style={{
                            backgroundColor: `${COLORS.primary}15`,
                            border: `1px solid ${COLORS.primary}33`,
                            color: COLORS.primary,
                        }}
                    >
                        <Layers className="w-3.5 h-3.5" strokeWidth={2} />
                        {t('technologies.badge')}
                    </div>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${colors.text}`}>
                        {t('technologies.title')}
                    </h2>

                    <div
                        className="w-14 h-1 rounded-full mt-5 mb-5"
                        style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryHover})` }}
                    />

                    <p className={`${colors.textSec} text-base sm:text-lg max-w-2xl`}>
                        {t('technologies.subtitle')}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
                    {categoryKeys.map((cat) => {
                        const isActive = activeCategory === cat;

                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                aria-pressed={isActive}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b1a] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                                    isActive
                                        ? 'text-white border-transparent shadow-[0_8px_20px_-8px_rgba(255,107,26,0.8)]'
                                        : `${colors.textSec} ${colors.borderLight} hover:border-[#ff6b1a] hover:text-[#ff6b1a]`
                                }`}
                                style={isActive ? {
                                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryHover})`,
                                } : undefined}
                            >
                                {t(`technologies.categories.${cat}`)}
                            </button>
                        );
                    })}
                </div>

                {/* Result count */}
                <p className={`text-center text-xs sm:text-sm ${colors.textTer} mb-10`}>
                    {filtered.length} {t('technologies.countLabel')}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {filtered.map((tech, index) => (
                        <div
                            key={tech.name}
                            className={`omni-reveal group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 cursor-default hover:-translate-y-1 hover:border-[#ff6b1a] hover:shadow-[0_12px_28px_-14px_rgba(255,107,26,0.6)] ${
                                theme === 'dark'
                                    ? 'bg-zinc-900/60 hover:bg-zinc-800/80 border-zinc-700'
                                    : `${colors.card} ${colors.border} ${colors.cardHover}`
                            }`}
                            style={{ animationDelay: `${Math.min(index * 25, 400)}ms` }}
                        >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={theme === 'dark' && tech.darkIcon ? tech.darkIcon : tech.icon}
                                    alt={tech.name}
                                    className={`w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110 ${
                                        theme === 'dark' && tech.invertInDark && !tech.darkIcon ? 'invert' : ''
                                    }`}
                                    loading="lazy"
                                />
                            </div>
                            <span className={`${colors.text} text-sm font-medium truncate`}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
