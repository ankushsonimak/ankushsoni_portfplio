import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Terminal as TerminalIcon,
  FileText,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Activity,
  Cpu,
  Wifi,
  Radio
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const roles = PORTFOLIO_CONFIG.personal.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for developer roles
  useEffect(() => {
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Terminal Prompt & Main Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Small translucent terminal card above heading */}
          <div className="w-full max-w-lg mb-6 glass-panel rounded-xl p-3.5 border-white/10 font-mono text-xs shadow-lg">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[#A5B5AD]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] text-white/70">identity.init</span>
              </div>
              <span className="text-[10px] text-[#00FF88] flex items-center gap-1">
                <Radio className="w-3 h-3 animate-pulse" />
                LIVE
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-white">
                <span className="text-[#00FF88]">root@ankush:~$</span> whoami
              </p>
              <p className="text-[#A5B5AD]">&gt; Initializing developer profile...</p>
              <p className="text-[#00FF88] font-semibold">&gt; Identity verified. Welcome.</p>
            </div>
          </div>

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/25 text-xs font-mono font-medium text-[#00FF88] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#00FF88] -ml-4" />
            <span>{PORTFOLIO_CONFIG.personal.status}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3" style={{ textWrap: 'balance' }}>
            ANKUSH <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00FF88] to-[#39FF14]">SONI</span>
          </h1>

          {/* Animated Subtitle / Roles */}
          <div className="h-10 flex items-center font-mono text-lg sm:text-2xl text-[#00FF88] font-semibold mb-5">
            <span className="text-white/70 mr-2">&gt;</span>
            <span>{currentText}</span>
            <span className="inline-block w-2.5 h-6 bg-[#00FF88] ml-1.5 animate-pulse shadow-[0_0_8px_#00FF88]" />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#A5B5AD] max-w-2xl leading-relaxed mb-8">
            {PORTFOLIO_CONFIG.personal.leadQuote}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#050807] bg-[#00FF88] hover:bg-[#39FF14] transition-all duration-200 shadow-[0_0_20px_rgba(0,255,136,0.35)] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white glass-panel glass-panel-hover"
            >
              <FileText className="w-4 h-4 text-[#00FF88]" />
              Download Resume
            </button>

            <button
              onClick={onOpenTerminal}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono text-[#A5B5AD] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-colors"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-[#00FF88]" />
              Launch Terminal
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#A5B5AD]">
            <span className="text-white/40">CONNECT //</span>
            <a
              href={PORTFOLIO_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-white hover:text-[#00FF88] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-white hover:text-[#00FF88] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-white hover:text-[#00FF88] transition-all"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_CONFIG.socials.email}`}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-white hover:text-[#00FF88] transition-all"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Holographic Glass Visual & Floating System Status */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Subtle Glowing Circular Radar Element */}
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            {/* Outer spinning dash ring */}
            <div
              className="absolute inset-0 rounded-full border border-dashed border-[#00FF88]/30 animate-spin"
              style={{ animationDuration: '35s' }}
            />
            {/* Middle counter-rotating ring */}
            <div
              className="absolute inset-6 rounded-full border border-emerald-500/20 animate-spin"
              style={{ animationDuration: '22s', animationDirection: 'reverse' }}
            />
            {/* Inner radar crosshair & glow */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-emerald-950/40 via-[#050807]/90 to-emerald-900/30 border border-[#00FF88]/30 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(0,255,136,0.15)]">
              {/* Radar sweep line */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden opacity-30 animate-spin"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 70%, rgba(0, 255, 136, 0.4) 100%)',
                  animationDuration: '5s'
                }}
              />

              {/* Central holographic icon & identity node */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/40 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                  <Cpu className="w-8 h-8 text-[#00FF88] animate-pulse" />
                </div>
                <span className="font-mono text-xs font-semibold tracking-wider text-white">ANKUSH-SYS</span>
                <span className="font-mono text-[10px] text-[#00FF88] tracking-widest mt-0.5">NEURAL_CORE // ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Floating System-Status Card */}
          <div className="mt-6 w-full max-w-sm glass-panel rounded-2xl p-4 border-white/12 shadow-xl hover:border-[#00FF88]/30 transition-all">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-xs font-mono">
              <span className="text-[#A5B5AD] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#00FF88]" />
                SYSTEM_TELEMETRY
              </span>
              <span className="text-[#00FF88] font-semibold flex items-center gap-1">
                <Wifi className="w-3 h-3" />
                ONLINE
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">
                <p className="text-[10px] text-[#A5B5AD]">KERNEL</p>
                <p className="text-white font-medium truncate">{PORTFOLIO_CONFIG.personal.systemStats.kernel}</p>
              </div>
              <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">
                <p className="text-[10px] text-[#A5B5AD]">LATENCY</p>
                <p className="text-[#00FF88] font-medium">{PORTFOLIO_CONFIG.personal.systemStats.latency}</p>
              </div>
              <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">
                <p className="text-[10px] text-[#A5B5AD]">UPTIME</p>
                <p className="text-white font-medium">{PORTFOLIO_CONFIG.personal.systemStats.uptime}</p>
              </div>
              <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">
                <p className="text-[10px] text-[#A5B5AD]">SECURITY</p>
                <p className="text-[#39FF14] font-medium truncate">AES-256-GCM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
