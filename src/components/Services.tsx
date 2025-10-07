import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Workflow, Globe, MessageSquare, BarChart3, Plug, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    titleKey: 'services.automation.title',
    descKey: 'services.automation.desc',
  },
  {
    icon: Globe,
    titleKey: 'services.websites.title',
    descKey: 'services.websites.desc',
  },
  {
    icon: MessageSquare,
    titleKey: 'services.whatsapp.title',
    descKey: 'services.whatsapp.desc',
  },
  {
    icon: BarChart3,
    titleKey: 'services.dashboards.title',
    descKey: 'services.dashboards.desc',
  },
  {
    icon: Plug,
    titleKey: 'services.integrations.title',
    descKey: 'services.integrations.desc',
  },
];

export const Services = () => {
  const { t } = useLanguage();

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className={`glass p-8 rounded-xl hover-lift group cursor-default fade-in stagger-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground">{t(service.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            onClick={scrollToQuote}
          >
            {t('services.cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
