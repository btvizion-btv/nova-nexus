import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { BrandMarquee } from '../components/BrandMarquee';
import { ServicesBento } from '../components/ServicesBento';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { SkillsSection } from '../components/SkillsSection';
import { CaseStudiesGallery } from '../components/CaseStudiesGallery';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { HostingCalculator } from '../components/HostingCalculator';
import { FAQS } from '../data/content';
import { PageRoute } from '../types';
import { ChevronDown, ArrowRight, ShieldCheck, Zap, Layers, Cpu, Sparkles, MessageSquare } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProposal,
  onSelectServiceForQuote,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenProposal={onOpenProposal}
      />

      {/* Infinite Partner Marquee (Elementor Pro style ticker) */}
      <BrandMarquee />

      {/* 5 Core Services Bento */}
      <ServicesBento
        onNavigate={onNavigate}
        onSelectServiceForQuote={onSelectServiceForQuote}
      />

      {/* 4-Step Interactive Agile Sprint Roadmap */}
      <ProcessTimeline
        onNavigate={onNavigate}
        onOpenProposal={onOpenProposal}
      />

      {/* Elementor Pro Technical Competencies & Skill Progress Meters */}
      <SkillsSection
        onNavigate={onNavigate}
        onOpenProposal={onOpenProposal}
      />

      {/* Delivery Philosophy / Why Nova Nexus Squads */}
      <section className="py-24 section-bg-red relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-sans font-semibold uppercase tracking-wider text-red-500">
              The Nova Nexus Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Why High-Growth Companies Choose Our Squads
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We replace sluggish agency bureaucracy with senior staff-level engineers who ship clean, tested code
              directly into your production environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl glass-card glass-card-red">
              <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">High-Velocity Sprints</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bi-weekly production releases, live preview branch environments for every PR, and continuous stakeholder review.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card glass-card-red">
              <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Agentic AI First</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We embed autonomous multi-agent pipelines and vector retrieval directly into core operations to automate complex manual labor.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card glass-card-red">
              <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Unified Cross-Platform</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Single TypeScript codebase powering web, iOS, and Android platforms simultaneously with shared state and native speeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card glass-card-red">
              <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Enterprise SLA & Uptime</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                99.99% guaranteed multi-region uptime, automated disaster recovery failovers, and 24/7 dedicated DevOps on-call engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <CaseStudiesGallery
        onNavigate={onNavigate}
        onOpenProposal={onOpenProposal}
        limit={2}
      />

      {/* Cloud & Hosting Section Preview */}
      <HostingCalculator onNavigate={onNavigate} onOpenProposal={onOpenProposal} />

      {/* Testimonials Proof Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="py-24 section-bg-dark relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <div className="text-xs font-sans font-semibold uppercase tracking-wider text-red-500">
              Clear Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about partnering with Nova Nexus.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-red rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-red-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 mb-3">Have a unique technical challenge or custom RFP?</p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 underline cursor-pointer"
            >
              <span>Speak directly with our Principal Solutions Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Elementor Pro Signature Call To Action Banner */}
      <section className="py-20 section-bg-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>COMMENCE SPRINT 01 WITHIN 72 HOURS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Build Next-Gen Software That Scales Effortlessly?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential discovery session with our lead system architects. We’ll analyze your codebase, map infrastructure requirements, and deliver a zero-obligation technical proposal in 48 hours.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenProposal}
              className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-xl shadow-red-600/40 hover:shadow-red-600/60 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Request Free Architecture Proposal</span>
            </button>

            <button
              onClick={() => onNavigate('estimator')}
              className="px-7 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-black/60 hover:bg-black/80 border border-white/15 hover:border-red-500/50 rounded-xl transition-all cursor-pointer backdrop-blur-md flex items-center gap-2"
            >
              <span>Calculate Project Budget</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
