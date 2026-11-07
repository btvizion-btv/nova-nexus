import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem, PageRoute } from '../types';
import {
  Server,
  Layout,
  Smartphone,
  Cpu,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
} from 'lucide-react';

interface ServicesBentoProps {
  onNavigate: (page: PageRoute) => void;
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({
  onNavigate,
  onSelectServiceForQuote,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Server':
        return <Server className="w-5 h-5 text-red-500" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-red-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-rose-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-red-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-rose-400" />;
      default:
        return <Code2 className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="services-overview" className="py-24 section-bg-red relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-rose-950/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-sans font-semibold uppercase tracking-wider text-red-500">
              01. Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              High-Velocity Delivery Across Five Disciplines
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We eliminate silos by integrating cloud DevOps, bespoke web platforms, native mobile apps,
              autonomous agentic AI, and programmatic search marketing into one unified team.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 py-2 border-b border-red-500/30 hover:border-red-400 transition-colors shrink-0"
          >
            <span>View Detailed Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            // Only the first card spans two columns; every other card is equal width,
            // so Cross-Platform, AI Systems, and Digital Marketing sit three-across on desktop.
            const isLarge = index === 0;
            return (
              <div
                key={service.id}
                className={`tech-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden ${
                  isLarge ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Red gradient line on top hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#14141a] border border-white/10 flex items-center justify-center shadow-inner">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-sans font-medium text-red-400 bg-red-950/40 border border-red-500/20 px-2.5 py-1 rounded-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs text-slate-400 font-medium tracking-wide mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Capability image */}
                  {service.image && (
                    <div className="mb-6 h-32 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, isLarge ? 4 : 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Actions & Tech badges */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {service.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-sans text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-200 hover:text-red-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0c0c11] border border-red-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl shadow-red-950/70 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-sans text-red-400">{selectedService.category}</span>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Key Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Project Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((deliv, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-2 bg-white/5 border border-white/5 rounded-lg p-2.5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Engineered With:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-sans text-red-300 bg-red-950/40 border border-red-500/30 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  if (onSelectServiceForQuote) {
                    onSelectServiceForQuote(sId);
                  } else {
                    onNavigate('estimator');
                  }
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-lg shadow-md shadow-red-600/30 hover:from-red-500 hover:to-rose-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Calculate Scope & Price</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
