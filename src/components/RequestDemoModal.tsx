import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Building, Calendar, Mail, User, Shield, Sparkles } from 'lucide-react';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    organization: '',
    domain: 'Civil Megaproject & Municipal Infrastructure',
    capitalRange: '$250M – $1 Billion',
    timeframe: 'Next 3–6 months before groundbreaking',
    name: '',
    workEmail: '',
    role: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      id="request-demo-modal-overlay"
    >
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-[#090e1c] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 overflow-hidden"
        id="request-demo-modal"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>EXECUTIVE DEMO & SIMULATION ASSESSMENT</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Request a SIMUL8 Architecture Demo
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Meet with our computational simulation directors to ingest your BIM/CAD models 
                and stress-test your upcoming capital deployment.
              </p>
            </div>

            {/* Stepper indicator */}
            <div className="flex items-center gap-2 mb-6 text-xs font-mono">
              <span className={`px-2.5 py-1 rounded ${step === 1 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'}`}>
                1. Project Scope
              </span>
              <span className="text-slate-600">→</span>
              <span className={`px-2.5 py-1 rounded ${step === 2 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'}`}>
                2. Contact & Stakeholder
              </span>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-300 uppercase mb-1.5">
                    Organization / Consortium Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Metropolitan Transit Authority or Bechtel"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1.5">
                    Infrastructure Domain *
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option>Civil Megaproject & Municipal Infrastructure</option>
                    <option>Transportation, Aviation & Rail Corridors</option>
                    <option>Sports Stadiums & Mega-Entertainment Arenas</option>
                    <option>Automated Ports & Intermodal Freight Logistics</option>
                    <option>Defense, Aerospace & High-Consequence Facilities</option>
                    <option>Healthcare & Biocontainment Complexes</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1.5">
                      Target Asset Capital *
                    </label>
                    <select
                      value={formData.capitalRange}
                      onChange={(e) => setFormData({ ...formData, capitalRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option>$10M – $50 Million</option>
                      <option>$50M – $250 Million</option>
                      <option>$250M – $1 Billion</option>
                      <option>$1 Billion+ Megaproject</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 uppercase mb-1.5">
                      Groundbreaking Target *
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070b16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option>Under 3 months (Urgent Audit)</option>
                      <option>Next 3–6 months</option>
                      <option>6–12 months</option>
                      <option>Conceptual Planning (12+ mos)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.organization) {
                        setFormData({ ...formData, organization: 'Apex Global Infrastructure' });
                      }
                      setStep(2);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Proceed to Contact</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Marcus Vance"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 uppercase mb-1.5">
                      Professional Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="vance@agency.gov or corporate"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1.5">
                    Role / Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Chief Project Engineer, VP Infrastructure Planning"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1.5">
                    Simulation Goals / Specific Edge Cases
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Ingress crowd bottlenecks, 100-year storm flood routing, mechanical elevator failure..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-[10px] text-slate-400">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA and FedRAMP / GovCloud confidentiality standards automatically apply.</span>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-slate-400 hover:text-white"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25"
                  >
                    <span>Schedule Simulation Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                ASSESSMENT REQUEST LOGGED
              </div>
              <h4 className="text-2xl font-bold text-white">
                Simulation Briefing Initialized
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || 'Partner'}. A senior simulation director from the{' '}
                <span className="text-white font-semibold">{formData.domain}</span> division 
                has been assigned to your asset docket.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-left max-w-sm mx-auto space-y-1 text-slate-300">
              <div className="text-slate-400 text-[10px]">DOCKET REF:</div>
              <div className="text-cyan-400 font-bold">#SM8-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div className="text-slate-400 text-[10px] mt-2">DISPATCH ETA:</div>
              <div>Within 4 hours (Executive SLA)</div>
            </div>

            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors"
              >
                Return to Simulation Platform
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
