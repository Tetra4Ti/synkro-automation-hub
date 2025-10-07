import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="fade-in font-bold tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto fade-in stagger-1">
            {t('hero.subtitle')}
          </p>
          <div className="fade-in stagger-2">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
              onClick={scrollToQuote}
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Tech Partners Showcase */}
        <div className="mt-20 fade-in stagger-3">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            {t('partners.title')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {['Airtable', 'n8n', 'WhatsApp', 'Gmail', 'Shopify', 'Meta'].map((partner, i) => (
              <div 
                key={partner} 
                className={`text-lg md:text-xl font-semibold hover:opacity-100 transition-opacity cursor-default fade-in stagger-${i + 4}`}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
