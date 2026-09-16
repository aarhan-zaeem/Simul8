import React from 'react';
import { Check, ArrowRight, Shield, Zap } from 'lucide-react';
import { PRICING_TIERS } from '../data/mockData';

export const PricingSection: React.FC<{ onRequestDemo: () => void }> = ({ onRequestDemo }) => {
  return (
    <section 
      id="pricing" 
      className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Infrastructure Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Predictable Investment for Unforgiving Projects.
          </h2>

          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            From single asset validation before groundbreaking to sovereign continuous simulation 
            across global municipal and national defense portfolios.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-[#0e172a] via-[#090f1d] to-[#070b16] border-2 border-cyan-500 shadow-2xl shadow-cyan-950/60 lg:-translate-y-2'
                  : 'bg-[#080d19] border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-mono font-black uppercase tracking-wider shadow-md">
                  MOST SELECTED BY ENTERPRISES
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-snug">
                    {tier.subtitle}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    / {tier.frequency}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 pb-6 border-b border-white/10">
                  {tier.description}
                </p>

                <div className="space-y-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Capabilities Included:
                  </span>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5">
                <button
                  onClick={onRequestDemo}
                  className={`w-full py-3 rounded-xl font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Procurement / RFP Note */}
        <div className="mt-12 text-center text-xs font-mono text-slate-400">
          Need custom government RFP compliance, vendor onboarding packets, or master service agreements?{' '}
          <button 
            onClick={onRequestDemo}
            className="text-cyan-400 hover:underline font-semibold"
          >
            Contact our Enterprise Procurement Office →
          </button>
        </div>

      </div>
    </section>
  );
};
