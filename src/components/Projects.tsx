import React, { useState } from 'react';
import { ExternalLink, Github, Play, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG, Project } from '../data/portfolioData.ts';
import { ProjectModal } from './ProjectModal.tsx';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'AI & ML', 'Computer Vision', 'Web Dev', 'Tools'];

  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO_CONFIG.projects
      : PORTFOLIO_CONFIG.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-[#00FF88] tracking-widest bg-[#00FF88]/10 px-2.5 py-1 rounded border border-[#00FF88]/20">
          03 / FEATURED_PROJECTS
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Selected Works &amp; Systems
          </h2>
          <p className="text-sm text-[#A5B5AD] max-w-xl">
            A curated portfolio of deep learning pipelines, generative AI applications, and dark glassmorphic interfaces built for real-world impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 overflow-x-auto max-w-full">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-[#00FF88] text-[#050807] shadow-[0_0_12px_rgba(0,255,136,0.4)] font-semibold'
                  : 'text-[#A5B5AD] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group glass-panel rounded-3xl border-white/12 hover:border-[#00FF88]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,255,136,0.12)]"
          >
            <div>
              {/* Thumbnail with overlay & quick trigger */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A1210] border-b border-white/10">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-[#050807]/30 to-transparent pointer-events-none" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 font-mono text-[11px] text-[#00FF88] bg-[#050807]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#00FF88]/30">
                  {project.category}
                </div>

                {/* Quick Interactive Demo Trigger overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-[#050807] bg-[#00FF88] rounded-xl shadow-[0_0_20px_rgba(0,255,136,0.6)] transform translate-y-2 group-hover:translate-y-0 transition-all"
                  >
                    <Play className="w-3.5 h-3.5" />
                    Launch Interactive Demo
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Tech tags rendered as clean unboxed text with bullet separators (anti-slop zero-pill) */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#A5B5AD] mb-3">
                  {project.technologies.map((t, idx) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span>{t}</span>
                      {idx < project.technologies.length - 1 && <span className="text-white/30">·</span>}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00FF88] transition-colors mb-2.5">
                  {project.title}
                </h3>

                <p className="text-sm text-[#A5B5AD] leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                {/* Performance or impact metric */}
                {project.metrics && (
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs text-[#00FF88] flex items-center gap-2 mb-2">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Card Actions Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(project)}
                type="button"
                className="text-xs font-mono font-medium text-white hover:text-[#00FF88] transition-colors flex items-center gap-1.5"
              >
                <span>System Specs &amp; Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00FF88]" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors"
                  aria-label={`Source code for ${project.title}`}
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="p-2 rounded-lg bg-[#00FF88]/10 hover:bg-[#00FF88]/20 border border-[#00FF88]/30 text-[#00FF88] transition-colors"
                  aria-label={`Interactive preview for ${project.title}`}
                  title="Launch Simulation"
                >
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail & Live Sandbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
