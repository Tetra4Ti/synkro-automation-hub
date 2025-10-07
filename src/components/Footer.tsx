import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <span className="text-lg font-bold">Synkro</span>
              <p className="text-xs text-muted-foreground">
                {t('footer.tagline')}
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
          <p>© 2025 Synkro by T4T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
