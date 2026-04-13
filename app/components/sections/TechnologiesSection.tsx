'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent)` }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className={colors.text}>{t('technologies.title')}</span>
                    </h2>
                    <p className={`${colors.textSec} text-lg max-w-2xl mx-auto`}>
                        {t('technologies.subtitle')}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                    {categoryKeys.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none`}
                            style={{
                                backgroundColor: activeCategory === cat ? COLORS.primary : 'transparent',
                                color: activeCategory === cat ? '#fff' : undefined,
                                borderColor: activeCategory === cat ? COLORS.primary : theme === 'dark' ? 'rgb(161, 161, 170)' : undefined,
                            }}
                            onMouseEnter={(e) => {
                                if (activeCategory !== cat) {
                                    e.currentTarget.style.borderColor = COLORS.primary;
                                    e.currentTarget.style.color = COLORS.primary;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeCategory !== cat) {
                                    e.currentTarget.style.borderColor = '';
                                    e.currentTarget.style.color = '';
                                }
                            }}
                        >
                            {t(`technologies.categories.${cat}`)}
                        </button>
                    ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {filtered.map((tech) => (
                        <div
                            key={tech.name}
                            className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 group cursor-default ${
                                theme === 'dark'
                                    ? 'bg-zinc-900/60 hover:bg-zinc-800/80 border-white/30'
                                    : `${colors.borderLight} ${colors.cardHover}`
                            }`}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = COLORS.primary;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 8px 25px ${COLORS.primary}15`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '';
                                e.currentTarget.style.transform = '';
                                e.currentTarget.style.boxShadow = '';
                            }}
                        >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-7 h-7 object-contain"
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
