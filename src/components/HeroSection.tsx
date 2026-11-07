import React from 'react';
import { HERO_BACKGROUND_IMAGE, STATS } from '../data/content';
import { ArrowRight, Sparkles, Shield, Cpu, Cloud, Calculator } from 'lucide-react';
import { PageRoute } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenProposal }) => {
  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#050507]">
      {/* Background Image: User Attached Laptop Nebula Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BACKGROUND_IMAGE}
          alt="Nova Nexus Nebula Horizon"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />

        {/* Sophisticated Scrims for Perfect WCAG Contrast & Depth */}
        {/* Top gradient for header readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-[#050507]/75 to-transparent h-48 z-10" />

        {/* Overall dark atmospheric veil to keep text perfectly legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-[#050507]/70 to-[#050507]/85 z-10" />

        {/* Bottom fade into the page body */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#050507] via-[#050507]/90 to-transparent z-10" />

        {/* Ambient red & crimson radial glow accents */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none z-10" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full my-auto">
        <div className="max-w-4xl space-y-6">
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-red-500/40 text-red-300 text-xs font-medium tracking-wide backdrop-blur-md shadow-lg shadow-black/60">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Full-Spectrum Digital Agency & Autonomous AI Studio</span>
          </div>

          {/* Main Headline in Roboto — locked to two lines on desktop */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md">
            Building Resilient Platforms &{' '}
            <span className="text-gradient-red inline-block">Intelligent Autonomous Agents</span>
          </h1>

          {/* Concrete value proposition in Noto Sans */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
            Nova Nexus turns complex technical hurdles into competitive advantages. We design and deploy high-availability
            cloud infrastructure, bespoke web platforms, cross-platform iOS & Android mobile apps, custom AI neural agents,
            and programmatic SEO engines.
          </p>

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenProposal}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-lg shadow-red-600/35 hover:shadow-red-600/60 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Launch Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('estimator')}
              className="px-6 py-3.5 text-sm font-medium text-slate-100 hover:text-white bg-black/60 hover:bg-black/80 border border-white/15 hover:border-red-500/50 rounded-xl transition-all cursor-pointer backdrop-blur-md flex items-center gap-2 shadow-lg shadow-black/40"
            >
              <Calculator className="w-4 h-4 text-red-400" />
              <span>Scope Estimator</span>
            </button>
          </div>

          {/* Quick feature checklist */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm">
              <Cloud className="w-4 h-4 text-red-400" />
              <span>Zero-Downtime Cloud Clusters</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-red-400" />
              <span>Autonomous AI Workflows</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-red-400" />
              <span>Enterprise SOC2 & 99.99% SLA</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Strip integrated at bottom of Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12">
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#0c0c11]/85 border border-white/10 hover:border-red-500/40 rounded-xl p-4 sm:p-5 backdrop-blur-md transition-all shadow-lg shadow-black/50"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500 font-sans">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
