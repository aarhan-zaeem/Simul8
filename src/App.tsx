import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { InteractiveScenarioSandbox } from './components/InteractiveScenarioSandbox';
import { IndustriesSection } from './components/IndustriesSection';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { RequestDemoModal } from './components/RequestDemoModal';
import { SignInModal } from './components/SignInModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  const handleOpenSignIn = () => setIsSignInModalOpen(true);
  const handleCloseSignIn = () => setIsSignInModalOpen(false);

  const handleExplorePlatform = () => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreSolution = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0] selection:bg-cyan-500/20 selection:text-cyan-300 relative flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar 
        onRequestDemo={handleOpenDemo}
        onSignIn={handleOpenSignIn}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section with Interactive Digital Twin Viewer */}
        <HeroSection 
          onRequestDemo={handleOpenDemo}
          onExplorePlatform={handleExplorePlatform}
        />

        {/* Problem Section: Real World Is an Expensive Place to Experiment */}
        <ProblemSection 
          onExploreSolution={handleExploreSolution}
        />

        {/* Solution Section: Build It Virtually. Stress-Test It. Then Build It for Real. */}
        <SolutionSection />

        {/* Interactive Simulation Sandbox: Live Monte Carlo Scenario Runner */}
        <InteractiveScenarioSandbox 
          onRequestDemo={handleOpenDemo}
        />

        {/* Industry Solutions: Civil, Sports, Logistics, Defense */}
        <IndustriesSection 
          onRequestDemo={handleOpenDemo}
        />

        {/* Technical Architecture & Deterministic Engine Specs */}
        <TechnicalSpecs />

        {/* Enterprise Pricing & Deployment Tiers */}
        <PricingSection 
          onRequestDemo={handleOpenDemo}
        />

        {/* About SIMUL8 */}
        <AboutSection 
          onRequestDemo={handleOpenDemo}
        />
      </main>

      {/* Enterprise Footer */}
      <Footer 
        onRequestDemo={handleOpenDemo}
        onSignIn={handleOpenSignIn}
      />

      {/* Interactive Modals */}
      <RequestDemoModal 
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
      />

      <SignInModal 
        isOpen={isSignInModalOpen}
        onClose={handleCloseSignIn}
      />
    </div>
  );
}
