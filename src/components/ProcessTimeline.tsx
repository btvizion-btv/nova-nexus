import React, { useState } from 'react';
import { Compass, Palette, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface ProcessTimelineProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onNavigate, onOpenProposal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery & System Blueprint',
      subtitle: 'Week 1 · Specification & Security',
      icon: <Compass className="w-6 h-6 text-red-500" />,
      tagline: 'Eliminating architectural debt before writing a single line of code.',
      description: 'We perform deep architectural profiling, traffic concurrency modeling, database schema planning, and API mapping. We produce an exhaustive technical blueprint, security compliance plan, and guaranteed sprint deliverables.',
      deliverables: [
        'Full System Architecture Specification (SOW)',
        'Database Schema & Data Flow Diagrams',
        'Multi-Cloud Infrastructure Cost Estimate',
        'Signed Mutual NDA & IP Assignment'
      ]
    },
    {
      num: '02',
      title: 'Bespoke UI/UX & Design Tokens',
      subtitle: 'Weeks 2–3 · Design Systems',
      icon: <Palette className="w-6 h-6 text-rose-500" />,
      tagline: 'Crafting responsive, high-converting digital interfaces.',
      description: 'Every screen is custom-built with micro-interactions, hardware-accelerated animations, and design tokens mapped directly to Tailwind CSS and React component libraries.',
      deliverables: [
        'Interactive Figma Prototype (Desktop & Mobile)',
        'Design System Token Library in Tailwind CSS',
        'WCAG AA Accessibility Audit Report',
        'Interactive Clickable Component Previews'
      ]
    },
    {
      num: '03',
      title: 'Full-Stack Sprint Delivery',
      subtitle: 'Weeks 4–8 · High-Velocity Sprints',
      icon: <Code2 className="w-6 h-6 text-red-500" />,
      tagline: 'Bi-weekly production deployments with continuous review.',
      description: 'Our senior squads write clean, type-safe TypeScript code backed by automated unit, integration, and E2E Cypress tests. Every git commit triggers an isolated preview branch for your team to test in real time.',
      deliverables: [
        'Production Git Repository with CI/CD Pipelines',
        'Staging Environment Branch with Live Preview URLs',
        'Autonomous Multi-Agent AI System Integrations',
        'iOS & Android Cross-Platform Native Binaries'
      ]
    },
    {
      num: '04',
      title: 'Anycast Launch & 24/7 SLA',
      subtitle: 'Week 9+ · Production Scale',
      icon: <Rocket className="w-6 h-6 text-rose-400" />,
      tagline: 'Zero-downtime global cutover and managed DevOps.',
      description: 'We execute zero-downtime DNS cutovers across 320+ Anycast edge PoPs, establish automated disaster recovery snapshots, and provide ongoing 24/7 incident response backed by our 99.99% uptime guarantee.',
      deliverables: [
        'Multi-Region Kubernetes Production Cluster',
        'Cloudflare Enterprise Anycast CDN & WAF Shield',
        'Live Grafana & Prometheus Telemetry Dashboard',
        '30-Day Post-Launch Warranty & 24/7 DevOps Support'
      ]
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="py-24 section-bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-red-950/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <span>THE ELEMENTOR-GRADE SPRINT ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How Nova Nexus Ships from Concept to Scale
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our disciplined four-phase delivery framework replaces agency ambiguity with milestone-driven precision.
          </p>
        </div>

        {/* 4 Interactive Step Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                  isActive
                    ? 'bg-[#11090c] border-red-500/60 shadow-xl shadow-red-950/60 ring-1 ring-red-500/40'
                    : 'bg-[#0a0a0f] border-white/5 hover:border-red-500/30 hover:bg-[#0e0e14]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                    isActive ? 'bg-red-950/80 border-red-500/50 shadow-md' : 'bg-white/5 border-white/10 group-hover:border-red-500/30'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`text-xl font-sans font-extrabold ${isActive ? 'text-red-400' : 'text-slate-600 group-hover:text-slate-400'}`}>
                    {step.num}
                  </span>
                </div>

                <div className="text-xs font-sans text-red-400 mb-1">{step.subtitle}</div>
                <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase Box */}
        <div className="bg-[#0b0b10] border border-red-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
          <div className="absolute top-0 right-0 p-8 text-8xl font-black font-sans text-white/[0.02] select-none pointer-events-none">
            {current.num}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-sans font-bold text-red-400 bg-red-950/70 border border-red-500/40 px-3 py-1 rounded-md">
                  PHASE {current.num}
                </span>
                <span className="text-xs text-slate-400 font-sans">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {current.title}
              </h3>

              <p className="text-red-300 text-sm font-medium italic">
                "{current.tagline}"
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenProposal}
                  className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-md shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule Phase 01 Discovery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('estimator')}
                  className="px-5 py-3 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
                >
                  Estimate Phase Timeline
                </button>
              </div>
            </div>

            {/* Deliverables Column */}
            <div className="lg:col-span-5 bg-[#120a0d] border border-red-500/20 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="text-xs font-sans uppercase tracking-wider text-red-400 font-bold">
                Phase Deliverables & Verification:
              </div>
              <ul className="space-y-3">
                {current.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 font-sans flex items-center justify-between">
                <span>Production Quality Check:</span>
                <span className="text-emerald-400 font-bold">PASSED (100%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
