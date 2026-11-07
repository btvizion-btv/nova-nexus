import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { SERVICES } from '../data/content';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('web-cloud-hosting');
  const [budget, setBudget] = useState('R50k - R150k');
  const [message, setMessage] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow 10:00 AM SAST');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableSlots = [
    'Tomorrow 10:00 AM SAST',
    'Tomorrow 2:30 PM SAST',
    'Thursday 11:00 AM SAST',
    'Friday 3:00 PM SAST',
    'Flexible / Send Calendly Link',
  ];

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
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 section-bg-red min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <Mail className="w-3.5 h-3.5 text-red-400" />
            <span>Sandton, Johannesburg · Senior Systems Consultancy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Book a Technical Discovery Session
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Discuss your architecture, cloud hosting migration, mobile application, or autonomous AI agent roadmap with our Lead Solutions Architect based in Sandton, Johannesburg.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office Hubs & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl glass-card glass-card-red space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Technical Desks</h3>
                <p className="text-xs text-slate-400">
                  Reach out directly to our Sandton team or schedule an encrypted technical review.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Mail className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">General Inquiries & RFPs</div>
                    <div className="text-red-400 font-sans mt-0.5">solutions@novanexus.co.za</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Phone className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Technical Line</div>
                    <div className="text-red-400 font-sans mt-0.5">
                      <a href="tel:+27735945252" className="hover:text-red-300 transition-colors">Shivaan: +27 73 594 5252</a>
                      {' · '}
                      <a href="tel:+27746732263" className="hover:text-red-300 transition-colors">Novi: +27 74 673 2263</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Clock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">SLA Response Window</div>
                    <div className="text-slate-300 mt-0.5">Guaranteed response within 4 hours (24/7 on-call)</div>
                  </div>
                </div>
              </div>

              {/* Physical Headquarters in Sandton, Johannesburg */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-red-400" />
                  <span>Headquarters & African Hub:</span>
                </h4>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Sandton Central, Johannesburg:</span>
                      <p className="text-slate-400 mt-0.5">
                        Nova Nexus Tower, 150 Rivonia Road, Sandton Central, Johannesburg, 2196, Gauteng, South Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] px-1">
                    <span>• Secondary Data Node: Teraco JB1 (Isando, Johannesburg)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] px-1">
                    <span>• Coastal Edge Node: Teraco CT1 (Rondebosch, Cape Town)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/40 to-rose-950/20 border border-red-500/20 space-y-2">
              <div className="flex items-center gap-2 text-red-300 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>POPIA & Enterprise NDA Compliant</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We strictly adhere to South Africa's Protection of Personal Information Act (POPIA) and execute mutual non-disclosure agreements prior to reviewing proprietary source code, internal schemas, or business algorithms.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 glass-card glass-card-red rounded-2xl p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-red-950/70 border border-red-500/40 flex items-center justify-center mx-auto text-red-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Discovery Call Confirmed!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{name}</span>. We have scheduled your consultation
                  for <span className="text-red-400 font-sans font-medium">{selectedSlot}</span>. A calendar invitation with Google Meet
                  video conferencing link has been sent to <span className="text-red-400 font-sans font-medium">{email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-all shadow-md shadow-red-600/30 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Project Brief & Call Request</h3>
                  <p className="text-xs text-slate-400">
                    Fill out the technical brief below to reserve your 30-minute discovery consultation with our Sandton team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sipho Ndlovu"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sipho@company.co.za"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Company Name (e.g. Rand Capital)"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+27 82 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Primary Service</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#14141a] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Target Budget Range (ZAR)</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-[#14141a] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="Under R50k">Under R50k (Lean Prototype)</option>
                      <option value="R50k - R150k">R50k - R150k (Production MVP)</option>
                      <option value="R150k - R350k">R150k - R350k (Scale Engine)</option>
                      <option value="R350k+">R350k+ (Enterprise Multi-Region)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Discovery Slot in SAST */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Select Preferred Discovery Time Slot (South African Standard Time):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                          selectedSlot === slot
                            ? 'bg-red-950/60 border-red-500 text-red-300 font-semibold'
                            : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Technical Context & Objectives</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your architecture, current roadblocks, performance bottlenecks, or launch deadlines..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Scheduling Consultation...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm & Book Technical Discovery ({selectedSlot})</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
