import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Sliders, 
  Activity, 
  ShieldAlert, 
  TrendingDown, 
  DollarSign, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Zap,
  ArrowRight
} from 'lucide-react';

interface ScenarioPreset {
  id: string;
  name: string;
  domain: string;
  baseCost: string;
  defaultSurge: number;
  disruptions: string[];
  chokePointName: string;
  recommendedFix: string;
  capitalSaved: string;
}

const SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    id: 'transit',
    name: 'Subterranean Transit Interconnect (Line 4)',
    domain: 'Infrastructure & Urban Rail',
    baseCost: '$1.4 Billion',
    defaultSurge: 65,
    disruptions: ['Triple Escalator Lockout', 'Flash Downpour Flood', 'Signal Control Glitch', 'Peak Commuter Crush'],
    chokePointName: 'Stairwell Portal 4B Concourse Convergence',
    recommendedFix: 'Widen portal by 1.8m and reverse escalator bank direction at 08:15',
    capitalSaved: '$42,500,000',
  },
  {
    id: 'stadium',
    name: 'Apex Stadium — 75,000 Capacity Evacuation',
    domain: 'Entertainment & Sports Venues',
    baseCost: '$850 Million',
    defaultSurge: 90,
    disruptions: ['Thunderstorm Lightning Alarm', 'Turnstile Power Trip', 'North Concourse Blockage', 'Sudden Gate Closure'],
    chokePointName: 'North Gate Turnstile Funnel (Gate 7)',
    recommendedFix: 'Install 4 additional auxiliary egress turnstiles; deploy dynamic digital wayfinding',
    capitalSaved: '$28,000,000',
  },
  {
    id: 'port',
    name: 'Pacific Intermodal Automated Port',
    domain: 'Global Logistics & Supply Chain',
    baseCost: '$2.1 Billion',
    defaultSurge: 45,
    disruptions: ['Category 4 Gale Winds', 'Autonomous AGV Deadlock', 'Dual Gantry Rail Failure', 'Vessel Arrival Bunching'],
    chokePointName: 'Berth 3 AGV Buffer Intersection',
    recommendedFix: 'Implement adaptive buffer staging zones; increase quay-to-yard dispatch frequency',
    capitalSaved: '$64,000,000',
  },
  {
    id: 'hospital',
    name: 'Bio-Research Level 1 Trauma Facility',
    domain: 'Healthcare & Emergency Systems',
    baseCost: '$620 Million',
    defaultSurge: 50,
    disruptions: ['Mass Casualty Influx', 'Main Oxygen Line Isolation', 'Surgical Elevator Power Loss', 'Pathogen Surge'],
    chokePointName: 'Trauma Bay to ICU Elevator Core #2',
    recommendedFix: 'Dedicate express pneumatic tube routing; install dedicated trauma-only elevator bank',
    capitalSaved: '$19,200,000',
  },
];

