import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Zap, Code2 } from 'lucide-react';
import { PageRoute } from '../types';

interface SkillsSectionProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onNavigate, onOpenProposal }) => {
  const skills = [
    {
      title: 'High-Availability Cloud & Kubernetes Architecture',
      level: 99,
      display: '99.9%',
      tag: 'DevOps & Multi-Cloud',
    },
    {
      title: 'Full-Stack Web & Next.js Distributed Applications',
      level: 98,
      display: '98.5%',
      tag: 'React 19 & TypeScript',
    },
    {
      title: 'Autonomous Multi-Agent AI & Vector Retrieval Systems',
      level: 96,
      display: '96.8%',
      tag: 'Neural Workflows',
    },
    {
      title: 'Cross-Platform iOS, Android & Wearables Development',
      level: 95,
      display: '95.4%',
      tag: 'Native Performance',
    },
    {
      title: 'Technical Search Engine Optimization & Core Web Vitals',
      level: 99,
      display: '99.2%',
      tag: 'Performance & Indexing',
    },
  ];

  return (
    <section className="py-20 section-bg-red relative overflow-hidden border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-red-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, description, and highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/35 text-red-300 text-xs font-sans font-medium">
              <Award className="w-3.5 h-3.5 text-red-400" />
              <span>MEASURABLE PERFORMANCE BENCHMARKS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Precision Delivery That Outperforms Traditional Agencies
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We do not outsource to junior contractors or stitch brittle templates together. Every solution engineered by Nova Nexus is rigorously profiled against real-world throughput, sub-100ms response targets, and institutional cybersecurity standards.
            </p>

            {/* Value checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-red-500/10 text-red-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">100% In-House Senior Developer Squads</div>
                  <div className="text-xs text-slate-400">Direct Slack/Teams integration with senior staff architects.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-red-500/10 text-red-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Full Intellectual Property & Source Ownership</div>
                  <div className="text-xs text-slate-400">Complete code repository transfer, zero vendor lock-in.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-red-500/10 text-red-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Financial 99.99% Uptime SLA Backing</div>
                  <div className="text-xs text-slate-400">Contractual performance guarantees backed by round-the-clock DevOps.</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenProposal}
                className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-md shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>Discuss Your Specifications</span>
              </button>

              <button
                onClick={() => onNavigate('case-studies')}
                className="px-5 py-3 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
              >
                Inspect Delivered Systems
              </button>
            </div>
          </div>

          {/* Right Column: Progress Bars & Stats Badge */}
          <div className="lg:col-span-6 glass-card glass-card-red rounded-2xl p-6 sm:p-8 space-y-6 relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-sans uppercase tracking-wider text-red-400 font-bold">
                Domain Competency Index
              </span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-sans">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Audited 2026</span>
              </div>
            </div>

            <div className="space-y-5">
              {skills.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-white">{item.title}</span>
                    <span className="font-sans font-bold text-red-400">{item.display}</span>
                  </div>

                  {/* Progress track */}
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 rounded-full transition-all duration-1000 ease-out shadow-sm shadow-red-500/50"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>

                  <div className="flex justify-end">
                    <span className="text-[10px] font-sans text-slate-500 uppercase">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom mini-metric */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="font-sans">Mean Time to Production:</span>
              <span className="text-white font-sans font-bold">14 Business Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
