import React from 'react';
import { Target, Compass, Globe, Award, Shield, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC<{ onRequestDemo: () => void }> = ({ onRequestDemo }) => {
  return (
    <section 
      id="about" 
      className="relative py-24 sm:py-32 bg-[#060913] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & Origin */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>About SIMUL8</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Eliminating the Era of Physical Guesswork.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Founded by former aerospace dynamicists, civil computational engineers, and distributed 
              systems researchers, SIMUL8 was built on a single conviction:
            </p>

            <blockquote className="p-4 rounded-xl bg-cyan-950/20 border-l-2 border-cyan-400 text-cyan-200 font-medium text-lg italic">
              "No civil megaproject or critical facility should ever be constructed in the physical 
              world without having been lived in virtually 50,000 times first."
            </blockquote>

            <p className="text-sm text-slate-400 leading-relaxed">
              Software companies enjoy instantaneous rollbacks and A/B test environments. Physical builders 
              and civil engineers have never had that luxury—until now. SIMUL8 delivers that same 
              experimental velocity to concrete, steel, and high-consequence spatial environments.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase font-mono transition-colors"
              >
                <span>Partner With SIMUL8</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Tenets / Institutional Caliber */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#070b14] border border-white/10 space-y-2">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold text-white font-mono">
                  GLOBAL SPATIAL TELEMETRY
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Operating across 4 continents, validating over $32 Billion in planned capital expenditure 
                for transit networks, international hubs, and critical public utility facilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#070b14] border border-white/10 space-y-2">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white font-mono">
                  GOVERNMENT-GRADE CRYPTOGRAPHY
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All digital twin assets, architectural CAD plans, and vulnerability simulations are protected 
                by zero-knowledge encryption, air-gapped on-premise appliances, and sovereign infrastructure guarantees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#070b14] border border-white/10 space-y-2">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-400" />
                <h4 className="text-base font-bold text-white font-mono">
                  DETERMINISTIC VERIFICATION
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every simulation outcome includes mathematically provable convergence bounds, verifiable 
                random seeds, and direct compatibility with municipal engineering certifications.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
