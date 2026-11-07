import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Calculator, ArrowRight, Sparkles, Send, ShieldAlert } from 'lucide-react';

interface QuoteEstimatorProps {
  initialServiceId?: string;
  onOpenProposal?: () => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ initialServiceId }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['web-design-dev']
  );
  const [projectScale, setProjectScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [platformTargets, setPlatformTargets] = useState<string[]>([
    'web',
    'cloud',
  ]);
  const [timeline, setTimeline] = useState<'express' | 'standard' | 'enterprise'>('standard');
  const [aiAddon, setAiAddon] = useState<boolean>(true);

  // Client info form
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Service list for selection (in South African Rands)
  const serviceOptions = [
    { id: 'web-cloud-hosting', label: 'Web & Cloud Hosting', baseCost: 35000 },
    { id: 'web-design-dev', label: 'Web Design & Dev', baseCost: 75000 },
    { id: 'cross-platform-apps', label: 'Cross-Platform & iOS/Android Apps', baseCost: 95000 },
    { id: 'ai-systems-agents', label: 'AI Systems & Custom Agents', baseCost: 85000 },
    { id: 'digital-marketing-seo', label: 'Digital Marketing & SEO', baseCost: 45000 },
  ];

  const handleToggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleTogglePlatform = (target: string) => {
    if (platformTargets.includes(target)) {
      if (platformTargets.length > 1) {
        setPlatformTargets(platformTargets.filter((p) => p !== target));
      }
    } else {
      setPlatformTargets([...platformTargets, target]);
    }
  };

  // Calculate pricing math in South African Rand (ZAR / R)
  const calculateEstimate = () => {
    let base = 0;
    selectedServices.forEach((sId) => {
      const match = serviceOptions.find((o) => o.id === sId);
      if (match) base += match.baseCost;
    });

    let scaleMultiplier = 1;
    if (projectScale === 'mvp') scaleMultiplier = 0.8;
    if (projectScale === 'growth') scaleMultiplier = 1.25;
    if (projectScale === 'enterprise') scaleMultiplier = 2.1;

    let platformAdd = platformTargets.length * 15000;
    let aiCost = aiAddon ? 40000 : 0;
    let timelineMultiplier = timeline === 'express' ? 1.2 : timeline === 'enterprise' ? 1.1 : 1.0;

    const subtotal = (base * scaleMultiplier + platformAdd + aiCost) * timelineMultiplier;
    const minEst = Math.round(subtotal * 0.9 / 5000) * 5000;
    const maxEst = Math.round(subtotal * 1.15 / 5000) * 5000;

    let weeks = '8–10 Weeks';
    if (timeline === 'express') weeks = '4–6 Weeks (Dedicated Sprint)';
    if (timeline === 'enterprise') weeks = '14–18 Weeks (Milestone Phases)';

    return { minEst, maxEst, weeks };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail || !clientName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 110,
          spread: 75,
          colors: ['#ef4444', '#dc2626', '#f87171', '#ffffff'],
          origin: { y: 0.6 },
        });
      } catch {
        // fallback
      }
    }, 600);
  };

  return (
    <section id="quote-calculator" className="py-24 section-bg-dark relative overflow-hidden">
      {/* Background glow in crimson */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <Calculator className="w-3.5 h-3.5 text-red-400" />
            <span>Interactive Project Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Configure Your Technical Scope & Estimate Investment
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Select your architecture parameters below. Our pricing engine generates transparent estimates based on
            our verified production deliverable sprints.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope Inputs */}
          <div className="lg:col-span-7 space-y-8 glass-card rounded-2xl p-6 sm:p-8">
            {/* Step 1: Services */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs font-sans font-bold flex items-center justify-center">
                    1
                  </span>
                  <span>Required Service Modules</span>
                </label>
                <span className="text-xs text-slate-400">Select all that apply</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((svc) => {
                  const isChecked = selectedServices.includes(svc.id);
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => handleToggleService(svc.id)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-red-950/40 border-red-500/50 text-white shadow-sm'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{svc.label}</span>
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                          isChecked
                            ? 'bg-red-600 border-red-500 text-white'
                            : 'border-white/20 bg-transparent'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Project Scale */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs font-sans font-bold flex items-center justify-center">
                  2
                </span>
                <span>System Scale & Complexity</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'mvp', title: 'Lean MVP', desc: 'Fast proof-of-concept ready for early users' },
                  { id: 'growth', title: 'Growth Engine', desc: 'Scalable production architecture with high throughput' },
                  { id: 'enterprise', title: 'Enterprise Core', desc: 'Fault-tolerant, multi-region with SOC2 compliance' },
                ].map((scale) => {
                  const active = projectScale === scale.id;
                  return (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setProjectScale(scale.id as any)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        active
                          ? 'bg-red-950/40 border-red-500 text-white shadow-sm'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="font-bold text-sm text-white">{scale.title}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{scale.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Platform Targets */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs font-sans font-bold flex items-center justify-center">
                  3
                </span>
                <span>Platform Deliverables</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'web', label: 'Web Platform' },
                  { id: 'ios', label: 'iOS App Store' },
                  { id: 'android', label: 'Android Play' },
                  { id: 'cloud', label: 'Cloud Infrastructure' },
                ].map((plat) => {
                  const isChecked = platformTargets.includes(plat.id);
                  return (
                    <button
                      key={plat.id}
                      type="button"
                      onClick={() => handleTogglePlatform(plat.id)}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-all ${
                        isChecked
                          ? 'bg-red-600 text-white font-bold border-red-500 shadow-sm'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {plat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: AI Agent Integration Switch */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-rose-950/20 to-transparent border border-red-500/30 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-bold text-white">Include Autonomous AI Agent Integration</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Custom fine-tuning, RAG vector retrieval, and multi-agent workflow automation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAiAddon(!aiAddon)}
                className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                  aiAddon ? 'bg-red-600' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                    aiAddon ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Step 5: Timeline */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs font-sans font-bold flex items-center justify-center">
                  4
                </span>
                <span>Target Delivery Speed</span>
              </label>
              <div className="grid grid-cols-3 gap-2.5 text-xs">
                {[
                  { id: 'express', label: 'Express Sprint (4–6 Wks)' },
                  { id: 'standard', label: 'Standard (8–10 Wks)' },
                  { id: 'enterprise', label: 'Enterprise Phased' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTimeline(item.id as any)}
                    className={`py-2 px-3 rounded-lg border text-center transition-all ${
                      timeline === item.id
                        ? 'bg-red-950/40 border-red-500 text-red-300 font-semibold'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate & Proposal Submission */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Pricing Breakdown Card */}
            <div className="bg-gradient-to-br from-[#120a0d] to-[#08080c] border border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="text-xs font-sans uppercase tracking-wider text-red-400 mb-2 font-semibold">
                Estimated Project Scope (ZAR)
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                R{estimate.minEst.toLocaleString()} – R{estimate.maxEst.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Estimated Sprint Horizon:{' '}
                <span className="text-red-400 font-semibold font-sans">{estimate.weeks}</span>
              </p>

              {/* Scope Breakdown */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Selected Services:</span>
                  <span className="font-semibold text-white font-sans">{selectedServices.length} Modules</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Target Platforms:</span>
                  <span className="font-semibold text-white font-sans">{platformTargets.length} Platforms</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>AI Agent System:</span>
                  <span className="font-semibold text-red-400 font-sans">{aiAddon ? 'Enabled' : 'None'}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Warranty & SLA:</span>
                  <span className="font-semibold text-red-400 font-sans">30-Day Guaranteed + 99.99%</span>
                </div>
              </div>

              {/* Submission Form */}
              <div className="mt-8 pt-6 border-t border-white/10">
                {submitted ? (
                  <div className="bg-red-950/40 border border-red-500/40 rounded-xl p-5 text-center space-y-2 animate-in fade-in">
                    <CheckCircle2 className="w-8 h-8 text-red-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Scope Brief Dispatched!</h4>
                    <p className="text-xs text-slate-300">
                      Our Lead Architect in Sandton will review your architecture specifications and reply with a formal
                      fixed-price statement of work within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-xs text-red-400 hover:text-red-300 underline cursor-pointer"
                    >
                      Modify this scope or submit another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <p className="text-xs font-semibold text-slate-200">
                      Receive an itemized Statement of Work & Architecture Blueprint:
                    </p>

                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="email"
                        required
                        placeholder="work@company.co.za"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                      />
                      <input
                        type="text"
                        placeholder="Company / Enterprise"
                        value={clientCompany}
                        onChange={(e) => setClientCompany(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <textarea
                      rows={2}
                      placeholder="Specific requirements or existing repo links (optional)..."
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Generating Architecture Blueprint...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Request Itemized Proposal (R{estimate.minEst.toLocaleString()} - R{estimate.maxEst.toLocaleString()})</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>
                All proposals are protected under a mutual Non-Disclosure Agreement (NDA). You retain 100% intellectual
                property rights to all code, architecture, and models generated.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
