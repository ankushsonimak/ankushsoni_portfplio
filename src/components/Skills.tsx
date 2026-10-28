import React, { useState } from 'react';
import {
  Code,
  Cpu,
  Coffee,
  FileCode,
  Layout,
  Atom,
  Palette,
  ShieldCheck,
  Binary,
  Table,
  BarChart3,
  GitGraph,
  GitBranch,
  Github,
  FileTerminal,
  TerminalSquare,
  Brain,
  Network,
  Boxes,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_CONFIG, SkillCategory } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    description: string;
    category: string;
  } | null>({
    name: "Python",
    description: "NumPy, SciPy, AI modeling, automation scripts",
    category: "Programming"
  });

  const iconRegistry: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Coffee: <Coffee className="w-5 h-5" />,
    FileCode: <FileCode className="w-5 h-5" />,
    Layout: <Layout className="w-5 h-5" />,
    Atom: <Atom className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Binary: <Binary className="w-5 h-5" />,
    Table: <Table className="w-5 h-5" />,
    BarChart3: <BarChart3 className="w-5 h-5" />,
    GitGraph: <GitGraph className="w-5 h-5" />,
    GitBranch: <GitBranch className="w-5 h-5" />,
    Github: <Github className="w-5 h-5" />,
    FileTerminal: <FileTerminal className="w-5 h-5" />,
    TerminalSquare: <TerminalSquare className="w-5 h-5" />,
    Brain: <Brain className="w-5 h-5" />,
    Network: <Network className="w-5 h-5" />,
    Boxes: <Boxes className="w-5 h-5" />,
  };

  const categories = ['All', ...PORTFOLIO_CONFIG.skillCategories.map(c => c.name)];

  const displayedCategories: SkillCategory[] =
    activeCategory === 'All'
      ? PORTFOLIO_CONFIG.skillCategories
      : PORTFOLIO_CONFIG.skillCategories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-[#00FF88] tracking-widest bg-[#00FF88]/10 px-2.5 py-1 rounded border border-[#00FF88]/20">
          02 / TECH_STACK
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Holographic Skill Matrix
          </h2>
          <p className="text-sm text-[#A5B5AD] max-w-xl">
            Modern tools, languages, and frameworks used to architect intelligent software, compute data heuristics, and engineer web apps.
          </p>
        </div>

        {/* Category Tabs / Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#00FF88] text-[#050807] shadow-[0_0_12px_rgba(0,255,136,0.4)] font-semibold'
                  : 'text-[#A5B5AD] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Holographic Grid */}
      <div className="space-y-10">
        {displayedCategories.map((cat) => (
          <div key={cat.name} className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00FF88] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] shadow-[0_0_6px_#00FF88]" />
              <span>{cat.name}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.skills.map((skill) => {
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() =>
                      setSelectedSkill({
                        name: skill.name,
                        description: skill.description,
                        category: cat.name
                      })
                    }
                    className={`text-left p-4 rounded-2xl glass-panel glass-panel-hover border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-[#00FF88]/60 bg-emerald-950/20 shadow-[0_0_20px_rgba(0,255,136,0.18)]'
                        : 'border-white/10 hover:border-[#00FF88]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl border transition-colors ${
                        isSelected
                          ? 'bg-[#00FF88]/20 border-[#00FF88]/50 text-[#00FF88]'
                          : 'bg-white/[0.04] border-white/10 text-[#00FF88] group-hover:bg-[#00FF88]/10'
                      }`}>
                        {iconRegistry[skill.icon] || <Sparkles className="w-5 h-5 text-[#00FF88]" />}
                      </div>
                      <span className="font-mono text-[10px] text-[#A5B5AD]/60 uppercase">
                        {cat.name.split(' ')[0]}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-[#A5B5AD] leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Skill Telemetry Banner */}
      {selectedSkill && (
        <div className="mt-8 p-4 sm:p-5 rounded-2xl glass-panel border-[#00FF88]/25 bg-emerald-950/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#00FF88]/15 text-[#00FF88] border border-[#00FF88]/30">
              &gt;_
            </span>
            <div>
              <p className="text-white font-semibold">
                ACTIVE FOCUS: <span className="text-[#00FF88]">{selectedSkill.name}</span>
                <span className="text-[#A5B5AD] ml-2 font-normal">[{selectedSkill.category}]</span>
              </p>
              <p className="text-[#A5B5AD] text-[11px] mt-0.5">
                {selectedSkill.description}
              </p>
            </div>
          </div>
          <div className="text-[11px] text-[#00FF88] bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap">
            ● READY FOR PRODUCTION
          </div>
        </div>
      )}
    </section>
  );
};
