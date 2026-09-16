import React, { useState } from 'react';
import { 
  Building, 
  Trophy, 
  Anchor, 
  ShieldCheck, 
  ArrowRight, 
  Quote, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { INDUSTRY_SOLUTIONS } from '../data/mockData';
import { IndustryData } from '../types';

export const IndustriesSection: React.FC<{ onRequestDemo: () => void }> = ({ onRequestDemo }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData>(INDUSTRY_SOLUTIONS[0]);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'civil': return <Building className="w-5 h-5 text-cyan-400" />;
      case 'sports': return <Trophy className="w-5 h-5 text-cyan-400" />;
      case 'ports': return <Anchor className="w-5 h-5 text-cyan-400" />;
      case 'defense': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default: return <Building className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section 
      id="industries" 
      className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mission-Critical Domains</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for High-Consequence Physical Environments.
          </h2>

          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Where failure cannot be patched with software updates. Discover how SIMUL8 powers 
            the world's most demanding physical infrastructure.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {INDUSTRY_SOLUTIONS.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2.5 border ${
                selectedIndustry.id === industry.id
                  ? 'bg-cyan-950/70 border-cyan-500/80 text-white shadow-lg shadow-cyan-950/50'
                  : 'bg-[#080d19] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {getIndustryIcon(industry.id)}
              <span>{industry.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Industry Deep Dive */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0b1222] to-[#070b15] border border-cyan-500/30 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                {selectedIndustry.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedIndustry.title}
              </h3>

              {/* Verified Metric Callout */}
              <div className="inline-flex items-baseline gap-3 p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
                <span className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">
                  {selectedIndustry.metric}
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  {selectedIndustry.metricLabel}
                </span>
              </div>

              {/* Quote from Engineering Lead */}
              <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 italic text-sm leading-relaxed">
                <Quote className="w-5 h-5 text-cyan-400/40 absolute -top-2.5 left-4" />
                "{selectedIndustry.quote}"
              </div>

              {/* Core capabilities list */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
                  Simulated Physics & Risk Matrices:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedIndustry.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Case Study Card */}
            <div className="lg:col-span-5 rounded-xl bg-[#050811] border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                  VALIDATED CASE STUDY
                </span>
                <span className="text-[10px] font-mono text-slate-500">POST-EVALUATION</span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">PARTNER CONSORTIUM</span>
                <span className="text-sm font-bold text-white block">{selectedIndustry.caseStudy.client}</span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">PHYSICAL CHALLENGE</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedIndustry.caseStudy.challenge}</p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">SIMULATION SCOPE</span>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">{selectedIndustry.caseStudy.simulationScope}</p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[11px] font-mono text-emerald-400 font-bold block mb-1">MEASURED OUTCOME</span>
                <p className="text-xs text-slate-200 leading-relaxed">{selectedIndustry.caseStudy.outcome}</p>
              </div>

              <button
                onClick={onRequestDemo}
                className="w-full mt-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Read Full Technical Whitepaper</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
