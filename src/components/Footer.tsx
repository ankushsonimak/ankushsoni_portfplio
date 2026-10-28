import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050807]/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Status indicator & Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-[#00FF88] px-3 py-1.5 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            <span>SYSTEM STATUS: ONLINE</span>
          </div>

          <div className="text-xs font-mono text-[#A5B5AD]">
            Designed &amp; Built by <span className="text-white font-medium">Ankush Soni</span>
          </div>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-[#A5B5AD] hover:text-[#00FF88] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-[#A5B5AD] hover:text-[#00FF88] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-[#A5B5AD] hover:text-[#00FF88] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_CONFIG.socials.email}`}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-[#A5B5AD] hover:text-[#00FF88] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-[#A5B5AD] hover:text-[#00FF88] transition-all flex items-center gap-1.5 text-xs font-mono"
            aria-label="Back to top of page"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">TOP</span>
          </button>
        </div>
      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#A5B5AD]/60 gap-2">
        <span>© 2026 — All Rights Reserved</span>
        <span>Glassmorphic Next-Gen Developer Workstation</span>
      </div>
    </footer>
  );
};
