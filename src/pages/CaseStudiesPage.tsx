import React from 'react';
import { CaseStudiesGallery } from '../components/CaseStudiesGallery';
import { PageRoute } from '../types';
import { Award, ShieldCheck, Zap } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onNavigate,
  onOpenProposal,
}) => {
  return (
    <div className="pt-32 pb-24 section-bg-red min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <Award className="w-3.5 h-3.5 text-red-400" />
            <span>Case Studies & Production Deployments</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Architecture in Production
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Real enterprise transformations across FinTech, HealthTech, logistics, and high-concurrency SaaS.
            Every case study represents verified performance benchmarks and business outcomes.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl glass-card glass-card-red flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white font-sans">R25B+</div>
              <div className="text-xs text-slate-400">Transaction Volume Processed</div>
            </div>
          </div>

          <div className="p-5 rounded-xl glass-card glass-card-red flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white font-sans">99.998%</div>
              <div className="text-xs text-slate-400">Observed Production Uptime</div>
            </div>
          </div>

          <div className="p-5 rounded-xl glass-card glass-card-red flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white font-sans">4.9 / 5.0</div>
              <div className="text-xs text-slate-400">Average App Store Rating</div>
            </div>
          </div>
        </div>

        {/* Full Gallery */}
        <CaseStudiesGallery onNavigate={onNavigate} onOpenProposal={onOpenProposal} />
      </div>
    </div>
  );
};
