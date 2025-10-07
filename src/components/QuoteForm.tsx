import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

export const QuoteForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    description: '',
    budget: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Quote form submitted:', formData);

    toast({
      title: t('quote.success'),
      description: t('quote.subtitle'),
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      description: '',
      budget: '',
    });

    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quote" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">{t('quote.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('quote.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('quote.name')}
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  {t('quote.company')}
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('quote.email')}
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                className="bg-background/50"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                {t('quote.description')}
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                required
                rows={5}
                className="bg-background/50"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                {t('quote.budget')}
              </label>
              <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder={t('quote.budget')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">{t('quote.budget.small')}</SelectItem>
                  <SelectItem value="medium">{t('quote.budget.medium')}</SelectItem>
                  <SelectItem value="large">{t('quote.budget.large')}</SelectItem>
                  <SelectItem value="enterprise">{t('quote.budget.enterprise')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  {t('quote.submit')}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
