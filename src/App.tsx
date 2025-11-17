import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrutalistVennSection } from './components/BrutalistVennSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { MoodboardSection } from './components/MoodboardSection';
import { AboutMeSection } from './components/AboutMeSection';
import { Footer } from './components/Footer';
import { RemixButton } from './components/RemixButton';
import { RemixedView } from './components/RemixedView';
import { WaveTransition } from './components/WaveTransition';
import { RippleDissolve } from './components/RippleDissolve';
import { CaseStudyCulturalProbe } from './components/CaseStudyCulturalProbe';
import { CaseStudyTransit } from './components/CaseStudyTransit';
import { CaseStudyToolkit } from './components/CaseStudyToolkit';
import { CaseStudyNASA } from './components/CaseStudyNASA';
import { BrutalistFAQSection } from './components/BrutalistFAQSection';
import { ConstructionBanner } from './components/ConstructionBanner';

type ViewMode = 'home' | 'remixed' | 'cultural-probe' | 'transit' | 'toolkit' | 'nasa-space-apps';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRemix = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode('remixed');
      setIsTransitioning(false);
    }, 1600); // Match wave transition duration
  };

  const handleBackToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode('home');
      setIsTransitioning(false);
    }, 1600);
  };

  const handleProjectClick = (projectId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setViewMode(projectId as ViewMode);
    }, 300);
  };

  const handleBackToProjects = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setViewMode('home');
    }, 300);
  };

  const handleFAQNavigation = (page: string) => {
    if (page === 'home') {
      setViewMode('home');
    } else {
      setViewMode(page as ViewMode);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Construction Banner */}
      <ConstructionBanner />
      
      {/* Wave Transition Effect */}
      <WaveTransition isActive={isTransitioning} />
      
      {/* Ripple Dissolve Effect for Hero Elements */}
      <RippleDissolve isActive={isTransitioning} />

      <AnimatePresence mode="wait">
        {viewMode === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <Header />
            <HeroSection />
            <BrutalistVennSection />
            <FeaturedProjects onProjectClick={handleProjectClick} />
            <BrutalistFAQSection onNavigate={handleFAQNavigation} />
            <MoodboardSection />
            <AboutMeSection onRiverJourneyClick={handleRemix} />
            <Footer />
            <RemixButton onRemix={handleRemix} isRemixed={false} />
          </motion.div>
        ) : viewMode === 'remixed' ? (
          <motion.div
            key="remixed"
            initial={{
              opacity: 0,
              scale: 1.02,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <RemixedView onBack={handleBackToHome} />
            <RemixButton onRemix={handleBackToHome} isRemixed={true} />
          </motion.div>
        ) : viewMode === 'cultural-probe' ? (
          <motion.div
            key="cultural-probe"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <CaseStudyCulturalProbe onBack={handleBackToProjects} />
          </motion.div>
        ) : viewMode === 'transit' ? (
          <motion.div
            key="transit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <CaseStudyTransit onBack={handleBackToProjects} />
          </motion.div>
        ) : viewMode === 'toolkit' ? (
          <motion.div
            key="toolkit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <CaseStudyToolkit onBack={handleBackToProjects} />
          </motion.div>
        ) : viewMode === 'nasa-space-apps' ? (
          <motion.div
            key="nasa-space-apps"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <CaseStudyNASA onBack={handleBackToProjects} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
