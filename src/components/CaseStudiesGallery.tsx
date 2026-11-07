import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy, PageRoute } from '../types';
import { ArrowUpRight, CheckCircle2, TrendingUp, Cpu, Smartphone, Cloud, ArrowRight } from 'lucide-react';

interface CaseStudiesGalleryProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
  limit?: number;
}

export const CaseStudiesGallery: React.FC<CaseStudiesGalleryProps> = ({
  onNavigate,
  onOpenProposal,
  limit,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web & Cloud', value: 'web-cloud' },
    { label: 'AI Systems', value: 'ai-agents' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'Marketing & SEO', value: 'marketing-seo' },
  ];

  const filteredStudies = CASE_STUDIES.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.serviceCategory === activeFilter;
  });

  const displayStudies = limit ? filteredStudies.slice(0, limit) : filteredStudies;

  return (
    <section className="py-24 section-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-sans font-semibold uppercase tracking-wider text-red-500">
              02. Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineered for Measured Business Impact
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We judge our work by real-world metrics: reduced latency, eliminated downtime, automated hours,
              and organic inbound revenue.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 shrink-0">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-semibold shadow-md shadow-red-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Media Preview Container */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-black">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c11] via-[#0c0c11]/40 to-transparent" />

                {/* Industry & Client tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="text-xs font-sans bg-[#08080c]/90 border border-red-500/30 text-red-300 px-2.5 py-1 rounded-md backdrop-blur-md">
                    {study.industry}
                  </span>
                </div>

                {/* Client Name */}
                <div className="absolute bottom-4 left-6 z-10">
                  <div className="text-xs text-slate-400 font-medium">{study.client}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {study.solution}
                </p>

                {/* Results Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="text-center sm:text-left">
                      <div className="text-lg sm:text-xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-400">
                        {res.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 font-medium">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                {study.testimonial && (
                  <div className="border-l border-red-500/40 pl-4 py-1 text-xs text-slate-400 italic">
                    "{study.testimonial.quote}"
                    <div className="text-[11px] text-slate-300 font-medium not-italic mt-1.5">
                      — {study.testimonial.author}, {study.testimonial.role}
                    </div>
                  </div>
                )}

                {/* Card Footer: Tech Stack & Inspect Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {study.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-sans text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalStudy(study)}
                    className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  >
                    <span>Read Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        {limit && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-[#0e0e14] border border-white/10 hover:border-red-500/40 rounded-xl transition-all"
            >
              <span>Explore All Client Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0c0c11] border border-red-500/30 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              ✕
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-sans text-red-400 uppercase tracking-wider">
                  {activeModalStudy.industry} · {activeModalStudy.client}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeModalStudy.title}
                </h3>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-rose-400 mb-2">
                    The Technical Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-red-400 mb-2">
                    The Nova Nexus Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalStudy.solution}
                  </p>
                </div>
              </div>

              {/* Verified Metrics */}
              <div>
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Verified Outcome Metrics:
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {activeModalStudy.results.map((res, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-red-950/30 border border-red-500/30 text-center">
                      <div className="text-xl sm:text-2xl font-sans font-bold text-red-400">{res.value}</div>
                      <div className="text-xs text-slate-400 mt-1">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  System Architecture Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalStudy.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-sans text-slate-300 bg-white/10 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Want similar architecture for your organization?
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalStudy(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveModalStudy(null);
                      onOpenProposal();
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-lg hover:from-red-500 hover:to-rose-600 transition-all shadow-md shadow-red-600/30 flex items-center gap-1.5"
                  >
                    <span>Request Discovery Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
