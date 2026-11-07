import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { PageRoute } from '../types';
import {
  Server,
  Layout,
  Smartphone,
  Cpu,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenProposal,
  onSelectServiceForQuote,
}) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Server':
        return <Server className="w-5 h-5 text-red-500" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-red-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-rose-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-red-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-rose-400" />;
      default:
        return <Zap className="w-5 h-5 text-red-400" />;
    }
  };

  const currentService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <div className="pt-32 pb-24 section-bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <Terminal className="w-3.5 h-3.5 text-red-400" />
            <span>Nova Nexus Specialized Technical Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            End-to-End Technical Capabilities
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Explore our five core development and infrastructure disciplines. We deliver production-grade systems
            engineered for extreme reliability, native mobile performance, autonomous AI automation, and high organic search capture.
          </p>
        </div>

        {/* Interactive Service Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14 p-1.5 glass-card rounded-2xl max-w-4xl mx-auto">
          {SERVICES.map((svc) => {
            const isActive = activeTab === svc.id;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveTab(svc.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-md shadow-red-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {getIcon(svc.iconName)}
                <span>{svc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep Dive Showcase */}
        <div className="glass-card rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 mb-20 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-sans text-red-400 bg-red-950/60 border border-red-500/30 px-3 py-1 rounded-md">
                  {currentService.badge}
                </span>
                <span className="text-xs text-slate-400 font-sans">
                  Standard SLA: {currentService.metrics}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {currentService.title}
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                {currentService.fullDesc}
              </p>

              {/* Core Features */}
              <div className="space-y-3">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400">
                  Key Technical Features:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400">
                  Sprint Deliverables:
                </h3>
                <div className="space-y-2">
                  {currentService.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 flex items-start gap-2"
                    >
                      <ShieldCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Core Technologies:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentService.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-sans text-red-300 bg-red-950/40 border border-red-500/30 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    onSelectServiceForQuote(currentService.id);
                    onNavigate('estimator');
                  }}
                  className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-md shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Estimate Scope for {currentService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenProposal}
                  className="px-6 py-3 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
                >
                  Book Discovery Session
                </button>
              </div>
            </div>

            {/* Right Media Preview Column */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-red-500/30 shadow-xl relative group">
                <img
                  src={currentService.image || currentService.deliverables[0]}
                  alt={currentService.title}
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c11] via-[#0c0c11]/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#08080c]/90 border border-red-500/30 backdrop-blur-md">
                  <div className="text-xs font-sans text-red-400 font-semibold mb-1">
                    PRODUCTION GUARANTEE
                  </div>
                  <div className="text-sm font-bold text-white">
                    {currentService.metrics}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Complete IP ownership, zero vendor lock-in, documented code repos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All 5 Services Full Grid Overview */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white">All 5 Core Service Catalogs</h3>
            <p className="text-xs text-slate-400 mt-1">
              Select any capability below to immediately view full architecture and calculate project investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === s.id
                    ? 'bg-red-950/30 border-red-500/60 shadow-lg shadow-red-950/40'
                    : 'glass-card rounded-2xl'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
                    {getIcon(s.iconName)}
                  </div>
                  <span className="text-[10px] font-sans text-red-400 bg-red-950/40 border border-red-500/20 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{s.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {s.shortDesc}
                </p>
                <div className="text-[11px] font-semibold text-red-400 flex items-center gap-1">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
