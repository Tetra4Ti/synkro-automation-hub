import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, TrendingUp } from 'lucide-react';

export const SavingsCalculator = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    employees: '',
    hours: '',
    cost: '',
  });
  const [result, setResult] = useState<{ hours: number; amount: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const employees = parseInt(formData.employees) || 0;
    const hours = parseFloat(formData.hours) || 0;
    const cost = parseFloat(formData.cost) || 0;

    // Calculate yearly savings (assuming 30% automation efficiency)
    const weeksPerYear = 52;
    const totalHoursPerYear = employees * hours * weeksPerYear;
    const savedHours = Math.round(totalHoursPerYear * 0.3);
    const savedAmount = Math.round(savedHours * cost);

    setResult({ hours: savedHours, amount: savedAmount });
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 animate-pulse-glow">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-bold mb-4">{t('calculator.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('calculator.subtitle')}
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('calculator.employees')}
              </label>
              <Input
                type="number"
                value={formData.employees}
                onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                required
                min="1"
                className="bg-background/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t('calculator.hours')}
              </label>
              <Input
                type="number"
                step="0.5"
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                required
                min="0"
                className="bg-background/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t('calculator.cost')}
              </label>
              <Input
                type="number"
                step="0.01"
                value={formData.cost}
                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                required
                min="0"
                className="bg-background/50"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t('calculator.calculate')}
            </Button>
          </form>

          {result && (
            <div className="mt-8 p-6 glass rounded-xl border-2 border-electric-blue/50 animate-fade-in">
              <div className="text-center">
                <p className="text-lg font-semibold mb-4">
                  {t('calculator.result')
                    .replace('{hours}', result.hours.toLocaleString())
                    .replace('{amount}', result.amount.toLocaleString())}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-background/30 rounded-lg">
                    <p className="text-3xl font-bold text-electric-blue">{result.hours.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Hours saved</p>
                  </div>
                  <div className="p-4 bg-background/30 rounded-lg">
                    <p className="text-3xl font-bold text-electric-blue">€{result.amount.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Money saved</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
