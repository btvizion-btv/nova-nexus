import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenProposal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Cloud & Hosting', page: 'hosting' },
    { label: 'Scope Estimator', page: 'estimator' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080c]/95 backdrop-blur-md border-b border-red-500/20 py-2.5 shadow-xl shadow-black/80'
          : 'bg-[#050507]/90 backdrop-blur-sm border-b border-white/5 py-0'
      }`}
    >
      {/* Elementor Pro Top Micro-Bar (Collapses gently on scroll) */}
      {!scrolled && (
        <div className="hidden md:block border-b border-white/5 bg-[#030305] text-[11px] font-sans text-slate-400 py-1.5 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300">Sandton, Johannesburg HQ</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="text-slate-400">POPIA & SOC2 Aligned Solutions</span>
              <span className="text-white/20">|</span>
              <span className="text-slate-400">Teraco JHB & CPT Cloud Nodes</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="tel:+27735945252"
                className="hover:text-red-400 text-slate-300 transition-colors font-medium"
              >
                Shivaan: +27 73 594 5252
              </a>
              <span className="text-white/20">|</span>
              <a
                href="tel:+27746732263"
                className="hover:text-red-400 text-slate-300 transition-colors font-medium"
              >
                Novi: +27 74 673 2263
              </a>
              <span className="text-white/20">|</span>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-red-400 text-slate-300 transition-colors font-medium cursor-pointer"
              >
                solutions@novanexus.co.za
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${scrolled ? '' : 'py-3.5'}`}>
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1 -m-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center p-0.5 shadow-md shadow-red-600/30 group-hover:shadow-red-500/50 transition-shadow">
              <div className="w-full h-full bg-[#0a0a0d] rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-500 via-rose-400 to-red-300 text-lg tracking-wider">
                  N
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap group-hover:text-red-400 transition-colors">
                NOVA<span className="text-red-500">NEXUS</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-white ${
                    isActive ? 'text-red-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-rose-600 rounded-full shadow-sm shadow-red-500/50" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenProposal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 rounded-lg transition-all shadow-md shadow-red-600/30 hover:shadow-red-600/50 whitespace-nowrap shrink-0"
            >
              <span>Get Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c11] border-b border-red-500/20 px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-lg shadow-md shadow-red-600/30 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Request Free Discovery Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
