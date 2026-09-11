import {
    Camera,
    Network,
    MonitorSmartphone,
    Globe,
    ShieldCheck,
    ShieldAlert,
    Code2,
    LucideIcon,
} from 'lucide-react';

/**
 * Single source of truth for the services.
 *
 * The site tells a two-pillar story: OMNI writes software for clients in
 * Bulgaria and abroad, and builds the IT infrastructure that runs it. Services
 * are therefore grouped rather than listed flat, so a visitor can see what the
 * company does without reading every card.
 *
 * Group order here is the order shown on the site, and the ids must match
 * `services.items` in every locale file.
 */
export type ServiceId =
    | 'web-applications'
    | 'web-design'
    | 'local-networks'
    | 'operating-systems'
    | 'video-surveillance'
    | 'maintenance-support'
    | 'network-security-audit';

/** The three pillars a visitor should be able to name after one scroll. */
export type ServiceGroup = 'software' | 'infrastructure' | 'support';

/** How a starting price is charged: once per job, or every month. */
export type PricingPeriod = 'once' | 'month';

export interface ServiceConfig {
    id: ServiceId;
    group: ServiceGroup;
    icon: LucideIcon;
    /**
     * True when the work physically requires a visit. Only these services show
     * the service area — software work is sold to clients anywhere.
     */
    onSite: boolean;
    /**
     * Starting price in EUR. `null` means "not set yet" and the UI falls back to
     * "price after a site visit" instead of showing an invented number.
     */
    priceFrom: number | null;
    period: PricingPeriod;
}

// Starting prices = the cheapest standard job in the price list
// (Desktop/Omni Tech Documents/.../04-cenorazpis.pdf). The full per-service list
// is `services.priceList.items` in the locale files — keep both in sync.
// `null` shows "by agreement" (custom software is quoted after analysis).
export const SERVICES: ServiceConfig[] = [
    // 1 — Software: the headline offering, sold anywhere
    { id: 'web-applications', group: 'software', icon: Code2, onSite: false, priceFrom: null, period: 'once' },
    { id: 'web-design', group: 'software', icon: Globe, onSite: false, priceFrom: 450, period: 'once' },

    // 2 — Infrastructure: the on-site work that runs it
    { id: 'local-networks', group: 'infrastructure', icon: Network, onSite: true, priceFrom: 25, period: 'once' },
    { id: 'operating-systems', group: 'infrastructure', icon: MonitorSmartphone, onSite: true, priceFrom: 20, period: 'once' },
    { id: 'video-surveillance', group: 'infrastructure', icon: Camera, onSite: true, priceFrom: 20, period: 'once' },

    // 3 — Ongoing: what keeps the two above working
    { id: 'maintenance-support', group: 'support', icon: ShieldCheck, onSite: true, priceFrom: 10, period: 'month' },
    { id: 'network-security-audit', group: 'support', icon: ShieldAlert, onSite: true, priceFrom: 150, period: 'once' },
];

export const SERVICE_GROUPS: ServiceGroup[] = ['software', 'infrastructure', 'support'];

export const SERVICE_IDS: ServiceId[] = SERVICES.map((s) => s.id);

export const getServiceConfig = (id: string): ServiceConfig | undefined =>
    SERVICES.find((s) => s.id === id);

export const getServicesInGroup = (group: ServiceGroup): ServiceConfig[] =>
    SERVICES.filter((s) => s.group === group);

export interface ServiceCopy {
    id: ServiceId;
    icon: string;
    title: string;
    desc: string;
}

/** Shape of one entry in `services.items` in the locale files. */
export const isServiceCopy = (value: unknown): value is ServiceCopy =>
    typeof value === 'object' && value !== null && typeof (value as ServiceCopy).id === 'string';
