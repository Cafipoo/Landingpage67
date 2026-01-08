import { Hero } from './components/Hero';
import { GameFeatures } from './components/GameFeatures';
import { HowToPlay } from './components/HowToPlay';
import { TechSection } from './components/TechSection';
import { VersionTwo } from './components/VersionTwo';
import { Footer } from './components/Footer';
import { FloatingShapes } from './components/FloatingShapes';
import { GameModal } from './components/GameModal';
import { useState } from 'react';

export default function App() {
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBE8] relative overflow-hidden">
      <FloatingShapes />
      <Hero onPlayGame={() => setIsGameModalOpen(true)} />
      <GameFeatures />
      <HowToPlay />
      <TechSection />
      <VersionTwo />
      <Footer />
      <GameModal isOpen={isGameModalOpen} onClose={() => setIsGameModalOpen(false)} />
    </div>
  );
}