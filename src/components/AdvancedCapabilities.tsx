import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, Database, TrendingUp, ShoppingCart, Bell, Users, GitBranch, Activity } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    titleKey: 'capabilities.ai.title',
    descKey: 'capabilities.ai.desc',
  },
  {
    icon: Database,
    titleKey: 'capabilities.data.title',
    descKey: 'capabilities.data.desc',
  },
  {
    icon: TrendingUp,
    titleKey: 'capabilities.marketing.title',
    descKey: 'capabilities.marketing.desc',
  },
  {
    icon: ShoppingCart,
    titleKey: 'capabilities.ecommerce.title',
    descKey: 'capabilities.ecommerce.desc',
  },
  {
    icon: Bell,
    titleKey: 'capabilities.communication.title',
    descKey: 'capabilities.communication.desc',
  },
  {
    icon: Users,
    titleKey: 'capabilities.internal.title',
    descKey: 'capabilities.internal.desc',
  },
  {
    icon: GitBranch,
    titleKey: 'capabilities.advanced.title',
    descKey: 'capabilities.advanced.desc',
  },
  {
    icon: Activity,
    titleKey: 'capabilities.monitoring.title',
    descKey: 'capabilities.monitoring.desc',
  },
];

export const AdvancedCapabilities = () => {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="py-24 relative bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">{t('capabilities.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('capabilities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.titleKey}
              className={`glass p-6 rounded-xl hover-lift group cursor-default fade-in stagger-${index + 1}`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <capability.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(capability.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(capability.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
