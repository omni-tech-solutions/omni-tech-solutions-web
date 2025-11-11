import React, { useState, useEffect } from 'react';

const OmniTechSolutions = () => {
  const [language, setLanguage] = useState('bg');
  const [theme, setTheme] = useState('dark');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    bg: {
      nav: {
        home: 'Начало',
        services: 'Услуги',
        about: 'За нас',
        contact: 'Контакти'
      },
      hero: {
        title1: 'Пълна Гама от',
        title2: 'Персонализирани Технологични Услуги',
        subtitle: 'За бизнеса и дома',
        description: 'Ние се ангажираме да предоставяме на нашите клиенти изключително обслужване, като едновременно с това предлагаме на нашите служители най-доброто обучение.',
        cta: 'Свържете се с нас'
      },
      services: {
        title: 'Нашите Услуги',
        subtitle: 'Предлагаме пълна гама от технологични решения'
      },
      about: {
        title: 'За Omni Tech Solutions',
        missionTitle: 'Нашата Мисия',
        missionText: 'Omni Tech Solutions е посветена на предоставянето на иновативни и персонализирани технологични решения.',
        visionTitle: 'Нашата Визия',
        visionText: 'Да бъдем водещият доставчик на технологични решения в региона.',
        historyTitle: 'Нашата История',
        historyText: 'Основана от двама ентусиасти със страст към технологиите и иновациите.',
        stat1: 'Клиентско удовлетворение',
        stat2: 'Техническа поддръжка',
        stat3: 'Услуги'
      },
      contact: {
        title: 'Свържете се с нас',
        subtitle: 'Готови сме да отговорим на вашите въпроси',
        name: 'Име',
        email: 'Email',
        phone: 'Телефон',
        message: 'Съобщение',
        submit: 'Изпрати съобщение',
        required: '*',
        namePlaceholder: 'Вашето име',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: '+359 ...',
        messagePlaceholder: 'Как можем да ви помогнем?'
      },
      footer: {
        rights: '© 2025 Omni Tech Solutions. Всички права запазени.',
        tagline: 'Иновации, качество и клиентско удовлетворение'
      }
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title1: 'Full Range of',
        title2: 'Personalized Technology Services',
        subtitle: 'For Business and Home',
        description: 'We are committed to providing our clients with exceptional service while offering our employees the best training.',
        cta: 'Contact Us'
      },
      services: {
        title: 'Our Services',
        subtitle: 'We offer a full range of technology solutions'
      },
      about: {
        title: 'About Omni Tech Solutions',
        missionTitle: 'Our Mission',
        missionText: 'Omni Tech Solutions is dedicated to providing innovative and personalized technology solutions.',
        visionTitle: 'Our Vision',
        visionText: 'To be the leading provider of technology solutions in the region.',
        historyTitle: 'Our History',
        historyText: 'Founded by two enthusiasts with a passion for technology and innovation.',
        stat1: 'Customer Satisfaction',
        stat2: 'Technical Support',
        stat3: 'Services'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are ready to answer your questions',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Send Message',
        required: '*',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: '+359 ...',
        messagePlaceholder: 'How can we help you?'
      },
      footer: {
        rights: '© 2025 Omni Tech Solutions. All rights reserved.',
        tagline: 'Innovation, quality and customer satisfaction'
      }
    },
    tr: {
      nav: {
        home: 'Ana Sayfa',
        services: 'Hizmetler',
        about: 'Hakkımızda',
        contact: 'İletişim'
      },
      hero: {
        title1: 'Tam Yelpazede',
        title2: 'Kişiselleştirilmiş Teknoloji Hizmetleri',
        subtitle: 'İş ve Ev İçin',
        description: 'Müşterilerimize olağanüstü hizmet sunarken, çalışanlarımıza en iyi eğitimi sunmayı taahhüt ediyoruz.',
        cta: 'Bizimle İletişime Geçin'
      },
      services: {
        title: 'Hizmetlerimiz',
        subtitle: 'Tam kapsamlı teknoloji çözümleri sunuyoruz'
      },
      about: {
        title: 'Omni Tech Solutions Hakkında',
        missionTitle: 'Misyonumuz',
        missionText: 'Omni Tech Solutions yenilikçi ve kişiselleştirilmiş teknoloji çözümleri sunmaya adanmıştır.',
        visionTitle: 'Vizyonumuz',
        visionText: 'Bölgede lider teknoloji çözümleri sağlayıcısı olmak.',
        historyTitle: 'Tarihçemiz',
        historyText: 'Teknoloji ve yeniliğe tutkulu iki meraklı tarafından kuruldu.',
        stat1: 'Müşteri Memnuniyeti',
        stat2: 'Teknik Destek',
        stat3: 'Hizmet'
      },
      contact: {
        title: 'İletişime Geçin',
        subtitle: 'Sorularınızı yanıtlamaya hazırız',
        name: 'Ad',
        email: 'E-posta',
        phone: 'Telefon',
        message: 'Mesaj',
        submit: 'Mesaj Gönder',
        required: '*',
        namePlaceholder: 'Adınız',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: '+90 ...',
        messagePlaceholder: 'Size nasıl yardımcı olabiliriz?'
      },
      footer: {
        rights: '© 2025 Omni Tech Solutions. Tüm hakları saklıdır.',
        tagline: 'İnovasyon, kalite ve müşteri memnuniyeti'
      }
    }
  };

  const t = translations[language];

  const services = [
    {
      icon: '🌐',
      title: {
        bg: 'Уеб Дизайн и Разработка',
        en: 'Web Design and Development',
        tr: 'Web Tasarım ve Geliştirme'
      },
      description: {
        bg: 'Модерни и функционални уебсайтове',
        en: 'Modern and functional websites',
        tr: 'Modern ve işlevsel web siteleri'
      }
    },
    {
      icon: '💻',
      title: {
        bg: 'Уеб Базирани Приложения',
        en: 'Web-Based Applications',
        tr: 'Web Tabanlı Uygulamalar'
      },
      description: {
        bg: 'Персонализирани бизнес решения',
        en: 'Customized business solutions',
        tr: 'Özelleştirilmiş iş çözümleri'
      }
    },
    {
      icon: '🔧',
      title: {
        bg: 'Локални Мрежи',
        en: 'Local Networks',
        tr: 'Yerel Ağlar'
      },
      description: {
        bg: 'Оптимизация и поддръжка',
        en: 'Optimization and maintenance',
        tr: 'Optimizasyon ve bakım'
      }
    },
    {
      icon: '📹',
      title: {
        bg: 'Видеонаблюдение',
        en: 'CCTV Systems',
        tr: 'Güvenlik Kameraları'
      },
      description: {
        bg: 'Съвременни системи за сигурност',
        en: 'Modern security systems',
        tr: 'Modern güvenlik sistemleri'
      }
    },
    {
      icon: '📱',
      title: {
        bg: 'Ремонт на Смартфони',
        en: 'Smartphone Repair',
        tr: 'Akıllı Telefon Onarımı'
      },
      description: {
        bg: 'Бърз и качествен ремонт',
        en: 'Fast and quality repair',
        tr: 'Hızlı ve kaliteli onarım'
      }
    },
    {
      icon: '⚙️',
      title: {
        bg: 'Операционни Системи',
        en: 'Operating Systems',
        tr: 'İşletim Sistemleri'
      },
      description: {
        bg: 'Персонализирано инсталиране',
        en: 'Custom installation',
        tr: 'Özel kurulum'
      }
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.contact.success || 'Message sent!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const bgColor = theme === 'dark' 
    ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100';
  
  const navBg = theme === 'dark' ? 'bg-slate-900/95' : 'bg-white/95';
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const textTertiary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const cardBg = theme === 'dark' ? 'bg-slate-900/70' : 'bg-white';
  const cardBorder = theme === 'dark' ? 'border-slate-700' : 'border-gray-200';
  const inputBg = theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100';
  const inputBorder = theme === 'dark' ? 'border-slate-700' : 'border-gray-300';

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${navBg} backdrop-blur-sm z-50 shadow-lg border-b border-orange-400/20 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="https://omnitechsolutions.website/_next/static/media/logo.4de4350c.png" 
                alt="Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-orange-400">
                Omni Tech Solutions
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className={`${textSecondary} hover:text-orange-400 transition-colors`}>
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('services')} className={`${textSecondary} hover:text-orange-400 transition-colors`}>
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('about')} className={`${textSecondary} hover:text-orange-400 transition-colors`}>
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className={`${textSecondary} hover:text-orange-400 transition-colors`}>
                {t.nav.contact}
              </button>
              
              <div className="flex gap-2 ml-4 border-l border-orange-400/30 pl-4">
                <button 
                  onClick={() => setLanguage('bg')}
                  className={`px-2 py-1 rounded ${language === 'bg' ? 'bg-orange-400 text-slate-900' : `${textTertiary} hover:text-orange-400`} transition-colors text-sm font-semibold`}
                >
                  BG
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded ${language === 'en' ? 'bg-orange-400 text-slate-900' : `${textTertiary} hover:text-orange-400`} transition-colors text-sm font-semibold`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('tr')}
                  className={`px-2 py-1 rounded ${language === 'tr' ? 'bg-orange-400 text-slate-900' : `${textTertiary} hover:text-orange-400`} transition-colors text-sm font-semibold`}
                >
                  TR
                </button>
              </div>
              
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-2 rounded-full ${textSecondary} hover:text-orange-400 transition-colors text-2xl`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-orange-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-orange-400/20 mt-2">
              <button onClick={() => scrollToSection('home')} className={`block py-3 ${textSecondary}`}>
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('services')} className={`block py-3 ${textSecondary}`}>
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('about')} className={`block py-3 ${textSecondary}`}>
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className={`block py-3 ${textSecondary}`}>
                {t.nav.contact}
              </button>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-orange-400/20">
                <button onClick={() => setLanguage('bg')} className={`px-3 py-1 rounded ${language === 'bg' ? 'bg-orange-400 text-slate-900' : textTertiary} text-sm font-semibold`}>
                  BG
                </button>
                <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-orange-400 text-slate-900' : textTertiary} text-sm font-semibold`}>
                  EN
                </button>
                <button onClick={() => setLanguage('tr')} className={`px-3 py-1 rounded ${language === 'tr' ? 'bg-orange-400 text-slate-900' : textTertiary} text-sm font-semibold`}>
                  TR
                </button>
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 text-2xl">
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="https://omnitechsolutions.website/_next/static/media/logo.4de4350c.png" 
            alt="Logo" 
            className="h-24 w-auto mx-auto mb-8"
          />
          <h1 className={`text-4xl md:text-6xl font-bold ${textPrimary} mb-6`}>
            {t.hero.title1} <span className="text-orange-400">{t.hero.title2}</span>
          </h1>
          <p className={`text-xl md:text-2xl ${textSecondary} mb-4 max-w-4xl mx-auto font-semibold`}>
            {t.hero.subtitle}
          </p>
          <p className={`text-lg ${textTertiary} mb-8 max-w-3xl mx-auto`}>
            {t.hero.description}
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-orange-400 text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-500 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center ${textPrimary} mb-4`}>
            <span className="text-orange-400">{t.services.title}</span>
          </h2>
          <p className={`text-center ${textTertiary} mb-12`}>
            {t.services.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`${cardBg} p-6 rounded-xl border ${cardBorder} hover:border-orange-400 hover:transform hover:scale-105 transition-all`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className={`text-xl font-bold ${textPrimary} mb-3`}>{service.title[language]}</h3>
                <p className={`${textTertiary}`}>{service.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center ${textPrimary} mb-12`}>
            <span className="text-orange-400">{t.about.title}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`${cardBg} p-8 rounded-xl border ${cardBorder}`}>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">{t.about.missionTitle}</h3>
              <p className={textSecondary}>{t.about.missionText}</p>
            </div>
            <div className={`${cardBg} p-8 rounded-xl border ${cardBorder}`}>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">{t.about.visionTitle}</h3>
              <p className={textSecondary}>{t.about.visionText}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${cardBg} p-6 rounded-xl border border-orange-400/30 text-center`}>
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className={textSecondary}>{t.about.stat1}</div>
            </div>
            <div className={`${cardBg} p-6 rounded-xl border border-orange-400/30 text-center`}>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className={textSecondary}>{t.about.stat2}</div>
            </div>
            <div className={`${cardBg} p-6 rounded-xl border border-orange-400/30 text-center`}>
              <div className="text-4xl font-bold text-orange-400 mb-2">6+</div>
              <div className={textSecondary}>{t.about.stat3}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-4xl font-bold text-center ${textPrimary} mb-4`}>
            <span className="text-orange-400">{t.contact.title}</span>
          </h2>
          <p className={`text-center ${textTertiary} mb-12`}>{t.contact.subtitle}</p>
          <form onSubmit={handleSubmit} className={`${cardBg} p-8 rounded-xl border ${cardBorder}`}>
            <div className="mb-6">
              <label className={`block ${textSecondary} mb-2 font-semibold`}>
                {t.contact.name} <span className="text-orange-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 ${inputBg} ${textPrimary} rounded-lg border ${inputBorder} focus:outline-none focus:ring-2 focus:ring-orange-400`}
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div className="mb-6">
              <label className={`block ${textSecondary} mb-2 font-semibold`}>
                {t.contact.email} <span className="text-orange-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 ${inputBg} ${textPrimary} rounded-lg border ${inputBorder} focus:outline-none focus:ring-2 focus:ring-orange-400`}
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div className="mb-6">
              <label className={`block ${textSecondary} mb-2 font-semibold`}>
                {t.contact.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 ${inputBg} ${textPrimary} rounded-lg border ${inputBorder} focus:outline-none focus:ring-2 focus:ring-orange-400`}
                placeholder={t.contact.phonePlaceholder}
              />
            </div>
            <div className="mb-6">
              <label className={`block ${textSecondary} mb-2 font-semibold`}>
                {t.contact.message} <span className="text-orange-400">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 ${inputBg} ${textPrimary} rounded-lg border ${inputBorder} focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none`}
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 text-slate-900 py-3 rounded-lg font-bold hover:bg-orange-500 transition-all transform hover:scale-105"
            >
              {t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-slate-900' : 'bg-gray-200'} py-8 px-4 border-t border-orange-400/20`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <img 
              src="https://omnitechsolutions.website/_next/static/media/logo.4de4350c.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
            <span className="text-orange-400 font-bold">Omni Tech Solutions</span>
          </div>
          <p className={`${textTertiary} mb-2`}>{t.footer.rights}</p>
          <p className={`${textTertiary} text-sm`}>{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
};

export default OmniTechSolutions;
