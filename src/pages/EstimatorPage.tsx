import React from 'react';
import { QuoteEstimator } from '../components/QuoteEstimator';
import { PageRoute } from '../types';
import { Calculator, CheckCircle2, ShieldCheck } from 'lucide-react';

interface EstimatorPageProps {
  initialServiceId?: string;
  onOpenProposal: () => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({
  initialServiceId,
  onOpenProposal,
}) => {
  return (
    <div className="pt-32 pb-24 section-bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Estimator Top Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <Calculator className="w-3.5 h-3.5 text-red-400" />
            <span>Transparent Project Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Project Scope & Cost Calculator
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Customize your architecture requirements across our five core disciplines. Our engine dynamically calculates
            realistic delivery sprints and fixed-price investment ranges.
          </p>
        </div>

        {/* The Calculator Component */}
        <QuoteEstimator
          initialServiceId={initialServiceId}
          onOpenProposal={onOpenProposal}
        />

        {/* Guarantees Strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl glass-card space-y-2">
            <CheckCircle2 className="w-5 h-5 text-red-500" />
            <h4 className="text-sm font-bold text-white">Guaranteed Fixed-Price Quotes</h4>
            <p className="text-xs text-slate-400">
              Once scope is locked in the Statement of Work, you will never receive unexpected billing overages.
            </p>
          </div>

          <div className="p-6 rounded-xl glass-card space-y-2">
            <ShieldCheck className="w-5 h-5 text-rose-500" />
            <h4 className="text-sm font-bold text-white">Mutual NDA Protection</h4>
            <p className="text-xs text-slate-400">
              All discussions, wireframes, and business ideas are protected under an immediate mutual NDA.
            </p>
          </div>

          <div className="p-6 rounded-xl glass-card space-y-2">
            <Calculator className="w-5 h-5 text-red-400" />
            <h4 className="text-sm font-bold text-white">24-Hour SOW Turnaround</h4>
            <p className="text-xs text-slate-400">
              Submit your scope and receive a formal technical blueprint and sprint timeline within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
