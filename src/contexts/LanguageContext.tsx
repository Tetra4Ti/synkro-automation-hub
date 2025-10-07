import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    'hero.title': 'We make businesses run themselves.',
    'hero.subtitle': 'Automate your operations, website, and communication — all in one place.',
    'hero.cta': 'Get a Quote',
    
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.quote': 'Get a Quote',
    'nav.contact': 'Contact',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Complete automation solutions for modern businesses',
    'services.automation.title': 'Automation Systems',
    'services.automation.desc': 'Workflow automation with n8n + Airtable to connect everything seamlessly.',
    'services.websites.title': 'Smart Websites',
    'services.websites.desc': 'Fully automated websites built to manage leads, bookings, and clients.',
    'services.whatsapp.title': 'WhatsApp & Email Bots',
    'services.whatsapp.desc': 'Engage clients automatically through custom messaging flows.',
    'services.dashboards.title': 'Data Dashboards',
    'services.dashboards.desc': 'Real-time control of KPIs and performance metrics.',
    'services.integrations.title': 'Custom Integrations',
    'services.integrations.desc': 'Connect Google, Meta, Shopify, APIs, and CRMs effortlessly.',
    'services.cta': "Let's automate your business",
    
    // Quote Form
    'quote.title': 'Get a Quote',
    'quote.subtitle': 'Tell us about your project and we\'ll get back to you within 24 hours',
    'quote.name': 'Name',
    'quote.company': 'Company',
    'quote.email': 'Email',
    'quote.description': 'Project Description',
    'quote.budget': 'Budget Range',
    'quote.budget.small': '$1,000 - $5,000',
    'quote.budget.medium': '$5,000 - $15,000',
    'quote.budget.large': '$15,000 - $50,000',
    'quote.budget.enterprise': '$50,000+',
    'quote.submit': 'Submit Request',
    'quote.success': 'Thank you! We\'ll contact you soon.',
    
    // Contact
    'contact.title': 'Connect everything. Save time. Grow faster.',
    'contact.subtitle': 'Ready to transform your business?',
    'contact.email': 'Email us',
    'contact.whatsapp': 'WhatsApp',
    
    // Footer
    'footer.tagline': 'Synkro is powered by T4T',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Tech Partners
    'partners.title': 'Powered by industry-leading platforms',
  },
  es: {
    // Hero
    'hero.title': 'Hacemos que las empresas funcionen solas.',
    'hero.subtitle': 'Automatiza tus operaciones, tu web y tu comunicación — todo en un solo lugar.',
    'hero.cta': 'Solicita tu presupuesto',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.quote': 'Presupuesto',
    'nav.contact': 'Contacto',
    
    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Soluciones completas de automatización para empresas modernas',
    'services.automation.title': 'Sistemas de Automatización',
    'services.automation.desc': 'Automatización de flujos de trabajo con n8n + Airtable para conectar todo sin problemas.',
    'services.websites.title': 'Sitios Web Inteligentes',
    'services.websites.desc': 'Sitios web completamente automatizados para gestionar clientes potenciales, reservas y clientes.',
    'services.whatsapp.title': 'Bots de WhatsApp y Email',
    'services.whatsapp.desc': 'Interactúa con clientes automáticamente a través de flujos de mensajería personalizados.',
    'services.dashboards.title': 'Paneles de Datos',
    'services.dashboards.desc': 'Control en tiempo real de KPIs y métricas de rendimiento.',
    'services.integrations.title': 'Integraciones Personalizadas',
    'services.integrations.desc': 'Conecta Google, Meta, Shopify, APIs y CRMs sin esfuerzo.',
    'services.cta': 'Automatiza tu empresa',
    
    // Quote Form
    'quote.title': 'Solicita tu presupuesto',
    'quote.subtitle': 'Cuéntanos sobre tu proyecto y te responderemos en 24 horas',
    'quote.name': 'Nombre',
    'quote.company': 'Empresa',
    'quote.email': 'Correo electrónico',
    'quote.description': 'Descripción del proyecto',
    'quote.budget': 'Rango de presupuesto',
    'quote.budget.small': '$1,000 - $5,000',
    'quote.budget.medium': '$5,000 - $15,000',
    'quote.budget.large': '$15,000 - $50,000',
    'quote.budget.enterprise': '$50,000+',
    'quote.submit': 'Enviar solicitud',
    'quote.success': '¡Gracias! Te contactaremos pronto.',
    
    // Contact
    'contact.title': 'Conecta todo. Ahorra tiempo. Crece más rápido.',
    'contact.subtitle': '¿Listo para transformar tu negocio?',
    'contact.email': 'Envíanos un correo',
    'contact.whatsapp': 'WhatsApp',
    
    // Footer
    'footer.tagline': 'Synkro está impulsado por T4T',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos de servicio',
    
    // Tech Partners
    'partners.title': 'Impulsado por plataformas líderes en la industria',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('synkro-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('synkro-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
