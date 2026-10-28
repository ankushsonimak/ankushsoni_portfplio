import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#050807]/90 backdrop-blur-2xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-3 px-5'
            : 'bg-white/[0.04] backdrop-blur-xl border-white/10 shadow-[0_8px_24px_0_rgba(0,0,0,0.3)] py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Logo & Brand wordmark */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 font-mono text-sm tracking-wider font-semibold text-white whitespace-nowrap"
              title="Visit Ankush Soni GitHub"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF88] inline-block shadow-[0_0_8px_#00FF88]" />
              <span className="group-hover:text-[#00FF88] transition-colors">
                ANKUSH<span className="text-[#00FF88]">.SYS</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00FF88] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-[#A5B5AD]">
              <ShieldCheck className="w-3 h-3 text-[#00FF88]" />
              <span>TLS 1.3</span>
            </div>
          </div>

          {/* Zone 2: Navigation Links (single line, unboxed, subtle hover states) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-[#00FF88] font-semibold'
                      : 'text-[#A5B5AD] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00FF88] rounded-full shadow-[0_0_6px_#00FF88]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action / Quick Interactive Affordances */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenTerminal}
              type="button"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-white bg-white/[0.05] hover:bg-[#00FF88]/15 border border-white/15 hover:border-[#00FF88]/40 rounded-xl transition-all shadow-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] whitespace-nowrap"
              title="Launch interactive hacker terminal"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-[#00FF88]" />
              <span className="hidden sm:inline">Terminal</span>
              <span className="text-[10px] text-[#A5B5AD] bg-black/40 px-1.5 py-0.5 rounded border border-white/10 font-mono">
                &gt;_
              </span>
            </button>

            <button
              onClick={onOpenResume}
              type="button"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#050807] bg-[#00FF88] hover:bg-[#39FF14] rounded-xl transition-all font-semibold shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] whitespace-nowrap"
            >
              Resume
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 mt-3 border-t border-white/10 animate-fadeIn">
            <nav className="flex flex-col gap-2 font-mono text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-[#A5B5AD] hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#00FF88]">/&gt;</span>
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 text-xs text-center font-semibold text-[#050807] bg-[#00FF88] rounded-xl"
                >
                  View Technical Resume
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
