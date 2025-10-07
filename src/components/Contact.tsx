import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Mail, MessageCircle, Send } from 'lucide-react';

export const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        form_type: 'Contact',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        language: language,
      };

      const response = await fetch('https://n8n.t4tproyect.com/webhook/synkro/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'ok') {
          toast({
            title: language === 'es'
              ? '✅ Hemos recibido tu solicitud. Te contactaremos pronto.'
              : '✅ Your request has been received. We\'ll get back to you shortly.',
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setShowForm(false);
        } else {
          throw new Error('Invalid response');
        }
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: language === 'es'
          ? '⚠️ Ocurrió un error al enviar el formulario. Inténtalo de nuevo más tarde.'
          : '⚠️ An error occurred while submitting the form. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('contact.subtitle')}
          </p>

          {!showForm ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="group hover:border-primary hover:text-primary transition-all duration-300"
                onClick={() => setShowForm(true)}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('contact.email')}
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
          ) : (
            <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6 text-left mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                    {language === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                    {language === 'es' ? 'Correo electrónico' : 'Email'}
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">
                  {language === 'es' ? 'Asunto' : 'Subject'}
                </label>
                <Input
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                  {language === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="flex-1"
                >
                  {language === 'es' ? 'Cancelar' : 'Cancel'}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    language === 'es' ? 'Enviando...' : 'Sending...'
                  ) : (
                    <>
                      {language === 'es' ? 'Enviar' : 'Send'}
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
