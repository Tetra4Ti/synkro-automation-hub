import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

export const FreeDiagnostic = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    workflow: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission to n8n
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Diagnostic form submitted:', { ...formData, language });

    toast({
      title: t('diagnostic.success'),
      description: t('diagnostic.description'),
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      workflow: '',
    });

    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="diagnostic" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 animate-pulse-glow">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-bold mb-4">{t('diagnostic.title')}</h2>
            <p className="text-xl text-muted-foreground mb-2">
              {t('diagnostic.headline')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('diagnostic.description')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="diag-name" className="block text-sm font-medium mb-2">
                  {t('diagnostic.name')}
                </label>
                <Input
                  id="diag-name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="diag-company" className="block text-sm font-medium mb-2">
                  {t('diagnostic.company')}
                </label>
                <Input
                  id="diag-company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="diag-email" className="block text-sm font-medium mb-2">
                {t('diagnostic.email')}
              </label>
              <Input
                id="diag-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                className="bg-background/50"
              />
            </div>

            <div>
              <label htmlFor="diag-workflow" className="block text-sm font-medium mb-2">
                {t('diagnostic.workflow')}
              </label>
              <Textarea
                id="diag-workflow"
                value={formData.workflow}
                onChange={(e) => handleChange('workflow', e.target.value)}
                required
                rows={5}
                className="bg-background/50"
                placeholder={language === 'en' 
                  ? 'Describe your daily business processes, pain points, and repetitive tasks...'
                  : 'Describe tus procesos empresariales diarios, puntos de dolor y tareas repetitivas...'
                }
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                language === 'en' ? 'Analyzing...' : 'Analizando...'
              ) : (
                <>
                  {t('diagnostic.submit')}
                  <Sparkles className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
