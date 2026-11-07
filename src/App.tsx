import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { HostingPage } from './pages/HostingPage';
import { AboutPage } from './pages/AboutPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ContactPage } from './pages/ContactPage';
import { AiChatbot } from './components/AiChatbot';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('web-design-dev');

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'services',
        'case-studies',
        'hosting',
        'about',
        'estimator',
        'contact',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForEstimator = (serviceId: string) => {
    setPreselectedService(serviceId);
    handleNavigate('estimator');
  };

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 flex flex-col font-sans selection:bg-red-600/30 selection:text-red-200">
      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenProposal={() => setIsProposalOpen(true)}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
            onSelectServiceForQuote={handleSelectServiceForEstimator}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
            onSelectServiceForQuote={handleSelectServiceForEstimator}
          />
        )}

        {currentPage === 'case-studies' && (
          <CaseStudiesPage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        )}

        {currentPage === 'hosting' && (
          <HostingPage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        )}

        {currentPage === 'estimator' && (
          <EstimatorPage
            initialServiceId={preselectedService}
            onOpenProposal={() => setIsProposalOpen(true)}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>



      {/* Floating Back To Top Button */}
      <ScrollToTop />

      {/* AI Chatbot: "N" icon on min & whole Nova logo on expand */}
      <AiChatbot
        onNavigate={handleNavigate}
        onOpenProposal={() => setIsProposalOpen(true)}
      />

      {/* Global Proposal Modal */}
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
        preselectedServiceId={preselectedService}
      />

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProposal={() => setIsProposalOpen(true)}
      />
    </div>
  );
}
