import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div>
              <span className="text-lg font-bold">SYNKRO</span>
              <p className="text-xs text-muted-foreground">
                {t('footer.tagline')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {language === 'en' 
                  ? 'SYNKRO AI Assistant – powered by SYNKRO Automation Systems.'
                  : 'Asistente SYNKRO AI – impulsado por SYNKRO Automation Systems.'
                }
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToQuote}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.quote')}
            </button>
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 SYNKRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
