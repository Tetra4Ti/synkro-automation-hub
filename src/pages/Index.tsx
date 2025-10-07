import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AdvancedCapabilities } from '@/components/AdvancedCapabilities';
import { WhyChooseSynkro } from '@/components/WhyChooseSynkro';
import { FreeDiagnostic } from '@/components/FreeDiagnostic';
import { QuoteForm } from '@/components/QuoteForm';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <AdvancedCapabilities />
        <WhyChooseSynkro />
        <FreeDiagnostic />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
