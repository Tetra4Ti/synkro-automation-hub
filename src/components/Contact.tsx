import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="group hover:border-primary hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="mailto:contact@synkro.com">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('contact.email')}
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              asChild
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('contact.whatsapp')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
