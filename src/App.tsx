import { Hero } from './components/Hero';
import { Starfield } from './components/Starfield';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { WhyGroviaSection } from './components/WhyGroviaSection';
import { AIWorkflowSection } from './components/AIWorkflowSection';
import { ToolsScrollSection } from './components/ToolsScrollSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-white/10 selection:text-white relative">
      <Starfield />
      <Hero />
      <main id="main">
        <AboutSection />
        <FeaturedVideoSection />
        <PhilosophySection />
        <WhyGroviaSection />
        <AIWorkflowSection />
        <ProcessSection />
        <ToolsScrollSection />
        <ServicesSection />
        <PortfolioSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
