import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 section-bg-red relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-sans font-semibold uppercase tracking-wider text-red-500">
            03. Client Validation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Trusted by Venture-Backed Founders & Enterprise CTOs
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Read direct feedback from leadership teams who deployed our cloud infrastructure, cross-platform apps,
            and custom AI systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card glass-card-red rounded-2xl p-7 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-950/60 border border-red-500/20 flex items-center justify-center text-red-400">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-sans text-red-400 bg-red-950/40 border border-red-500/20 px-2.5 py-0.5 rounded">
                    {t.projectType}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                {/* Quantitative Impact Metric */}
                <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/5 text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-sans">
                    Verified Outcome
                  </span>
                  <span className="text-base font-sans font-bold text-red-400">{t.metric}</span>
                </div>
              </div>

              {/* Author attribution */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-red-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role}, <span className="text-slate-300 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
