import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, FolderKanban, Bot, Shield, GraduationCap, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    titleKey: 'why.diagnostic.title',
    descKey: 'why.diagnostic.desc',
  },
  {
    icon: FolderKanban,
    titleKey: 'why.templates.title',
    descKey: 'why.templates.desc',
  },
  {
    icon: Bot,
    titleKey: 'why.assistant.title',
    descKey: 'why.assistant.desc',
  },
  {
    icon: Shield,
    titleKey: 'why.monitoring.title',
    descKey: 'why.monitoring.desc',
  },
  {
    icon: GraduationCap,
    titleKey: 'why.training.title',
    descKey: 'why.training.desc',
  },
  {
    icon: TrendingUp,
    titleKey: 'why.scalable.title',
    descKey: 'why.scalable.desc',
  },
];

export const WhyChooseSynkro = () => {
  const { t } = useLanguage();

  return (
    <section id="why-synkro" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">{t('why.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className={`glass p-8 rounded-xl hover-lift group cursor-default fade-in stagger-${index + 1} border border-border/50`}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
