export type Language = 'bg' | 'en' | 'tr';
export type Theme = 'dark' | 'light';

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}
