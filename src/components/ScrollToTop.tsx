import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#0a0a0f]/90 hover:bg-[#12080a] border border-red-500/40 hover:border-red-500 text-white shadow-xl shadow-black/80 backdrop-blur-md transition-all duration-300 hover:scale-110 group cursor-pointer"
      aria-label="Scroll back to top"
      title={`Back to top (${scrollProgress}%)`}
    >
      <div className="relative flex items-center justify-center">
        <ArrowUp className="w-4 h-4 text-slate-300 group-hover:text-red-400 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </button>
  );
};
