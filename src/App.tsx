import { useState, useEffect } from 'react';
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
import { SaaSLandingPage } from './components/SaaSLandingPage';
import { SchoolsLandingPage } from './components/SchoolsLandingPage';
import { CoachingLandingPage } from './components/CoachingLandingPage';
import { IntroVideoSection } from './components/IntroVideoSection';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const path = currentPath.toLowerCase().replace(/\/$/, '') || '/';

  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-white/10 selection:text-white relative">
      <Starfield />
      {path === '/saas' ? (
        <SaaSLandingPage onNavigate={navigate} />
      ) : path === '/schools' ? (
        <SchoolsLandingPage onNavigate={navigate} />
      ) : path === '/coaching' ? (
        <CoachingLandingPage onNavigate={navigate} />
      ) : (
        <>
          <Hero onNavigate={navigate} />
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
            <IntroVideoSection />
            <FinalCTASection />
          </main>
          <Footer onNavigate={navigate} />
          <WhatsAppWidget />
        </>
      )}
    </div>
  );
}

export default App;
