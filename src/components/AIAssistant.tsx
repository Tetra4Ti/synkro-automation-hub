import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import synkroIcon from '@/assets/synkro-icon.png';

export const AIAssistant = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Redirect to WhatsApp
    window.open('https://wa.me/1234567890', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={handleClick}
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-primary shadow-glow hover:shadow-glow-lg transition-all duration-300 group animate-pulse-glow p-0 overflow-hidden"
        aria-label={t('assistant.tooltip')}
      >
        <img 
          src={synkroIcon} 
          alt="Synkro AI Assistant" 
          className="h-8 w-8 object-contain group-hover:scale-110 transition-transform"
        />
      </Button>

      {/* Tooltip */}
      <div className="fixed bottom-24 right-6 z-40 glass px-4 py-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        <p className="text-sm font-medium whitespace-nowrap">
          {t('assistant.tooltip')}
        </p>
      </div>
    </>
  );
};
