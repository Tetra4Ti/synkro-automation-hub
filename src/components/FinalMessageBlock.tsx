import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FinalMessageBlock = () => {
  const { t } = useLanguage();

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-2xl border-2 border-electric-blue/30 animate-fade-in">
            <p className="text-2xl md:text-3xl font-bold mb-4 text-electric-blue">
              {t('finalMessage.line1')}
            </p>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-muted-foreground">
              {t('finalMessage.line2')}
            </p>
            <Button
              onClick={scrollToQuote}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-lg transition-all duration-300 group text-lg px-8 py-6"
            >
              {t('finalMessage.cta')}
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
