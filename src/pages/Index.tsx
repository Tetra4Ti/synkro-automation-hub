import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AdvancedCapabilities } from '@/components/AdvancedCapabilities';
import { WhyChooseSynkro } from '@/components/WhyChooseSynkro';
import { SavingsCalculator } from '@/components/SavingsCalculator';
import { AutomationGallery } from '@/components/AutomationGallery';
import { FreeDiagnostic } from '@/components/FreeDiagnostic';
import { QuoteForm } from '@/components/QuoteForm';
import { Contact } from '@/components/Contact';
import { FinalMessageBlock } from '@/components/FinalMessageBlock';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { RegistrationModal } from '@/components/RegistrationModal';

const Index = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    // Check if user has already registered
    const hasRegistered = localStorage.getItem('synkro_registered');
    if (!hasRegistered) {
      // Show registration modal after 3 seconds on first visit
      const timer = setTimeout(() => {
        setShowRegistration(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleRegistrationClose = (open: boolean) => {
    setShowRegistration(open);
    if (!open) {
      localStorage.setItem('synkro_registered', 'true');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <AdvancedCapabilities />
        <WhyChooseSynkro />
        <SavingsCalculator />
        <AutomationGallery />
        <FreeDiagnostic />
        <QuoteForm />
        <Contact />
        <FinalMessageBlock />
      </main>
      <Footer />
      <AIAssistant />
      <RegistrationModal open={showRegistration} onOpenChange={handleRegistrationClose} />
    </div>
  );
};

export default Index;
