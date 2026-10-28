/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { CyberBackground } from './components/CyberBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Terminal } from './components/Terminal.tsx';
import { EducationTimeline } from './components/EducationTimeline.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [rainEnabled, setRainEnabled] = useState(true);

  const scrollToTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050807] text-[#F5F7F6] relative selection:bg-[#00FF88] selection:text-[#050807]">
      {/* Background Atmosphere: Matrix Rain, Radial Green Orbs, Tech Grid, Scanlines */}
      <CyberBackground rainEnabled={rainEnabled} />

      {/* Floating Glass Navigation Bar */}
      <Navbar
        onOpenTerminal={scrollToTerminal}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 space-y-8 sm:space-y-16">
        {/* Hero Section — System Initialization */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={scrollToTerminal}
        />

        {/* About Me — Glass Information Cards (01 / ABOUT_ME) */}
        <About />

        {/* Technical Skills — Holographic Glass UI (02 / TECH_STACK) */}
        <Skills />

        {/* Projects — Glass Project Gallery (03 / FEATURED_PROJECTS) */}
        <Projects />

        {/* Interactive Hacker Terminal */}
        <Terminal />

        {/* Education and Achievements (04 / SYSTEM_LOGS) */}
        <EducationTimeline />

        {/* Contact — Establish Connection (05 / ESTABLISH_CONNECTION) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Terminal Launcher Pill (bottom-right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={scrollToTerminal}
          type="button"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#050807]/90 hover:bg-[#00FF88]/15 border border-white/20 hover:border-[#00FF88]/50 backdrop-blur-xl text-xs font-mono text-white hover:text-[#00FF88] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all hover:scale-105"
          title="Jump to Interactive Terminal"
        >
          <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse shadow-[0_0_6px_#00FF88]" />
          <TerminalIcon className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>&gt;_ SHELL</span>
        </button>
      </div>

      {/* Technical Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
