import React, { useState } from 'react';
import { X, Lock, KeyRound, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [ssoDomain, setSsoDomain] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
  };

  const resetAndClose = () => {
    setSignedIn(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      id="signin-modal-overlay"
    >
      <div 
        className="relative w-full max-w-md rounded-2xl bg-[#090e1c] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 overflow-hidden"
        id="signin-modal"
      >
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!signedIn ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest">
                <Lock className="w-3.5 h-3.5" />
                <span>SECURE ENTERPRISE GATEWAY</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Sign In to SIMUL8
              </h3>
              <p className="text-xs text-slate-400">
                Access your organization's digital twin models and active simulation runs.
              </p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 uppercase mb-1.5">
                  Corporate / Government SSO Identity
                </label>
                <input
                  type="email"
                  required
                  value={ssoDomain}
                  onChange={(e) => setSsoDomain(e.target.value)}
                  placeholder="name@organization.com or .gov"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <span>Authenticate via SAML 2.0 / SSO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-slate-500 text-[10px] font-mono uppercase">Or sign in with</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <button
                onClick={() => setSignedIn(true)}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-center"
              >
                Okta Verified
              </button>
              <button
                onClick={() => setSignedIn(true)}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-center"
              >
                GovCloud PIV/CAC
              </button>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-[10px] font-mono text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>TLS 1.3 · Mutual Certificate Auth · FedRAMP High Ready</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-mono">
                SSO Identity Handshake Verified
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Redirecting to your enterprise simulation workspace...
              </p>
            </div>
            <button
              onClick={resetAndClose}
              className="px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs uppercase"
            >
              Continue to Portal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
