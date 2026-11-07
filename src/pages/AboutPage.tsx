import React from 'react';
import { TEAM_MEMBERS } from '../data/content';
import { PageRoute } from '../types';
import { Users, MapPin, Globe } from 'lucide-react';
import { BrandMarquee } from '../components/BrandMarquee';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="pt-32 pb-24 section-bg-red min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <Users className="w-3.5 h-3.5 text-red-400" />
            <span>The Team Behind Nova Nexus</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built Without Compromise
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Nova Nexus was founded by former cloud and AI infrastructure leads who believed modern companies deserve
            senior engineers who write clean, scalable code—not junior account managers and endless billable hours.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl glass-card glass-card-red space-y-3">
            <span className="text-xs font-sans text-red-400 font-bold">PRINCIPLE 01</span>
            <h3 className="text-lg font-bold text-white">Full IP Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every line of code, Dockerfile, Terraform configuration, and AI agent prompt belongs 100% to you from Day 1.
              Zero proprietary lock-in.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-card glass-card-red space-y-3">
            <span className="text-xs font-sans text-rose-400 font-bold">PRINCIPLE 02</span>
            <h3 className="text-lg font-bold text-white">Production Velocity</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We ship continuously in two-week sprints. You test features on staging branches before they hit production,
              backed by end-to-end automated tests.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-card glass-card-red space-y-3">
            <span className="text-xs font-sans text-red-500 font-bold">PRINCIPLE 03</span>
            <h3 className="text-lg font-bold text-white">Quantitative Outcomes</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We tie our success to measurable KPIs: 99.99% uptime, sub-20ms edge response, verified app store ratings,
              and organic customer pipeline growth.
            </p>
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="mb-20 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Principal Technical Leadership</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Directly leading the architecture, design, and code delivery of every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card glass-card-red flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-700/20 border border-red-500/30 flex items-center justify-center text-red-400 font-sans font-bold text-lg mb-4">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="text-base font-bold text-white">{member.name}</div>
                  <div className="text-xs text-red-400 font-medium mb-1">{member.role}</div>
                  <div className="text-[11px] font-sans text-slate-500 mb-3">{member.specialty}</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{member.bio}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] font-sans text-slate-500 flex justify-between">
                  <span>Experience:</span>
                  <span className="text-slate-300 font-bold">{member.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem & Certified Cloud Partners */}
        <div className="mb-20">
          <BrandMarquee />
        </div>

        {/* South African Headquarters & Global Edge Nodes */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card glass-card-red">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-red-400 text-xs font-sans font-semibold">
              <Globe className="w-4 h-4" />
              <span>HEADQUARTERS & CLOUD FOOTPRINT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Headquartered in Sandton, Johannesburg, South Africa</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Based in the heart of Africa's financial capital in Sandton, Johannesburg, Nova Nexus operates directly adjacent to premier African interconnection hubs (Teraco JB1 & CT1) while delivering ultra-low-latency web, mobile, and autonomous AI systems across South Africa, the African continent, and global markets.
            </p>
            <div className="pt-2 flex flex-wrap gap-6 text-xs text-slate-300 font-sans">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Sandton Central, Johannesburg (SAST, UTC+2)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Cape Town Coastal Node (CT1)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>320+ Anycast Global Edge PoPs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
