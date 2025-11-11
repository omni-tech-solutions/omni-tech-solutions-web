# Omni Tech Solutions - SPA

Модерен Single Page Application за Omni Tech Solutions, изграден с Next.js и TypeScript.

## За Проекта

Omni Tech Solutions е посветена на предоставянето на иновативни и персонализирани технологични решения за бизнеса и дома. Този SPA представя всички услуги на компанията с модерен и професионален дизайн.

## Функционалности

- ✨ Модерен и отзивчив дизайн
- 🎨 Фирмена цветова схема (#ffaa18)
- 🖼️ Интегрирано лого и брандинг
- 📱 Mobile-first подход
- 🔧 6 основни услуги:
  - Уеб дизайн и разработка
  - Разработка на уеб базирани приложения
  - Оптимизация и поддръжка на локални мрежи
  - Инсталиране и настройка на видеонаблюдение
  - Техническа поддръжка и ремонт на смартфони
  - Персонализирано инсталиране на операционни системи
- 📝 Контактна форма с валидация
- 🚀 TypeScript за type safety
- 💨 Tailwind CSS за стилизация
- 🎯 Секции: Мисия, Визия и История

## Инсталация

```bash
npm install
```

## Стартиране

```bash
npm run dev
```

Отворете [http://localhost:3000](http://localhost:3000) във вашия браузър.

## Билд за production

```bash
npm run build
npm start
```

## Технологии

- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3
- ESLint

## Структура на проекта

```
├── app/
│   ├── layout.tsx       # Root layout с metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── omni-tech-app.tsx    # Main component
├── public/              # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Персонализация

### Цветова схема
Основният цвят на брандa е `#ffaa18` (оранжево-жълт), който се използва за:
- Акценти и hover ефекти
- Call-to-action бутони
- Граници и подчертавания
- Логото и текстови акценти

### Услуги
Услугите могат да се променят лесно в масива `services` в `omni-tech-app.tsx`.

### Съдържание
Текстовете за мисия, визия и история могат да се редактират директно в JSX секциите.

## Оптимизация

- Lazy loading на изображения
- Responsive дизайн за всички устройства
- SEO оптимизирани meta tags
- Smooth scroll навигация
- Бързи анимации и преходи

## Deployment

Проектът може да бъде deployed на:
- Vercel (препоръчително за Next.js)
- Netlify
- Всеки Node.js хостинг

```bash
npm run build
```

Успешна работа! 🚀
