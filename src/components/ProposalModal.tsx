import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Send, CheckCircle2, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedServiceId || 'web-design-dev');
  const [budget, setBudget] = useState('R50k - R150k');
  const [details, setDetails] = useState('');
  const [preferredDate, setPreferredDate] = useState('Next Available (Today/Tomorrow)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          colors: ['#ef4444', '#dc2626', '#f87171', '#ffffff'],
          origin: { y: 0.5 },
        });
      } catch {
        // ignore
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0c0c11] border border-red-500/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl shadow-red-950/70 max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-red-950/70 border border-red-500/40 flex items-center justify-center mx-auto text-red-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">Discovery Call Requested!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{name}</span>. We have assigned a Lead Solutions
              Architect in Sandton to your inquiry. A calendar invitation and preliminary architecture review have been dispatched
              to <span className="text-red-400 font-sans font-medium">{email}</span>.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 max-w-md mx-auto">
              Selected Service: <span className="text-white font-medium">{SERVICES.find(s => s.id === service)?.title}</span> · Target Window: <span className="text-red-400">{preferredDate}</span>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-all shadow-md shadow-red-600/30 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-[11px] font-sans">
                <Sparkles className="w-3 h-3 text-red-400" />
                <span>Nova Nexus Sandton Studio</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Schedule Technical Discovery</h3>
              <p className="text-xs text-slate-400">
                Direct consultation with our senior systems engineers in Sandton, Johannesburg. No sales fluff.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Thabo Mokoena"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="thabo@company.co.za"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Sandton Digital Holdings"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Primary Discipline</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#14141a] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Target Investment Range (ZAR)</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#14141a] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Under R50k">Under R50k (Lean POC)</option>
                  <option value="R50k - R150k">R50k - R150k (Production MVP)</option>
                  <option value="R150k - R350k">R150k - R350k (Scale Platform)</option>
                  <option value="R350k+">R350k+ (Enterprise Multi-Region)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Call Window</label>
                <select
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-[#14141a] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Next Available (Today/Tomorrow)">Next Available (Today / Tomorrow)</option>
                  <option value="This Week (Morning SAST)">This Week (Morning SAST)</option>
                  <option value="This Week (Afternoon SAST)">This Week (Afternoon SAST)</option>
                  <option value="Flexible Schedule">Flexible Schedule</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Project Brief / Technical Context</label>
              <textarea
                rows={3}
                placeholder="Describe your architecture goals, current stack, or bottlenecks..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                <span>Encrypted & NDA Protected</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-rose-400" />
                <span>30-Min Technical Review</span>
              </span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Dispatching Brief to the Team...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm & Book Technical Discovery</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
