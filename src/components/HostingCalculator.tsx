import React, { useState } from 'react';
import { HOSTING_PLANS } from '../data/content';
import { PageRoute } from '../types';
import { Server, ShieldCheck, Zap, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';

interface HostingCalculatorProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const HostingCalculator: React.FC<HostingCalculatorProps> = ({
  onNavigate,
  onOpenProposal,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(250000);
  const [storageGB, setStorageGB] = useState<number>(100);

  const getRecommendedPlan = () => {
    if (monthlyTraffic > 1000000 || storageGB > 500) {
      return HOSTING_PLANS[2];
    } else if (monthlyTraffic > 200000 || storageGB > 150) {
      return HOSTING_PLANS[1];
    }
    return HOSTING_PLANS[0];
  };

  const currentRecommended = getRecommendedPlan();

  return (
    <section className="py-24 section-bg-dark relative overflow-hidden">
      {/* Background glow in red */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <Server className="w-3.5 h-3.5 text-red-400" />
            <span>High-Availability Cloud Hosting & DevOps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Enterprise Infrastructure Engineered for 99.99% Uptime
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Multi-region Kubernetes clusters, global Cloudflare Anycast edge routing, automated daily snapshots,
            and dedicated 24/7 DevOps support.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="p-1 bg-white/5 border border-white/10 rounded-xl inline-flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] font-sans px-1.5 py-0.2 rounded bg-black/40 text-red-100 font-bold">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {HOSTING_PLANS.map((plan) => {
            const isRec = plan.recommended;
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`tech-card rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isRec
                    ? 'border-red-500/50 bg-[#120a0e]/90 shadow-xl shadow-red-950/60 ring-1 ring-red-500/40'
                    : 'bg-[#0a0a0f]/80'
                }`}
              >
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular for Scale
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.tagline}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white font-sans">R{price.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 font-sans">/ month</span>
                    {billingCycle === 'annual' && (
                      <span className="text-[10px] font-sans text-red-400 ml-auto">Billed annually</span>
                    )}
                  </div>

                  {/* Hardware Specs */}
                  <div className="space-y-2.5 mb-6 text-xs font-sans">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Compute:</span>
                      <span className="text-slate-200 font-semibold">{plan.specs.vCPU}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">RAM:</span>
                      <span className="text-slate-200 font-semibold">{plan.specs.ram}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">NVMe Storage:</span>
                      <span className="text-slate-200 font-semibold">{plan.specs.storage}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Bandwidth:</span>
                      <span className="text-slate-200 font-semibold">{plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">SLA Guarantee:</span>
                      <span className="text-red-400 font-semibold">{plan.specs.sla}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Included Architecture:
                    </p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenProposal}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isRec
                      ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white shadow-md shadow-red-600/30'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                  }`}
                >
                  <span>Deploy {plan.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Infrastructure Sizing Calculator */}
        <div className="glass-card glass-card-red rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-500" />
                <h3 className="text-lg font-bold text-white">Dynamic Resource Sizing Estimator</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Adjust your anticipated monthly traffic and persistent storage requirements. Our engine computes
                concurrency limits, IOPS capacity, and recommends your ideal deployment tier.
              </p>

              {/* Slider 1: Traffic */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Estimated Monthly Visitors / Requests:</span>
                  <span className="text-red-400 font-sans font-bold">
                    {(monthlyTraffic / 1000).toFixed(0)}k req/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="5000000"
                  step="20000"
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                  className="w-full accent-red-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-sans">
                  <span>20k req/mo</span>
                  <span>1M req/mo</span>
                  <span>5M+ req/mo</span>
                </div>
              </div>

              {/* Slider 2: Storage */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">NVMe Persistent Storage Required:</span>
                  <span className="text-red-400 font-sans font-bold">{storageGB} GB</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="20"
                  value={storageGB}
                  onChange={(e) => setStorageGB(Number(e.target.value))}
                  className="w-full accent-red-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-sans">
                  <span>20 GB</span>
                  <span>500 GB</span>
                  <span>2 TB (2,000 GB)</span>
                </div>
              </div>
            </div>

            {/* Calculated Recommendation Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-red-950/50 via-rose-950/25 to-black/70 border border-red-500/30 rounded-xl p-6 text-center lg:text-left">
              <span className="text-[11px] font-sans uppercase tracking-wider text-red-400">
                Recommended Tier
              </span>
              <h4 className="text-2xl font-bold text-white mt-1">{currentRecommended.name}</h4>
              <div className="text-3xl font-extrabold text-red-400 font-sans my-2">
                R{(billingCycle === 'annual' ? currentRecommended.priceAnnual : currentRecommended.priceMonthly).toLocaleString()}
                <span className="text-xs text-slate-400 font-normal"> / month</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Sized for {currentRecommended.specs.vCPU}, {currentRecommended.specs.ram}, and guaranteed{' '}
                {currentRecommended.specs.sla}. Includes zero-downtime migration and full WAF policies.
              </p>
              <button
                onClick={onOpenProposal}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-lg hover:from-red-500 hover:to-rose-600 transition-all shadow-md shadow-red-600/30"
              >
                Lock In This Configuration
              </button>
            </div>
          </div>
        </div>

        {/* Global Edge Network Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <Globe2 className="w-5 h-5 text-red-500" />
            <h4 className="text-sm font-bold text-white">320+ Anycast Edge PoPs</h4>
            <p className="text-xs text-slate-400">
              Your users hit edge workers within 15ms globally. Static assets, caching, and serverless compute
              deployed close to users.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <ShieldCheck className="w-5 h-5 text-rose-500" />
            <h4 className="text-sm font-bold text-white">Automated Disaster Recovery</h4>
            <p className="text-xs text-slate-400">
              Cross-zone and cross-region warm standbys. Hourly encrypted database snapshots with instant point-in-time
              restoration.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <Zap className="w-5 h-5 text-red-400" />
            <h4 className="text-sm font-bold text-white">Zero-Downtime CI/CD</h4>
            <p className="text-xs text-slate-400">
              Automated canary and blue-green rollouts. Health probes automatically rollback any release with failing
              smoke tests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
