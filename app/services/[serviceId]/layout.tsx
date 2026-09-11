import type { Metadata } from 'next';
import { SERVICE_IDS } from '@/app/config/services';

const BASE_URL = 'https://tech.omni-solutions.co';

/**
 * Per-service metadata. Bulgarian is the primary language of the site, so the
 * meta copy is Bulgarian with the key terms spelled out.
 */
const SERVICE_SEO: Record<string, { title: string; description: string; keywords: string[] }> = {
    'video-surveillance': {
        title: 'Видеонаблюдение и монтаж на камери — Omni Tech Solutions',
        description:
            'Монтаж на камери и системи за видеонаблюдение с отдалечен достъп за дома и бизнеса. Ясни цени за монтаж, настройка и профилактика.',
        keywords: ['видеонаблюдение', 'монтаж на камери', 'IP камери', 'охранителни камери', 'цена монтаж на камера'],
    },
    'local-networks': {
        title: 'Изграждане на мрежи и Wi-Fi — Omni Tech Solutions',
        description:
            'Локални мрежи, окабеляване и професионално Wi-Fi покритие за дома, офиса и обекта.',
        keywords: ['изграждане на мрежа', 'Wi-Fi покритие', 'настройка на рутер', 'LAN окабеляване'],
    },
    'operating-systems': {
        title: 'Инсталация на Windows и компютърен сервиз — Omni Tech Solutions',
        description:
            'Преинсталация на Windows, смяна на SSD, почистване и премахване на вируси, със запазване на данните.',
        keywords: ['инсталация на Windows', 'компютърен сервиз', 'смяна на SSD', 'почистване на лаптоп'],
    },
    'web-design': {
        title: 'Информационни сайтове и онлайн магазини — Omni Tech Solutions',
        description:
            'Бързи и адаптивни уебсайтове и онлайн магазини, оптимизирани за търсачки и реални продажби. Работим с клиенти в България и чужбина.',
        keywords: ['изработка на сайт България', 'онлайн магазин изработка', 'уеб дизайн', 'сайт за бизнес'],
    },
    'maintenance-support': {
        title: 'Абонамент за ИТ поддръжка — Omni Tech Solutions',
        description:
            'Месечни проверки, актуализации и дистанционна помощ за вече изградени системи за видеонаблюдение, мрежи и компютри.',
        keywords: ['ИТ поддръжка', 'абонамент поддръжка', 'поддръжка на уебсайт', 'сервиз на видеонаблюдение'],
    },
    'network-security-audit': {
        title: 'Одит на мрежовата сигурност за малък бизнес — Omni Tech Solutions',
        description:
            'Проверка на мрежата, рутера и системата за видеонаблюдение на малкия бизнес, с ясен доклад какво да се поправи първо.',
        keywords: ['мрежова сигурност', 'одит на мрежа малък бизнес', 'сигурност на камери'],
    },
    'web-applications': {
        title: 'Уеб, настолни и мобилни приложения по поръчка — Omni Tech Solutions',
        description:
            'Софтуер по поръчка за браузър, десктоп и телефон, с интеграции и автоматизация на бизнес процеси. Клиенти в България и чужбина.',
        keywords: ['софтуер по поръчка България', 'уеб приложение по поръчка', 'разработка на настолно приложение', 'десктоп приложение по поръчка', 'разработка на мобилно приложение', 'автоматизация на бизнес процеси'],
    },
};

export async function generateStaticParams() {
    return SERVICE_IDS.map((serviceId) => ({ serviceId }));
}

export async function generateMetadata({
    params,
}: {
    params: { serviceId: string };
}): Promise<Metadata> {
    const seo = SERVICE_SEO[params.serviceId];

    if (!seo) {
        return { title: 'Услуги | Omni Tech Solutions' };
    }

    const url = `${BASE_URL}/services/${params.serviceId}`;

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            url,
            title: seo.title,
            description: seo.description,
            siteName: 'Omni Tech Solutions',
            locale: 'bg_BG',
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title,
            description: seo.description,
        },
    };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
