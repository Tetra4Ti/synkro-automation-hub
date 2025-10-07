import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export const AutomationGallery = () => {
  const { t } = useLanguage();

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 animate-pulse-glow">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-bold mb-4">{t('gallery.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t('gallery.examples').map((example: any, index: number) => (
            <div
              key={index}
              className={`glass p-8 rounded-xl hover-lift group cursor-pointer fade-in stagger-${index + 1} border border-border/50`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{example.title}</h3>
                <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Zap className="h-5 w-5 text-electric-blue" />
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{example.description}</p>
              <Button
                onClick={scrollToQuote}
                variant="outline"
                className="w-full group/btn"
              >
                {t('gallery.cta')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
