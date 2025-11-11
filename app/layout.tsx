import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OMNI Tech Solutions - Персонализирани Технологични Услуги',
  description: 'Пълна гама от персонализирани технологични услуги за бизнеса и дома. Уеб дизайн, локални мрежи, видеонаблюдение, ремонт на смартфони и още.',
  keywords: 'технологични услуги, уеб дизайн, локални мрежи, видеонаблюдение, ремонт смартфони, Omni Tech Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
