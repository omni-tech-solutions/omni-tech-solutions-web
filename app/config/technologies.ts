import { Network, RefreshCw, Database, type LucideIcon } from 'lucide-react';

/** Order here is the order the groups appear on a service page. Labels: `technologies.categories.<id>`. */
export const TECHNOLOGY_CATEGORIES = ['frontend', 'backend', 'database', 'apps', 'devops', 'infrastructure'] as const;
export type TechnologyCategory = (typeof TECHNOLOGY_CATEGORIES)[number];

export type TechnologyId =
    | 'typescript' | 'javascript' | 'react' | 'nextjs' | 'angular' | 'redux' | 'tanstack-query' | 'mui' | 'tailwind' | 'sass'
    | 'nodejs' | 'nestjs' | 'express' | 'dotnet' | 'typeorm' | 'python'
    | 'postgresql' | 'mysql' | 'firebase'
    | 'electron' | 'react-native' | 'chrome-extensions'
    | 'docker' | 'kubernetes' | 'linux' | 'git' | 'github' | 'vercel'
    | 'windows' | 'networking';

export interface Technology {
    id: TechnologyId;
    /** Display name for proper nouns; `nameKey` takes over for anything translatable. */
    name: string;
    nameKey?: string;
    icon?: string;
    /** Fallback when devicon has no logo for it. */
    lucideIcon?: LucideIcon;
    invertInDark?: boolean;
    category: TechnologyCategory;
}

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const devicon = (name: string, variant = 'original') => `${DEVICON}/${name}/${name}-${variant}.svg`;

/**
 * Single source of truth for the stack OMNI actually works with. Used by the
 * technologies section and by the service pages (`ServiceConfig.stack`).
 */
export const TECHNOLOGIES: Technology[] = [
    // Frontend
    { id: 'typescript', name: 'TypeScript', icon: devicon('typescript'), category: 'frontend' },
    { id: 'javascript', name: 'JavaScript', icon: devicon('javascript'), category: 'frontend' },
    { id: 'react', name: 'React', icon: devicon('react'), category: 'frontend' },
    { id: 'nextjs', name: 'Next.js', icon: devicon('nextjs'), invertInDark: true, category: 'frontend' },
    { id: 'angular', name: 'Angular', icon: devicon('angular'), category: 'frontend' },
    { id: 'redux', name: 'Redux', icon: devicon('redux'), category: 'frontend' },
    { id: 'tanstack-query', name: 'TanStack Query', lucideIcon: RefreshCw, category: 'frontend' },
    { id: 'mui', name: 'Material UI', icon: devicon('materialui'), category: 'frontend' },
    { id: 'tailwind', name: 'Tailwind CSS', icon: devicon('tailwindcss'), category: 'frontend' },
    { id: 'sass', name: 'SCSS', icon: devicon('sass'), category: 'frontend' },

    // Backend
    { id: 'nodejs', name: 'Node.js', icon: devicon('nodejs'), category: 'backend' },
    { id: 'nestjs', name: 'NestJS', icon: devicon('nestjs'), category: 'backend' },
    { id: 'express', name: 'Express.js', icon: devicon('express'), invertInDark: true, category: 'backend' },
    { id: 'dotnet', name: '.NET', icon: devicon('dotnetcore'), category: 'backend' },
    { id: 'typeorm', name: 'TypeORM', lucideIcon: Database, category: 'backend' },
    { id: 'python', name: 'Python', icon: devicon('python'), category: 'backend' },

    // Databases
    { id: 'postgresql', name: 'PostgreSQL', icon: devicon('postgresql'), category: 'database' },
    { id: 'mysql', name: 'MySQL', icon: devicon('mysql'), category: 'database' },
    { id: 'firebase', name: 'Firebase', icon: devicon('firebase'), category: 'database' },

    // Desktop, mobile and browser apps
    { id: 'electron', name: 'Electron', icon: devicon('electron'), category: 'apps' },
    { id: 'react-native', name: 'React Native', icon: devicon('react'), category: 'apps' },
    { id: 'chrome-extensions', name: 'Chrome Extensions', icon: devicon('chrome'), category: 'apps' },

    // DevOps & cloud
    { id: 'docker', name: 'Docker', icon: devicon('docker'), category: 'devops' },
    { id: 'kubernetes', name: 'Kubernetes', icon: devicon('kubernetes', 'plain'), category: 'devops' },
    { id: 'linux', name: 'Linux', icon: devicon('linux'), category: 'devops' },
    { id: 'git', name: 'Git', icon: devicon('git'), category: 'devops' },
    { id: 'github', name: 'GitHub', icon: devicon('github'), invertInDark: true, category: 'devops' },
    { id: 'vercel', name: 'Vercel', icon: devicon('vercel'), invertInDark: true, category: 'devops' },

    // Networks & systems
    { id: 'windows', name: 'Windows', nameKey: 'technologies.items.windows', icon: devicon('windows11'), category: 'infrastructure' },
    { id: 'networking', name: 'Networking', nameKey: 'technologies.items.networking', lucideIcon: Network, category: 'infrastructure' },
];

export const getTechnology = (id: TechnologyId): Technology | undefined =>
    TECHNOLOGIES.find((tech) => tech.id === id);
