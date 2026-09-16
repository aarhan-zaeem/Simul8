import React, { useState, useEffect } from 'react';
import { Cpu, ArrowRight, ShieldCheck, ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onRequestDemo: () => void;
  onSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo, onSignIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050811]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/40'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* SIMUL8 Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          id="brand-logo"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-900 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all">
            <div className="w-full h-full bg-[#070b16] rounded-[6px] flex items-center justify-center">
              <span className="font-mono font-black text-cyan-400 tracking-tighter text-sm flex items-center">
                S<span className="text-white">8</span>
              </span>
            </div>
            {/* Ambient glow dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-wider text-white font-mono flex items-center gap-1.5">
              SIMUL<span className="text-cyan-400 font-black">8</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono -mt-1">
              Future Infrastructure
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('platform')}
            className="hover:text-cyan-400 transition-colors focus:outline-none"
            id="nav-link-platform"
          >
            Platform
          </button>
          <button
            onClick={() => scrollToSection('problem')}
            className="hover:text-cyan-400 transition-colors focus:outline-none"
            id="nav-link-solutions"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection('industries')}
            className="hover:text-cyan-400 transition-colors focus:outline-none"
            id="nav-link-industries"
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-cyan-400 transition-colors focus:outline-none"
            id="nav-link-how-it-works"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="hover:text-cyan-400 transition-colors focus:outline-none"
            id="nav-link-pricing"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-cyan-400 transition-colors focus:outline-none"
            id="nav-link-about"
          >
            About
          </button>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onSignIn}
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors focus:outline-none"
            id="btn-sign-in"
          >
            Sign In
          </button>
          <button
            onClick={onRequestDemo}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:from-cyan-400 hover:to-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            id="btn-request-demo-nav"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onRequestDemo}
            className="text-xs px-3 py-1.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b16] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-slate-300 text-sm font-medium">
            <button
              onClick={() => scrollToSection('platform')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Platform
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('industries')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              About
            </button>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignIn();
              }}
              className="w-full py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm text-center"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDemo();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm text-center flex items-center justify-center gap-2"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
