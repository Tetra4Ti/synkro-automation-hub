import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: 'Error',
        description: 'Please accept the consent to continue',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate n8n API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Registration data:', formData);
    
    toast({
      title: t('registration.success'),
    });

    onOpenChange(false);
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {t('registration.title')}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t('registration.subtitle')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder={t('registration.name')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder={t('registration.email')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Input
              type="tel"
              placeholder={t('registration.phone')}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
              {t('registration.consent')}
            </label>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary"
            disabled={isSubmitting}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t('registration.submit')}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button type="button" variant="outline" className="w-full">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </Button>
            <Button type="button" variant="outline" className="w-full">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </Button>
            <Button type="button" variant="outline" className="w-full">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M11.4 24H7.6C7.1 24 7 23.9 7 23.2V13.8h-3C3.5 13.8 3 13.3 3 12.8V9.2c0-.5.5-.9 1-.9h3V5.5C7 2.6 8.8 1 11.7 1h3.2c.5 0 1 .5 1 1v3.5c0 .5-.5 1-1 1h-2c-.6 0-1 .4-1 1v1.8h3c.5 0 1 .5 1 1v3.6c0 .5-.5 1-1 1h-3v9.4c0 .5-.5.7-1 .7z"/>
              </svg>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
