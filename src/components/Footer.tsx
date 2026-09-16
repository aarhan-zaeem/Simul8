import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal, Heart } from 'lucide-react';

interface FooterProps {
  onRequestDemo: () => void;
  onSignIn: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestDemo, onSignIn }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060d] border-t border-white/10 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#070b16] rounded-[6px] flex items-center justify-center">
                  <span className="font-mono font-black text-cyan-400 text-xs">S8</span>
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white font-mono">
                SIMUL<span className="text-cyan-400">8</span>
              </span>
            </div>

            <p className="text-slate-300 font-medium text-sm leading-relaxed">
              "Test the future before you build it."
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SIMUL8 creates digital simulations of real-world environments, allowing organizations 
              to stress-test thousands of possible future scenarios before committing physical capital 
              or breaking ground.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080e1b] border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>GPU CLUSTER STATUS: 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Nav Column 1: Platform */}
          <div className="space-y-3">
            <div className="text-white font-bold font-mono uppercase tracking-wider text-xs">
              Platform
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('platform')} className="hover:text-cyan-400 transition-colors">
                  Simulation Workbench
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-cyan-400 transition-colors">
                  Digital Twin Engine
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('specs')} className="hover:text-cyan-400 transition-colors">
                  Multi-Agent Dynamics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('specs')} className="hover:text-cyan-400 transition-colors">
                  Deterministic Physics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="hover:text-cyan-400 transition-colors">
                  BIM & CAD Pipeline
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Solutions */}
          <div className="space-y-3">
            <div className="text-white font-bold font-mono uppercase tracking-wider text-xs">
              Industries
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('industries')} className="hover:text-cyan-400 transition-colors">
                  Civil Megaprojects
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('industries')} className="hover:text-cyan-400 transition-colors">
                  Sports Arenas & Venues
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('industries')} className="hover:text-cyan-400 transition-colors">
                  Intermodal Ports & Rail
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('industries')} className="hover:text-cyan-400 transition-colors">
                  Defense & Mission-Critical
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('industries')} className="hover:text-cyan-400 transition-colors">
                  Healthcare & Biocontainment
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Company */}
          <div className="space-y-3">
            <div className="text-white font-bold font-mono uppercase tracking-wider text-xs">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-cyan-400 transition-colors">
                  About SIMUL8
                </button>
              </li>
              <li>
                <button onClick={onRequestDemo} className="hover:text-cyan-400 transition-colors">
                  Executive Leadership
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-cyan-400 transition-colors">
                  Enterprise Pricing
                </button>
              </li>
              <li>
                <button onClick={onRequestDemo} className="hover:text-cyan-400 transition-colors">
                  Simulation Research Lab
                </button>
              </li>
              <li>
                <button onClick={onRequestDemo} className="hover:text-cyan-400 transition-colors">
                  Careers (Hiring Engineers)
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 4: Compliance & Access */}
          <div className="space-y-3">
            <div className="text-white font-bold font-mono uppercase tracking-wider text-xs">
              Access & Trust
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={onSignIn} className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>SSO Client Portal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={onRequestDemo} className="hover:text-cyan-400 transition-colors">
                  Request Digital Twin Audit
                </button>
              </li>
              <li>
                <span className="text-slate-500 font-mono text-[11px] block mt-2">CERTIFIED TRUST</span>
                <span className="text-slate-400 text-[11px]">SOC 2 Type II · FedRAMP High · ISO 27001</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Security */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} SIMUL8 Technologies Inc. All rights reserved. "Test the future before you build it."
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Security Whitepaper</a>
            <a href="#" className="hover:text-slate-300">Terms of Simulation Service</a>
            <a href="#" className="hover:text-slate-300">Sovereign Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
