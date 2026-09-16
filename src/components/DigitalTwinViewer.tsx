import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Play, 
  Pause, 
  RotateCcw, 
  Sliders, 
  Cpu, 
  Activity, 
  Zap, 
  Users, 
  Navigation, 
  CheckCircle2, 
  AlertTriangle,
  Eye,
  Maximize2
} from 'lucide-react';
import { ENVIRONMENT_PRESETS } from '../data/mockData';
import { EnvironmentPreset } from '../types';

export const DigitalTwinViewer: React.FC = () => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const preset: EnvironmentPreset = ENVIRONMENT_PRESETS[selectedPresetIndex];

  const [isPlaying, setIsPlaying] = useState(true);
  const [timelineHour, setTimelineHour] = useState(14.5); // 14:30
  const [simSpeed, setSimSpeed] = useState<1 | 5 | 25>(5);
  
  // Layer toggles
  const [layers, setLayers] = useState({
    traffic: true,
    pedestrians: true,
    energy: true,
    stressCones: true,
  });

  const [activeNode, setActiveNode] = useState<{ id: string; label: string; load: string; status: string } | null>({
    id: 'NODE-04',
    label: 'Central Arterial Concourse',
    load: '84% Capacity',
    status: 'Nominal Flow',
  });

  // Animation frame loop for dynamic particle movement
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTick((prev) => (prev + 1) % 360);
      setTimelineHour((prev) => {
        const next = prev + (simSpeed * 0.02);
        return next > 24 ? 6 : next;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [isPlaying, simSpeed]);

  const formatTime = (decimalHours: number) => {
    const hours = Math.floor(decimalHours);
    const minutes = Math.floor((decimalHours - hours) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="relative w-full rounded-2xl bg-gradient-to-b from-[#0b1120] to-[#060a14] border border-cyan-500/20 shadow-2xl shadow-cyan-950/40 overflow-hidden group"
      id="digital-twin-container"
    >
      {/* Top Telemetry Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#070d1a]/80 backdrop-blur-md text-xs font-mono text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold tracking-wide">DIGITAL TWIN ENGINE v4.8</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-cyan-400 font-mono hidden sm:inline">SEED #4092-B8</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-400 hidden md:inline">TIME STEP:</span>
          <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-mono font-medium">
            {formatTime(timelineHour)} UTC
          </span>
          <span className="text-emerald-400 font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/50 border border-emerald-800/40">
            60 FPS
          </span>
        </div>
      </div>

      {/* Preset Selector Tabs */}
      <div className="flex items-center gap-1 p-2 bg-[#060913]/90 border-b border-white/5 overflow-x-auto no-scrollbar">
        {ENVIRONMENT_PRESETS.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setSelectedPresetIndex(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedPresetIndex === idx
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${selectedPresetIndex === idx ? 'bg-cyan-400' : 'bg-slate-600'}`} />
            {p.name.split('—')[0].trim()}
          </button>
        ))}
      </div>

      {/* Main Interactive Stage / Model Canvas */}
      <div className="relative h-[380px] sm:h-[440px] md:h-[480px] w-full bg-[#050812] overflow-hidden flex items-center justify-center select-none">
        {/* Ambient Grid Floor */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Radial depth light */}
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -top-40 -right-20" />
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -bottom-20 -left-10" />

        {/* Isometric SVG Digital Twin Visualization */}
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full object-contain filter drop-shadow-2xl"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gradients for buildings */}
            <linearGradient id="buildingTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="buildingLeftGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>
            <linearGradient id="buildingRightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#172554" />
              <stop offset="100%" stopColor="#0c1322" />
            </linearGradient>

            {/* Glowing roads and lines */}
            <linearGradient id="roadGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Coordinate grid plane */}
          <g opacity="0.35" stroke="#1e293b" strokeWidth="1">
            <line x1="100" y1="360" x2="400" y2="190" />
            <line x1="200" y1="420" x2="500" y2="250" />
            <line x1="300" y1="480" x2="600" y2="310" />
            <line x1="400" y1="540" x2="700" y2="370" />
            <line x1="100" y1="360" x2="400" y2="540" />
            <line x1="200" y1="300" x2="500" y2="480" />
            <line x1="300" y1="240" x2="600" y2="420" />
            <line x1="400" y1="190" x2="700" y2="370" />
          </g>

          {/* Road Network with subtle animated traffic pulses */}
          {layers.traffic && (
            <g id="roads-layer">
              {/* Main Arterial Highway (Isometric curve) */}
              <path
                d="M 120 380 Q 320 280 400 320 T 680 460"
                fill="none"
                stroke="#172554"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <path
                d="M 120 380 Q 320 280 400 320 T 680 460"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2"
                strokeDasharray="8 6"
              />

              {/* Cross Street */}
              <path
                d="M 280 200 L 520 480"
                fill="none"
                stroke="#0f172a"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 280 200 L 520 480"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* Moving Traffic Packets (Simulated animated vehicles) */}
              <circle
                cx={200 + ((tick * 2.4) % 400)}
                cy={340 + (((tick * 2.4) % 400) * 0.25)}
                r="3.5"
                fill="#38bdf8"
                filter="url(#neonGlow)"
              />
              <circle
                cx={260 + (((tick + 60) * 2.2) % 360)}
                cy={370 + ((((tick + 60) * 2.2) % 360) * 0.22)}
                r="3"
                fill="#22d3ee"
                filter="url(#neonGlow)"
              />
              <circle
                cx={320 + (((tick + 140) * 1.8) % 320)}
                cy={250 + ((((tick + 140) * 1.8) % 320) * 0.65)}
                r="3.5"
                fill="#67e8f9"
                filter="url(#neonGlow)"
              />
            </g>
          )}

          {/* Energy Transmission Grid Layer */}
          {layers.energy && (
            <g id="energy-layer" opacity="0.85">
              <path
                d="M 220 280 L 320 240 L 480 210 L 560 300"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeDashoffset={-tick * 2}
              />
              <circle cx="220" cy="280" r="4" fill="#0891b2" />
              <circle cx="320" cy="240" r="4" fill="#06b6d4" />
              <circle cx="480" cy="210" r="4" fill="#22d3ee" />
              <circle cx="560" cy="300" r="4" fill="#0891b2" />
            </g>
          )}

          {/* Isometric 3D Buildings */}
          <g id="buildings-layer">
            {/* Building 1: Tower North */}
            <g 
              className="cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setActiveNode({ id: 'BLDG-A', label: 'Commercial Core Tower A', load: '92% Occupancy', status: 'HVAC Optimal' })}
            >
              {/* Left Wall */}
              <polygon points="360,180 360,280 410,310 410,210" fill="url(#buildingLeftGrad)" stroke="#1e293b" strokeWidth="0.5" />
              {/* Right Wall */}
              <polygon points="410,210 410,310 470,270 470,170" fill="url(#buildingRightGrad)" stroke="#334155" strokeWidth="0.5" />
              {/* Roof Top */}
              <polygon points="360,180 410,150 470,170 410,210" fill="url(#buildingTopGrad)" stroke="#06b6d4" strokeWidth="1.5" />
              
              {/* Wireframe Floor Lines */}
              <line x1="360" y1="205" x2="410" y2="235" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.6" />
              <line x1="410" y1="235" x2="470" y2="195" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.6" />
              <line x1="360" y1="235" x2="410" y2="265" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.6" />
              <line x1="410" y1="265" x2="470" y2="225" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.6" />
              <line x1="360" y1="260" x2="410" y2="290" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.6" />
              <line x1="410" y1="290" x2="470" y2="250" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.6" />

              {/* Antenna / Beacon */}
              <line x1="410" y1="150" x2="410" y2="120" stroke="#06b6d4" strokeWidth="1.5" />
              <circle cx="410" cy="120" r="3" fill="#22d3ee" className="animate-ping" />
              <circle cx="410" cy="120" r="2" fill="#ffffff" />
            </g>

            {/* Building 2: Mid-Rise Lab West */}
            <g 
              className="cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setActiveNode({ id: 'BLDG-B', label: 'Transit Hub Terminal', load: '14,200 pax/hr', status: 'Peak Surge' })}
            >
              <polygon points="230,240 230,320 290,360 290,280" fill="url(#buildingLeftGrad)" stroke="#1e293b" strokeWidth="0.5" />
              <polygon points="290,280 290,360 340,330 340,250" fill="url(#buildingRightGrad)" stroke="#1e293b" strokeWidth="0.5" />
              <polygon points="230,240 280,210 340,250 290,280" fill="url(#buildingTopGrad)" stroke="#38bdf8" strokeWidth="1" />
              
              <line x1="230" y1="270" x2="290" y2="310" stroke="#38bdf8" strokeWidth="0.5" opacity="0.5" />
              <line x1="290" y1="310" x2="340" y2="280" stroke="#38bdf8" strokeWidth="0.5" opacity="0.5" />
            </g>

            {/* Building 3: Stadium / Core Dome Center */}
            <g 
              className="cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setActiveNode({ id: 'BLDG-C', label: 'Civic Arena & Concourse', load: '68% Capacity', status: 'Nominal Egress' })}
            >
              <polygon points="450,280 450,370 530,420 530,330" fill="url(#buildingLeftGrad)" stroke="#1e293b" strokeWidth="0.5" />
              <polygon points="530,330 530,420 610,370 610,280" fill="url(#buildingRightGrad)" stroke="#172554" strokeWidth="0.5" />
              <polygon points="450,280 530,230 610,280 530,330" fill="#0f1f38" stroke="#06b6d4" strokeWidth="1.5" />

              {/* Dome concentric rings */}
              <ellipse cx="530" cy="280" rx="45" ry="25" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="530" cy="280" rx="22" ry="12" fill="#06b6d4" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1" />
            </g>

            {/* Building 4: Logistics Depot South */}
            <g>
              <polygon points="280,380 280,440 350,480 350,420" fill="url(#buildingLeftGrad)" stroke="#1e293b" strokeWidth="0.5" />
              <polygon points="350,420 350,480 400,450 400,390" fill="url(#buildingRightGrad)" stroke="#1e293b" strokeWidth="0.5" />
              <polygon points="280,380 330,350 400,390 350,420" fill="url(#buildingTopGrad)" stroke="#38bdf8" strokeWidth="1" />
            </g>
          </g>

          {/* People Flow Indicators (Crowd Density Heat Vectors) */}
          {layers.pedestrians && (
            <g id="pedestrian-layer">
              {/* Concourse cluster 1 */}
              {[
                { x: 380, y: 340 }, { x: 395, y: 345 }, { x: 410, y: 338 },
                { x: 425, y: 350 }, { x: 388, y: 360 }, { x: 440, y: 342 },
                { x: 450, y: 360 }, { x: 465, y: 355 }, { x: 480, y: 370 },
              ].map((dot, i) => (
                <circle
                  key={`ped-${i}`}
                  cx={dot.x + Math.sin((tick * 0.05) + i) * 8}
                  cy={dot.y + Math.cos((tick * 0.05) + i) * 5}
                  r="2.5"
                  fill="#00f0ff"
                  opacity="0.85"
                />
              ))}

              {/* Streaming flow vectors */}
              <path
                d="M 360 380 L 460 410"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="4 8"
                strokeDashoffset={-tick * 1.5}
                opacity="0.7"
              />
              <path
                d="M 440 320 L 510 350"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="3 6"
                strokeDashoffset={-tick * 2}
                opacity="0.7"
              />
            </g>
          )}

          {/* Probability & Simulation Stress Cones */}
          {layers.stressCones && (
            <g id="stress-cones" opacity="0.9">
              {/* Cone showing branch reality exploration */}
              <polygon
                points="410,310 490,260 520,310"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity="0.5"
              />
              <polygon
                points="410,310 490,260 520,310"
                fill="#06b6d4"
                fillOpacity="0.08"
              />

              {/* Telemetry Point Pin */}
              <g 
                className="cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setActiveNode({ id: 'PNT-88', label: 'Egress Convergence Zone', load: 'Risk Level: 4%', status: 'Safe Threshold' })}
              >
                <circle cx="490" cy="260" r="10" fill="#06b6d4" fillOpacity="0.2" className="animate-ping" />
                <circle cx="490" cy="260" r="5" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />
                <text x="502" y="264" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  98.4% NOMINAL
                </text>
              </g>

              {/* Bottleneck Resolved Node */}
              <g
                className="cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setActiveNode({ id: 'CHOKE-01', label: 'Turnstile Chokepoint #2', load: 'Mitigated via 2.4m Widening', status: 'Clearance Confirmed' })}
              >
                <circle cx="340" cy="330" r="8" fill="#10b981" fillOpacity="0.25" />
                <circle cx="340" cy="330" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
                <text x="250" y="325" fill="#34d399" fontSize="9" fontFamily="monospace">
                  BOTTLENECK CLEARED
                </text>
              </g>
            </g>
          )}

          {/* Active Data Node HUD Overlay (SVG) */}
          <g>
            <rect x="30" y="30" width="180" height="70" rx="8" fill="#070d1a" fillOpacity="0.85" stroke="#1e293b" strokeWidth="1" />
            <circle cx="46" cy="46" r="4" fill="#06b6d4" />
            <text x="58" y="50" fill="#94a3b8" fontSize="10" fontFamily="monospace">LIVE TELEMETRY FEED</text>
            <text x="44" y="70" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">AGENTS: 1,420,800</text>
            <text x="44" y="86" fill="#34d399" fontSize="10" fontFamily="monospace">CONCURRENCY: 100%</text>
          </g>
        </svg>

        {/* FLOATING INTERFACE: SIMULATION COMPLETE */}
        {/* As required by prompt:
            SIMULATION COMPLETE
            Scenarios Tested: 50,000+
            Variables: 1,240
            Projected Risk: ↓ 34%
            Presented clearly as an example simulation interface.
        */}
        <div
          id="floating-sim-complete-card"
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-64 sm:w-72 rounded-xl bg-[#090e1c]/95 backdrop-blur-xl border border-cyan-500/40 p-4 shadow-2xl shadow-cyan-950/60 z-20 pointer-events-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                SIMULATION COMPLETE
              </span>
            </div>
            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
              SYNTHETIC RUN
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="space-y-2.5 font-mono">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Scenarios Tested</span>
              <span className="text-sm font-bold text-white tracking-wide">
                {preset.baseStats.scenariosTested}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Variables</span>
              <span className="text-sm font-bold text-slate-200">
                {preset.baseStats.variables}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/5">
              <span className="text-xs text-slate-400">Projected Risk</span>
              <span className="text-sm font-extrabold text-cyan-400 flex items-center gap-1">
                <span>{preset.baseStats.riskReduction}</span>
              </span>
            </div>
          </div>

          {/* Explicit disclaimer note required by prompt */}
          <div className="mt-3 pt-2 border-t border-white/5 text-[9px] font-mono text-slate-400 leading-tight">
            * Example simulation interface readout based on synthetic scenario batch #084.
          </div>
        </div>

        {/* Selected Node Inspector (If clicked) */}
        {activeNode && (
          <div className="absolute top-4 left-4 hidden sm:block w-60 rounded-lg bg-[#070c18]/90 backdrop-blur-md border border-white/10 p-3 z-10 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 pb-1 mb-1 border-b border-white/10">
              <span className="text-cyan-400 font-semibold">{activeNode.id}</span>
              <span className="text-[10px] text-emerald-400">{activeNode.status}</span>
            </div>
            <div className="text-white font-medium truncate">{activeNode.label}</div>
            <div className="text-slate-400 text-[11px] mt-1">{activeNode.load}</div>
          </div>
        )}
      </div>

      {/* Bottom Interactive Controls */}
      <div className="p-3 sm:p-4 bg-[#070b16] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Layer Toggles */}
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
          <span className="text-slate-500 font-mono text-[10px] uppercase mr-1 hidden sm:inline">Layers:</span>
          
          <button
            onClick={() => setLayers(l => ({ ...l, traffic: !l.traffic }))}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1.5 ${
              layers.traffic
                ? 'bg-blue-950/80 text-blue-300 border border-blue-700/60'
                : 'text-slate-400 hover:text-slate-200 bg-white/5 border border-transparent'
            }`}
          >
            <Navigation className="w-3 h-3" />
            <span>Traffic</span>
          </button>

          <button
            onClick={() => setLayers(l => ({ ...l, pedestrians: !l.pedestrians }))}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1.5 ${
              layers.pedestrians
                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-700/60'
                : 'text-slate-400 hover:text-slate-200 bg-white/5 border border-transparent'
            }`}
          >
            <Users className="w-3 h-3" />
            <span>People Flow</span>
          </button>

          <button
            onClick={() => setLayers(l => ({ ...l, energy: !l.energy }))}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1.5 ${
              layers.energy
                ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-700/60'
                : 'text-slate-400 hover:text-slate-200 bg-white/5 border border-transparent'
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>Energy Grid</span>
          </button>

          <button
            onClick={() => setLayers(l => ({ ...l, stressCones: !l.stressCones }))}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all flex items-center gap-1.5 ${
              layers.stressCones
                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/60'
                : 'text-slate-400 hover:text-slate-200 bg-white/5 border border-transparent'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>Stress Cones</span>
          </button>
        </div>

        {/* Playback & Speed Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-md bg-white/10 hover:bg-white/15 text-white transition-colors"
            title={isPlaying ? "Pause simulation" : "Run simulation"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
          </button>

          <div className="flex items-center rounded-md bg-white/5 p-0.5 border border-white/10 text-[10px] font-mono">
            {([1, 5, 25] as const).map((spd) => (
              <button
                key={spd}
                onClick={() => setSimSpeed(spd)}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  simSpeed === spd ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setTimelineHour(8);
              setTick(0);
            }}
            className="p-1.5 rounded-md text-slate-400 hover:text-white transition-colors"
            title="Reset timeline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
