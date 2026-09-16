import React from 'react';
import { ArrowRight, ChevronRight, Terminal, Shield, Sparkles, Building, Layers } from 'lucide-react';
import { DigitalTwinViewer } from './DigitalTwinViewer';

interface HeroSectionProps {
  onRequestDemo: () => void;
  onExplorePlatform: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestDemo,
  onExplorePlatform,
}) => {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-cyan-900/15 via-blue-900/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Geometric background grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Small Eyebrow (Prompt: THE FUTURE TESTING INFRASTRUCTURE) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>THE FUTURE TESTING INFRASTRUCTURE</span>
            </div>

            {/* Main Headline (Prompt: Test the Future Before You Build It.) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Test the Future <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
                Before You Build It.
              </span>
            </h1>

            {/* Supporting Text (Prompt exact quote) */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              SIMUL8 lets organizations build digital versions of real-world environments, 
              simulate thousands of possible futures, and make high-stakes decisions 
              before committing real-world resources.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary CTA (Prompt: Request a Demo →) */}
              <button
                onClick={onRequestDemo}
                id="hero-primary-cta"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:brightness-105 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA (Prompt: Explore the Platform) */}
              <button
                onClick={onExplorePlatform}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b1220]/80 hover:bg-[#111c33] text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>Explore the Platform</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro Enterprise Proof Indicators */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Deterministic Physics Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Millimeter Spatial Fidelity</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-cyan-400" />
                <span>Multi-Billion $ Asset Validations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Interactive Digital Twin Visualization */}
          <div className="lg:col-span-6 w-full">
            <DigitalTwinViewer />
          </div>

        </div>

        {/* Enterprise Logos Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Trusted by global engineering consortia, transportation authorities, and critical infrastructure developers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-slate-400">
              <span className="text-cyan-400">▲</span> AERO-CIVIL GLOBAL
            </div>
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-slate-400">
              <span className="text-cyan-400">■</span> METRO TRANSIT SYS
            </div>
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-slate-400">
              <span className="text-cyan-400">●</span> PACIFIC INTERMODAL
            </div>
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-slate-400">
              <span className="text-cyan-400">◆</span> VALENCE HEALTH INFRA
            </div>
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest font-bold text-slate-400 col-span-2 md:col-span-1">
              <span className="text-cyan-400">✦</span> DEFENSE CORE LOGISTICS
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