export const InteractiveScenarioSandbox: React.FC<{ onRequestDemo: () => void }> = ({ onRequestDemo }) => {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioPreset>(SCENARIO_PRESETS[0]);
  const [surgePercent, setSurgePercent] = useState<number>(65);
  const [selectedDisruption, setSelectedDisruption] = useState<string>(SCENARIO_PRESETS[0].disruptions[0]);
  const [batchCount, setBatchCount] = useState<number>(50000);
  
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simProgress, setSimProgress] = useState<number>(100);
  const [simCompleted, setSimCompleted] = useState<boolean>(true);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimCompleted(false);
    setSimProgress(0);

    const interval = setInterval(() => {
      setSimProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          setSimCompleted(true);
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  const handleScenarioChange = (s: ScenarioPreset) => {
    setSelectedScenario(s);
    setSurgePercent(s.defaultSurge);
    setSelectedDisruption(s.disruptions[0]);
  };

  // Dynamic calculated risk reduction based on surge
  const calculatedRiskDelta = Math.max(22, Math.round(52 - (surgePercent * 0.15)));
  const calculatedFailurePrevented = Math.round(batchCount * (0.012 + (surgePercent * 0.0003)));

  return (
    <section 
      id="platform" 
      className="relative py-24 sm:py-32 bg-[#060913] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Simulation Workbench</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Stress-Test High-Stakes Environments in Real Time.
          </h2>

          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            Experience how SIMUL8 spins up 50,000+ stochastic future branches to identify 
            catastrophic bottlenecks before breaking ground.
          </p>
        </div>

        {/* Workbench Card Grid */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0b1222] to-[#070b15] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Controls Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Select Scenario */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  1. Select Target Environment
                </label>
                <div className="space-y-2">
                  {SCENARIO_PRESETS.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => handleScenarioChange(scenario)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                        selectedScenario.id === scenario.id
                          ? 'bg-cyan-950/50 border-cyan-500/60 text-white shadow-md'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-bold">{scenario.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {scenario.domain} · {scenario.baseCost} Asset
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stress Variable 1: Surge Factor Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-slate-400 uppercase">2. Demand / Crowd Surge:</span>
                  <span className="text-cyan-400 font-bold">+{surgePercent}% Peak Load</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="180"
                  step="5"
                  value={surgePercent}
                  onChange={(e) => setSurgePercent(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>Nominal (+20%)</span>
                  <span>Extreme Surge (+180%)</span>
                </div>
              </div>

              {/* Stress Variable 2: Disruption Event */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  3. Injected Disruption Variable
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {selectedScenario.disruptions.map((disruption) => (
                    <button
                      key={disruption}
                      onClick={() => setSelectedDisruption(disruption)}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                        selectedDisruption === disruption
                          ? 'bg-amber-950/40 border-amber-500/60 text-amber-200'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-[11px] leading-tight">{disruption}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Batch Size Selector */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  4. Parallel Monte Carlo Batch Size
                </label>
                <div className="flex items-center gap-2">
                  {[10000, 50000, 100000].map((count) => (
                    <button
                      key={count}
                      onClick={() => setBatchCount(count)}
                      className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold border transition-all ${
                        batchCount === count
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {(count / 1000).toFixed(0)}k Runs
                    </button>
                  ))}
                </div>
              </div>

              {/* Execute Button */}
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <Zap className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Resolving {batchCount.toLocaleString()} Futures ({simProgress}%)...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Run Synthetic Stress Test</span>
                  </>
                )}
              </button>

            </div>

            {/* Right Results & Telemetry Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-[#050811] border border-white/10 p-6">
              
              {/* Progress Bar (Visible while simulating) */}
              {isSimulating && (
                <div className="mb-6 space-y-2 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-cyan-400 animate-pulse">DISTRIBUTING SCENARIOS ACROSS CLUSTER...</span>
                    <span className="text-white font-bold">{simProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-150"
                      style={{ width: `${simProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Simulation Result Readout */}
              <div className="space-y-6">
                
                {/* Header status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <div>
                      <h4 className="text-base font-bold text-white font-mono">
                        SIMULATION RESOLVED
                      </h4>
                      <p className="text-xs text-slate-400">
                        {batchCount.toLocaleString()} stochastic runs evaluated in 0.84 seconds
                      </p>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-300 text-xs border border-emerald-800">
                      CONFIDENCE: 99.8%
                    </span>
                  </div>
                </div>

                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[11px] font-mono text-slate-400">Projected Risk</div>
                    <div className="text-2xl font-black text-cyan-400 font-mono mt-1">
                      ↓ {calculatedRiskDelta}%
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">Versus un-simulated CAD</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[11px] font-mono text-slate-400">Bottlenecks Avoided</div>
                    <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                      {calculatedFailurePrevented}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">Catastrophic fail states</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[11px] font-mono text-slate-400">Est. Capital Saved</div>
                    <div className="text-2xl font-black text-white font-mono mt-1">
                      {selectedScenario.capitalSaved}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">Post-groundbreak retrofits</div>
                  </div>
                </div>

                {/* Bottleneck Diagnostic */}
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    <span>Critical Physical Chokepoint Detected:</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {selectedScenario.chokePointName}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Under +{surgePercent}% surge load combined with "{selectedDisruption}", 
                    passenger velocity degrades to 0.12 m/s, causing unsafe structural pressure.
                  </p>
                </div>

                {/* Recommended Remediation */}
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>SIMUL8 Automated Spatial Remediation:</span>
                  </div>
                  <div className="text-xs text-slate-200 leading-relaxed font-mono">
                    {selectedScenario.recommendedFix}
                  </div>
                </div>

              </div>

              {/* Bottom CTA for custom sandbox */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-400">
                  Ready to test your organization's physical asset?
                </span>
                <button
                  onClick={onRequestDemo}
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Request Custom Digital Twin Ingestion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
