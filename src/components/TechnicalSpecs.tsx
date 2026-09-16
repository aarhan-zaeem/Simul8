import React from 'react';
import { Terminal, Cpu, Database, Shield, Lock, Layers } from 'lucide-react';
import { TECHNICAL_SPECS } from '../data/mockData';

export const TechnicalSpecs: React.FC = () => {
  return (
    <section 
      id="specs" 
      className="relative py-24 sm:py-32 bg-[#060913] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture & Specifications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Deterministic Engine Architecture.
          </h2>

          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            SIMUL8 combines high-dimensional stochastic exploration with microsecond-accurate 
            structural physics, delivering mathematically reproducible outcomes for civil engineering.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECHNICAL_SPECS.map((specCat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#070b14] border border-white/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  {idx === 0 && <Cpu className="w-5 h-5 text-cyan-400" />}
                  {idx === 1 && <Layers className="w-5 h-5 text-blue-400" />}
                  {idx === 2 && <Shield className="w-5 h-5 text-emerald-400" />}
                  <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                    {specCat.category}
                  </h3>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  {specCat.items.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-slate-400 font-medium text-[11px] uppercase tracking-wider">
                        {item.name}
                      </div>
                      <div className="text-slate-200 font-semibold leading-relaxed">
                        {item.spec}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
                CERTIFIED SPECIFICATION · REV 2026.4
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Security Banner */}
        <div className="mt-12 rounded-xl bg-[#090e1c] border border-white/10 p-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-mono">
                ENTERPRISE & DEFENSE COMPLIANCE
              </div>
              <div className="text-xs text-slate-400">
                Air-gapped on-premise deployments, FedRAMP High Ready, SOC 2 Type II, ISO 27001 certified.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-200">SOC 2 Type II</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-200">ISO 27001</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-200">FedRAMP High</span>
          </div>
        </div>

      </div>
    </section>
  );
};
