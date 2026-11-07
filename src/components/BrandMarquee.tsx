import React from 'react';

export const BrandMarquee: React.FC = () => {
  const partners = [
    { name: 'AWS Partner Network', tag: 'Cloud Infrastructure' },
    { name: 'Google Cloud Platform', tag: 'Kubernetes & AI' },
    { name: 'Cloudflare Enterprise', tag: 'Anycast Edge CDN' },
    { name: 'Apple Developer', tag: 'iOS & macOS Ecosystem' },
    { name: 'Google Play Certified', tag: 'Android & Wearables' },
    { name: 'Docker Verified', tag: 'Microservices & Containers' },
    { name: 'Kubernetes Certified', tag: 'Orchestration Engine' },
    { name: 'Stripe Verified Partner', tag: 'Global Payments & Billing' },
  ];

  return (
    <div className="py-8 bg-[#040406] border-y border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-sans uppercase tracking-wider">
          <span>Enterprise Ecosystem & Partner Network</span>
          <span className="hidden sm:inline">Certified Cloud & AI Systems</span>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="flex w-full overflow-hidden select-none">
        <div className="flex shrink-0 items-center gap-8 sm:gap-14 animate-marquee py-2">
          {partners.concat(partners).map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-red-500/40 hover:bg-red-950/20 transition-all duration-200 group shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] font-sans text-slate-500 group-hover:text-red-400 transition-colors">
                  {partner.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
