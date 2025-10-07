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
    
    // Advanced Capabilities
    'capabilities.title': 'Advanced Automation Capabilities',
    'capabilities.subtitle': 'Powerful n8n-based automation features',
    'capabilities.ai.title': 'AI & Intelligent Processing',
    'capabilities.ai.desc': 'Chatbots with OpenAI or Gemini, OCR data extraction, smart ticket classification.',
    'capabilities.data.title': 'Data Management / ETL',
    'capabilities.data.desc': 'Real-time sync between Airtable, PostgreSQL, MySQL, CRMs. Data cleaning and deduplication.',
    'capabilities.marketing.title': 'Marketing & Sales',
    'capabilities.marketing.desc': 'Automated campaigns, lead scoring, social media scheduling from databases.',
    'capabilities.ecommerce.title': 'E-commerce & Operations',
    'capabilities.ecommerce.desc': 'Inventory sync, automatic order creation, invoicing, and accounting integration.',
    'capabilities.communication.title': 'Communication & Notifications',
    'capabilities.communication.desc': 'Smart WhatsApp/SMS messages, Slack/Telegram/email alerts for key events.',
    'capabilities.internal.title': 'Internal Processes',
    'capabilities.internal.desc': 'Automated HR, recruitment workflows, meeting coordination across tools.',
    'capabilities.advanced.title': 'Advanced Flows & Logic',
    'capabilities.advanced.desc': 'Conditional branches, loops, fallbacks, and rule-based automation.',
    'capabilities.monitoring.title': 'Monitoring & Maintenance',
    'capabilities.monitoring.desc': 'Workflow tracking, error detection, and proactive alerts.',
    
    // Free Diagnostic
    'diagnostic.title': 'Free Automation Diagnostic',
    'diagnostic.headline': 'Discover what your business can automate — in 2 minutes.',
    'diagnostic.description': 'Fill out a short form and get an instant report with suggested automations, estimated time savings, and a consultation invitation.',
    'diagnostic.cta': 'Run free diagnostic',
    'diagnostic.name': 'Name',
    'diagnostic.company': 'Company',
    'diagnostic.email': 'Email',
    'diagnostic.workflow': 'Description of current workflow',
    'diagnostic.submit': 'Get Free Report',
    'diagnostic.success': 'Report sent! Check your email.',
    
    // Why Choose Synkro
    'why.title': 'Why Choose Synkro',
    'why.subtitle': 'The complete automation partner for modern businesses',
    'why.diagnostic.title': 'Automated Diagnostic Tool',
    'why.diagnostic.desc': 'Free online analyzer of business automation potential.',
    'why.templates.title': 'Template Marketplace',
    'why.templates.desc': 'Prebuilt automation flows by industry (retail, beauty, restaurants, clinics).',
    'why.assistant.title': 'Synkro AI Assistant',
    'why.assistant.desc': 'Available 24/7 to answer questions or redirect to WhatsApp.',
    'why.monitoring.title': 'Monitoring & Maintenance Plans',
    'why.monitoring.desc': 'Proactive system care to keep your automations running smoothly.',
    'why.training.title': 'Training & Workshops',
    'why.training.desc': 'Teach teams to manage their own automations.',
    'why.scalable.title': 'Scalable Plans',
    'why.scalable.desc': 'Basic, Advanced, Enterprise tiers to match your growth.',
    
    // AI Assistant
    'assistant.tooltip': 'Chat with Synkro AI',
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
    
    // Advanced Capabilities
    'capabilities.title': 'Funciones avanzadas de automatización',
    'capabilities.subtitle': 'Potentes funciones de automatización basadas en n8n',
    'capabilities.ai.title': 'IA y Procesamiento Inteligente',
    'capabilities.ai.desc': 'Chatbots con OpenAI o Gemini, extracción OCR de datos, clasificación inteligente de tickets.',
    'capabilities.data.title': 'Gestión de Datos / ETL',
    'capabilities.data.desc': 'Sincronización en tiempo real entre Airtable, PostgreSQL, MySQL, CRMs. Limpieza y deduplicación de datos.',
    'capabilities.marketing.title': 'Marketing y Ventas',
    'capabilities.marketing.desc': 'Campañas automatizadas, puntuación de leads, programación de redes sociales desde bases de datos.',
    'capabilities.ecommerce.title': 'E-commerce y Operaciones',
    'capabilities.ecommerce.desc': 'Sincronización de inventario, creación automática de pedidos, facturación e integración contable.',
    'capabilities.communication.title': 'Comunicación y Notificaciones',
    'capabilities.communication.desc': 'Mensajes inteligentes de WhatsApp/SMS, alertas de Slack/Telegram/email para eventos clave.',
    'capabilities.internal.title': 'Procesos Internos',
    'capabilities.internal.desc': 'Flujos de trabajo automatizados de RRHH, reclutamiento, coordinación de reuniones entre herramientas.',
    'capabilities.advanced.title': 'Flujos y Lógica Avanzados',
    'capabilities.advanced.desc': 'Ramas condicionales, bucles, respaldos y automatización basada en reglas.',
    'capabilities.monitoring.title': 'Monitoreo y Mantenimiento',
    'capabilities.monitoring.desc': 'Seguimiento de flujos de trabajo, detección de errores y alertas proactivas.',
    
    // Free Diagnostic
    'diagnostic.title': 'Diagnóstico gratuito de automatización',
    'diagnostic.headline': 'Descubre qué puedes automatizar en tu empresa — en 2 minutos.',
    'diagnostic.description': 'Completa un breve formulario y recibe un informe instantáneo con automatizaciones sugeridas, ahorro de tiempo estimado e invitación a consulta.',
    'diagnostic.cta': 'Hacer diagnóstico gratuito',
    'diagnostic.name': 'Nombre',
    'diagnostic.company': 'Empresa',
    'diagnostic.email': 'Correo electrónico',
    'diagnostic.workflow': 'Descripción de procesos actuales',
    'diagnostic.submit': 'Obtener Informe Gratuito',
    'diagnostic.success': '¡Informe enviado! Revisa tu correo.',
    
    // Why Choose Synkro
    'why.title': 'Por qué elegir Synkro',
    'why.subtitle': 'El socio completo de automatización para empresas modernas',
    'why.diagnostic.title': 'Herramienta de Diagnóstico Automático',
    'why.diagnostic.desc': 'Analizador online gratuito del potencial de automatización empresarial.',
    'why.templates.title': 'Marketplace de Plantillas',
    'why.templates.desc': 'Flujos de automatización predefinidos por industria (retail, belleza, restaurantes, clínicas).',
    'why.assistant.title': 'Asistente Synkro AI',
    'why.assistant.desc': 'Disponible 24/7 para responder preguntas o redirigir a WhatsApp.',
    'why.monitoring.title': 'Planes de Monitoreo y Mantenimiento',
    'why.monitoring.desc': 'Cuidado proactivo del sistema para mantener tus automatizaciones funcionando sin problemas.',
    'why.training.title': 'Capacitación y Talleres',
    'why.training.desc': 'Enseñar a los equipos a gestionar sus propias automatizaciones.',
    'why.scalable.title': 'Planes Escalables',
    'why.scalable.desc': 'Niveles Básico, Avanzado y Empresarial para igualar tu crecimiento.',
    
    // AI Assistant
    'assistant.tooltip': 'Chatear con Synkro AI',
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
