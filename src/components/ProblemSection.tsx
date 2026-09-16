import React from 'react';
import { 
  Building2, 
  Navigation, 
  Activity, 
  Users2, 
  AlertOctagon, 
  TrendingUp, 
  ArrowRight,
  Clock,
  DollarSign
} from 'lucide-react';
import { PROBLEM_CARDS } from '../data/mockData';

interface ProblemSectionProps {
  onExploreSolution: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onExploreSolution }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-amber-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-amber-400" />;
      case 'Users2': return <Users2 className="w-5 h-5 text-amber-400" />;
      default: return <AlertOctagon className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section 
      id="problem" 
      className="relative py-24 sm:py-32 bg-[#060913] border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-mono uppercase tracking-wider">
            <AlertOctagon className="w-3.5 h-3.5 text-red-400" />
            <span>The Cost of Physical Trial and Error</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Real World Is an Expensive Place to Experiment.
          </h2>

          <p className="text-lg text-slate-400 font-normal leading-relaxed">
            Companies often build first and discover problems later.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#070b14] border border-white/10 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              {/* Top Accent Icon & Domain */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    FAILURE MODE
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {card.domain}
                </h3>

                {/* Prompt sequence formula: Build -> discover bottlenecks */}
                <div className="inline-block px-3 py-1.5 rounded-lg bg-red-950/50 border border-red-900/60 text-red-300 font-mono text-xs font-semibold mb-4">
                  {card.failureAction}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {card.realWorldImpact}
                </p>
              </div>

              {/* Bottom Incident Callout */}
              <div className="pt-4 border-t border-white/5 space-y-2 mt-4">
                <div className="text-[11px] font-mono text-slate-400">
                  <span className="text-amber-400 font-bold block mb-0.5">Real-World Consequence:</span>
                  <span className="text-slate-300 leading-normal line-clamp-3">
                    {card.exampleIncident}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
                  <span className="text-slate-500">Retrofit Impact:</span>
                  <span className="text-red-400 font-bold">{card.costEstimate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Provocation: What if you could test the environment first? */}
        <div className="mt-16 md:mt-24 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-[#0a1426] to-blue-950/40 border border-cyan-500/30 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-30" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              What if you could test the environment first?
            </h3>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Before pouring millions of cubic yards of concrete, finalizing complex concourses, 
              or installing multi-million-dollar automated machinery—run 50,000 synthetic futures 
              in SIMUL8's deterministic physics simulation engine.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreSolution}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/30 transition-all hover:scale-105"
              >
                <span>Discover How It Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
