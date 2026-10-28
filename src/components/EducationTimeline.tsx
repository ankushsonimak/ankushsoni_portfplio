import React, { useState } from 'react';
import {
  GraduationCap,
  Trophy,
  Award,
  FolderGit2,
  Briefcase,
  Calendar,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_CONFIG, TimelineItem } from '../data/portfolioData.ts';

export const EducationTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Education', 'Hackathon', 'Certification', 'Internship'];

  const filteredLogs: TimelineItem[] =
    activeFilter === 'All'
      ? PORTFOLIO_CONFIG.timeline
      : PORTFOLIO_CONFIG.timeline.filter((item) => item.type === activeFilter);

  const iconMap: Record<TimelineItem['type'], React.ReactNode> = {
    Education: <GraduationCap className="w-4 h-4 text-[#00FF88]" />,
    Hackathon: <Trophy className="w-4 h-4 text-[#39FF14]" />,
    Certification: <Award className="w-4 h-4 text-[#00FF88]" />,
    Project: <FolderGit2 className="w-4 h-4 text-[#00FF88]" />,
    Internship: <Briefcase className="w-4 h-4 text-[#39FF14]" />
  };

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-[#00FF88] tracking-widest bg-[#00FF88]/10 px-2.5 py-1 rounded border border-[#00FF88]/20">
          04 / SYSTEM_LOGS
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Education &amp; Experience Logs
          </h2>
          <p className="text-sm text-[#A5B5AD] max-w-xl">
            A chronological timeline tracing academic milestones, competitive hackathon recognitions, and engineering certifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 overflow-x-auto max-w-full">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              type="button"
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg whitespace-nowrap transition-all ${
                activeFilter === opt
                  ? 'bg-[#00FF88] text-[#050807] shadow-[0_0_12px_rgba(0,255,136,0.4)] font-semibold'
                  : 'text-[#A5B5AD] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative pl-6 sm:pl-8 border-l border-[#00FF88]/25 ml-3 sm:ml-6 space-y-10">
        {filteredLogs.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Glowing Connection Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#050807] border-2 border-[#00FF88] flex items-center justify-center shadow-[0_0_10px_#00FF88] group-hover:scale-125 transition-transform duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-ping" />
            </div>

            {/* Timeline Card */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border-white/10 group-hover:border-[#00FF88]/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                    {iconMap[item.type]}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#00FF88] uppercase tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00FF88] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#A5B5AD] self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Organization & Honors */}
              <div className="flex items-center gap-2 font-mono text-xs text-[#A5B5AD] mb-3">
                <span className="text-white font-medium">{item.organization}</span>
                {item.badge && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#39FF14] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {item.badge}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#A5B5AD] leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tags rendered as clean unboxed text with separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A5B5AD]/80">
                <span className="text-white/40">MODULES:</span>
                {item.tags.map((tag, tIdx) => (
                  <span key={tag} className="flex items-center gap-2">
                    <span className="text-white/80">{tag}</span>
                    {tIdx < item.tags.length - 1 && <span className="text-white/20">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
