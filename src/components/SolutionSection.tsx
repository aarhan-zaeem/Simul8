import React, { useState } from 'react';
import { 
  Box, 
  GitBranch, 
  Cpu, 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Sliders, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SOLUTION_STEPS } from '../data/mockData';

export const SolutionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = SOLUTION_STEPS[activeStep];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Box className="w-6 h-6 text-cyan-400" />;
      case 1: return <Sliders className="w-6 h-6 text-blue-400" />;
      case 2: return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 3: return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      default: return <Box className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section 
      id="how-it-works" 
      className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden"
    >
      {/* Ambient gradient */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>The SIMUL8 Methodology</span>
          </div>

          {/* Headline (Prompt: Build It Virtually. Stress-Test It. Then Build It for Real.) */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Build It Virtually. Stress-Test It. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Then Build It for Real.
            </span>
          </h2>

          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            A deterministic four-phase pipeline that transforms static CAD models and BIM files into 
            living synthetic testing grounds before physical capital is deployed.
          </p>
        </div>

        {/* 4-Step Horizontal Process Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SOLUTION_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`relative text-left p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-[#0f172a] to-[#070d1a] border-cyan-500/60 shadow-lg shadow-cyan-950/50 scale-[1.02]'
                    : 'bg-[#090d18]/60 border-white/10 hover:border-white/20 hover:bg-[#0c1222]/80'
                }`}
              >
                {/* Active glow indicator */}
                {isActive && (
                  <div className="absolute -top-px left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-2xl font-black ${isActive ? 'text-cyan-400' : 'text-slate-600'}`}>
                      {step.number}
                    </span>
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-cyan-500/20' : 'bg-white/5'}`}>
                      {getStepIcon(index)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {step.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className={isActive ? 'text-cyan-300 font-semibold' : 'text-slate-500'}>
                    {isActive ? 'Active Pipeline Stage' : 'Click to inspect'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection Display for Active Step */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c1324] via-[#080d19] to-[#050811] border border-cyan-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-cyan-950 text-cyan-300 font-mono text-xs font-bold border border-cyan-800">
                  STAGE {currentStep.number}
                </span>
                <span className="text-slate-400 text-xs font-mono">DETERMINISTIC PIPELINE</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentStep.title} — {currentStep.tagline}
              </h4>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {currentStep.description}
              </p>

              {/* Data points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {currentStep.dataPoints.map((point, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech details badge */}
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="text-cyan-400 font-bold uppercase">Engine Specification:</span>
                <span>{currentStep.techDetail}</span>
              </div>
            </div>

            {/* Visual Schematic Diagram for the Step */}
            <div className="lg:col-span-5 rounded-xl bg-[#060a14] border border-white/10 p-6 flex flex-col justify-center">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 mb-4 border-b border-white/10">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  PIPELINE TELEMETRY
                </span>
                <span>STEP {currentStep.number} / 04</span>
              </div>

              {activeStep === 0 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300">
                    <div>→ INGESTING IFC / REVIT MODEL... [OK]</div>
                    <div className="text-slate-400 text-[10px] mt-1">1,480,200 structural polygons mapped</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                    <div>→ VOXEL OCTREE MESH: 0.5mm PRECISION</div>
                    <div className="text-slate-400 text-[10px] mt-1">Geospatial coordinate frame synchronized</div>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                    <div>✓ DIGITAL TWIN READY FOR PHYSICS MODELING</div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-300">
                    <div>→ BOUNDARY CONDITIONS CONFIGURED</div>
                    <div className="text-slate-400 text-[10px] mt-1">100-year storm flood vectors & wind shear</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                    <div>→ HUMAN AGENT DYNAMICS INJECTED</div>
                    <div className="text-slate-400 text-[10px] mt-1">75,000 agents with stochastic reaction latency</div>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                    <div>✓ CONSTRAINT MATRIX VALIDATED</div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-indigo-300">
                    <div>→ RUNNING 50,000 MONTE CARLO FUTURES</div>
                    <div className="text-slate-400 text-[10px] mt-1">512 H100 GPU cluster concurrency active</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                    <div>→ STRESS CONES: 99.8% BRANCH COVERAGE</div>
                    <div className="text-slate-400 text-[10px] mt-1">Zero unseen edge failure states remaining</div>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                    <div>✓ FAILURE PROBABILITY DENSITY COMPILED</div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                    <div>✓ ZERO-DAY DEPLOYMENT CLEARANCE</div>
                    <div className="text-slate-400 text-[10px] mt-1">3 bottlenecks mitigated in virtual CAD</div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300">
                    <div>→ EXPORT CERTIFIED WORK ORDERS</div>
                    <div className="text-slate-400 text-[10px] mt-1">Direct sync with engineering contractor PM</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                    <div>CAPITAL PREVENTED: $148,000,000</div>
                  </div>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">SIMUL8 PARALLEL KERNEL</span>
                <span className="text-[10px] font-mono text-cyan-400">LATENCY &lt; 0.4ms</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
