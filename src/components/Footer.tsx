import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProposal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030305] border-t border-white/10 text-slate-400 text-sm">
      {/* Top Banner / Callout Strip */}
      <div className="border-b border-white/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-red-950/40 via-rose-950/20 to-transparent p-8 rounded-2xl border border-red-500/30 backdrop-blur-sm">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Ready to engineer your next digital breakthrough?
            </h3>
            <p className="text-slate-400 mt-1 text-sm max-w-xl">
              From high-concurrency cloud infrastructure to cross-platform mobile apps and autonomous AI agents.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('estimator')}
              className="px-5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              Estimate Scope & Budget
            </button>
            <button
              onClick={onOpenProposal}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 rounded-lg shadow-md shadow-red-600/30 transition-all flex items-center gap-1.5"
            >
              <span>Schedule Discovery Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 5-column footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#0a0a0d] rounded-[6px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-rose-400 text-sm">
                    N
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                NOVA<span className="text-red-500">NEXUS</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Nova Nexus is a premiere digital consultancy specializing in enterprise cloud architecture,
              high-performance web & mobile applications, autonomous AI agents, and programmatic growth engines.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 font-sans">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>99.99% Edge Uptime SLA</span>
              </span>
              <span className="font-sans text-slate-500">·</span>
              <span className="text-slate-400 font-sans">ISO 27001 & SOC2 Aligned</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Services</p>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Web & Cloud Hosting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Web Design & Dev
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  iOS & Android Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  AI Systems & Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Digital Marketing & SEO
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-red-400 transition-colors text-left">
                  About Nova Nexus
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('case-studies')} className="hover:text-red-400 transition-colors text-left">
                  Client Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('hosting')} className="hover:text-red-400 transition-colors text-left">
                  Cloud Infrastructure Plans
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('estimator')} className="hover:text-red-400 transition-colors text-left">
                  Scope & Pricing Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-red-400 transition-colors text-left">
                  Book Discovery Session
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Offices */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">The Build Dispatch</p>
            <p className="text-xs text-slate-400">
              Bi-weekly technical teardowns on AI agents, edge computing, and high-scale SEO.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-red-400" />
                <span>Thank you! You are subscribed to our tech newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-1.5 px-3 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="pt-2 text-xs space-y-1.5 text-slate-400 font-sans">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>Nova Nexus Tower, 150 Rivonia Rd, Sandton Central, Johannesburg, 2196</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>solutions@novanexus.co.za</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <a href="tel:+27735945252" className="hover:text-red-400 transition-colors">Shivaan: +27 73 594 5252</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <a href="tel:+27746732263" className="hover:text-red-400 transition-colors">Novi: +27 74 673 2263</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>© {new Date().getFullYear()} Nova Nexus (Pty) Ltd. Sandton, Johannesburg, South Africa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">POPIA Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-slate-400 cursor-pointer">SLA Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
