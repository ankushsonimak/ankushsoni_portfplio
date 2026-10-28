import React from 'react';
import { Cpu, Terminal, Sparkles, Rocket, Code2, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-[#00FF88]" />,
    Terminal: <Terminal className="w-5 h-5 text-[#39FF14]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#00FF88]" />,
    Rocket: <Rocket className="w-5 h-5 text-[#39FF14]" />
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-[#00FF88] tracking-widest bg-[#00FF88]/10 px-2.5 py-1 rounded border border-[#00FF88]/20">
          01 / ABOUT_ME
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Large Translucent Glass Panel with Profile */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border-white/12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              {/* Profile Image with subtle green border */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#00FF88]/40 shadow-[0_0_20px_rgba(0,255,136,0.2)] shrink-0">
                <img
                  src={PORTFOLIO_CONFIG.personal.avatarUrl}
                  alt={PORTFOLIO_CONFIG.personal.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#00FF88] border-2 border-[#050807] shadow-[0_0_8px_#00FF88]" />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                  {PORTFOLIO_CONFIG.personal.name}
                </h2>
                <p className="font-mono text-sm text-[#00FF88] font-medium mb-2">
                  Computer Science Undergrad &amp; Developer
                </p>
                <div className="flex items-center gap-2 text-xs text-[#A5B5AD] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>{PORTFOLIO_CONFIG.personal.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>UTC+5:30</span>
                </div>
              </div>
            </div>

            <p className="text-base text-[#F5F7F6]/90 leading-relaxed mb-6">
              {PORTFOLIO_CONFIG.personal.bioLong}
            </p>

            <p className="text-sm text-[#A5B5AD] leading-relaxed mb-8">
              My engineering approach centers around building resilient software with crisp design.
              Whether implementing 3D depth-estimation pipelines in Python, designing stateful full-stack
              interfaces, or orchestrating generative AI workflows, I treat software craft as both an analytical
              and creative discipline.
            </p>
          </div>

          {/* Interactive Code Snippet / Mindset Container */}
          <div className="glass-panel rounded-2xl p-4 border-white/10 bg-black/40 font-mono text-xs text-[#A5B5AD]">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px]">
              <span className="flex items-center gap-2 text-white">
                <Code2 className="w-3.5 h-3.5 text-[#00FF88]" />
                philosophy.ts
              </span>
              <span className="text-[#00FF88]">TypeScript</span>
            </div>
            <pre className="text-emerald-300/90 leading-relaxed overflow-x-auto">
              <code>{`const ankush = {
  curiosity: Infinity,
  coreStack: ['Python', 'C++', 'Data Science', 'React', 'AI/ML'],
  buildRule: (concept) => turningVisionIntoReality(concept),
  available: true
};`}</code>
            </pre>
          </div>
        </div>

        {/* Right Column: 4 Floating Glass Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {PORTFOLIO_CONFIG.aboutCards.map((card, idx) => (
            <div
              key={card.title}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border-white/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#00FF88]/40 group-hover:bg-[#00FF88]/10 transition-colors">
                  {iconMap[card.icon]}
                </div>
                <span className="font-mono text-[11px] text-[#A5B5AD]/60">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <p className="font-mono text-xs text-[#A5B5AD] tracking-wider mb-1 uppercase">
                  {card.title}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#00FF88] transition-colors mb-2">
                  {card.value}
                </h3>
                <p className="text-xs text-[#A5B5AD] leading-relaxed">
                  {card.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
