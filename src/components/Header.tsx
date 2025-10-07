import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import synkroLogo from '@/assets/synkro-logo.png';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-40">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src={synkroLogo} 
              alt="Synkro Logo" 
              className="h-36 w-36 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('capabilities')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {language === 'en' ? 'Capabilities' : 'Funciones'}
            </button>
            <button 
              onClick={() => scrollToSection('why-synkro')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {language === 'en' ? 'Why Synkro' : 'Por qué Synkro'}
            </button>
            <button 
              onClick={() => scrollToSection('diagnostic')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {language === 'en' ? 'Free Diagnostic' : 'Diagnóstico gratuito'}
            </button>
            <button 
              onClick={() => scrollToSection('quote')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.quote')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Theme & Language Toggles */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-semibold">
                {language.toUpperCase()}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
