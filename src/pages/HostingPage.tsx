import React from 'react';
import { HostingCalculator } from '../components/HostingCalculator';
import { PageRoute } from '../types';
import { Server, Shield, Activity, Cpu } from 'lucide-react';

interface HostingPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProposal: () => void;
}

export const HostingPage: React.FC<HostingPageProps> = ({
  onNavigate,
  onOpenProposal,
}) => {
  return (
    <div className="pt-32 pb-24 section-bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-sans">
            <Server className="w-3.5 h-3.5 text-red-400" />
            <span>Dedicated Cloud Infrastructure & Managed DevOps</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            High-Performance Web & Cloud Hosting
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Eliminate server downtime, sluggish page speeds, and scaling bottlenecks. We architect and manage
            distributed cloud clusters on AWS and Google Cloud with Cloudflare enterprise edge caching.
          </p>
        </div>

        {/* 4-Step Zero-Downtime Migration Process */}
        <div className="mb-20 glass-card rounded-3xl p-8 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            The Zero-Downtime Cloud Onboarding Roadmap
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-2xl">
            Moving your databases, microservices, and assets from fragile VPS hosting to fault-tolerant Kubernetes
            clusters without dropping a single active customer session.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-sans text-red-400 font-bold">01. AUDIT</span>
              <h4 className="text-sm font-bold text-white">Architecture Profiling</h4>
              <p className="text-xs text-slate-400">
                We analyze your peak traffic concurrency, SQL query bottlenecks, and network egress topology.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-sans text-red-400 font-bold">02. TERRAFORM</span>
              <h4 className="text-sm font-bold text-white">Infrastructure as Code</h4>
              <p className="text-xs text-slate-400">
                We script your entire VPC, subnets, Kubernetes clusters, and IAM permissions in reproducible code.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-sans text-red-400 font-bold">03. DATA REPLICATION</span>
              <h4 className="text-sm font-bold text-white">Real-Time Data Mirroring</h4>
              <p className="text-xs text-slate-400">
                Live replication synchronizes production databases with sub-second replication lag prior to switch.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs font-sans text-red-400 font-bold">04. CUTOVER & SLA</span>
              <h4 className="text-sm font-bold text-white">Anycast Edge Cutover</h4>
              <p className="text-xs text-slate-400">
                DNS cutover via Cloudflare Anycast edge with automated health checks and 24/7 on-call engineers.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing & Resource Calculator Component */}
        <HostingCalculator onNavigate={onNavigate} onOpenProposal={onOpenProposal} />

        {/* Technical Guarantees Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card space-y-3">
            <Shield className="w-6 h-6 text-red-500" />
            <h4 className="text-base font-bold text-white">DDoS Shield & Layer 7 WAF</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unmetered mitigation against multi-gigabit volumetric attacks, SQL injection attempts, and credential stuffing bots.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card space-y-3">
            <Activity className="w-6 h-6 text-rose-500" />
            <h4 className="text-base font-bold text-white">Live Distributed Telemetry</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Prometheus & Grafana dashboards tracking p95 response times, memory headroom, error rates, and live worker counts.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card space-y-3">
            <Cpu className="w-6 h-6 text-red-400" />
            <h4 className="text-base font-bold text-white">AI Agent Compute Clusters</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized GPU-optimized worker nodes and high-throughput vector index endpoints for real-time inference workloads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
