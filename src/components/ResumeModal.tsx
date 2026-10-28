import React from 'react';
import { X, Download, Printer, ExternalLink, Github, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const downloadMarkdownResume = () => {
    const markdownContent = `# ANKUSH SONI
**Developer | Data Science Enthusiast | AI/ML Explorer**
Email: ${PORTFOLIO_CONFIG.socials.email} | GitHub: ${PORTFOLIO_CONFIG.socials.github} | Location: ${PORTFOLIO_CONFIG.personal.location}

---

## PROFESSIONAL SUMMARY
${PORTFOLIO_CONFIG.personal.bioLong}

---

## EDUCATION
### B.Tech in Computer Science & Engineering (2023 - 2027)
- Key Coursework: Data Structures & Algorithms, Machine Learning, Operating Systems, Database Management Systems, Computer Networks
- Status: Active Undergrad

---

## CORE TECHNICAL SKILLS
- **Programming Languages**: Python, C++, Java, JavaScript, TypeScript
- **Machine Learning & Data Science**: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, OpenCV, Gemini API
- **Web Development**: React, Tailwind CSS, HTML5, CSS3, REST APIs
- **Tools & Environments**: Git, GitHub, Linux, Bash, VS Code, Vite

---

## FEATURED PROJECTS
### 1. AI Smart Travel Planner
- Engineered an autonomous itinerary generator synthesizing flight schedules, route optimization, and budget limits using Gemini API and React.
- Interactive route calculation with zero-lag responsive glass interface.

### 2. Depth Wizard — Height Estimation
- Developed a computer vision pipeline reconstructing 3D depth geometry and calculating physical height from monocular camera feeds.
- Implemented vertical reference triangulation with ±2.4% error margin.

### 3. Gen Z Expense Tracker
- Created a dark glassmorphic personal finance dashboard with automated subscription leak audits and cryptographic bill-splitting mechanisms.

---

## HONORS & ACHIEVEMENTS
- **1st Runner Up — National AI Hackathon (HackOverflow 2025)**: Prototyped real-time triage emergency system under 36-hour sprint.
- **DeepLearning.AI Machine Learning Specialization**: Certified in supervised, neural, and unsupervised anomaly detection pipelines.
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ankush_Soni_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn print:p-0 print:bg-white"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="w-full max-w-3xl max-h-[92vh] glass-panel rounded-3xl border-white/20 bg-[#0A1210]/95 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden print:max-h-none print:shadow-none print:border-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-white/[0.02] print:hidden">
          <div className="flex items-center gap-2 font-mono text-xs text-[#00FF88]">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] shadow-[0_0_6px_#00FF88]" />
            <span>RESUME_DOCUMENT_VIEWER // ANKUSH_SONI</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadMarkdownResume}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-white glass-panel glass-panel-hover rounded-xl"
            >
              <Download className="w-3.5 h-3.5 text-[#00FF88]" />
              <span className="hidden sm:inline">Download .MD</span>
            </button>
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-white glass-panel glass-panel-hover rounded-xl"
            >
              <Printer className="w-3.5 h-3.5 text-[#00FF88]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close resume viewer"
              className="p-1.5 text-[#A5B5AD] hover:text-white hover:bg-white/10 rounded-xl transition-colors border border-white/10 ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-left print:p-8">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 id="resume-title" className="text-3xl font-extrabold text-white tracking-tight mb-2 print:text-black">
              ANKUSH SONI
            </h1>
            <p className="font-mono text-sm text-[#00FF88] font-semibold mb-3 print:text-black">
              Developer | Data Science Enthusiast | AI/ML Explorer
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A5B5AD] print:text-black/80">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#00FF88] print:text-black" />
                {PORTFOLIO_CONFIG.socials.email}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-[#00FF88] print:text-black" />
                github.com/ankushsonimak
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00FF88] print:text-black" />
                {PORTFOLIO_CONFIG.personal.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00FF88] font-bold mb-3 print:text-black">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <span className="font-bold text-white print:text-black">B.Tech in Computer Science &amp; Engineering</span>
                <span className="font-mono text-xs text-[#A5B5AD] print:text-black/70">2023 - 2027</span>
              </div>
              <p className="text-xs text-[#A5B5AD] print:text-black/80">
                Focus on Data Structures, Algorithms, Machine Learning, and Computer Vision.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00FF88] font-bold mb-3 print:text-black">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent">
                <span className="font-mono text-[#00FF88] font-semibold print:text-black">Languages: </span>
                <span className="text-[#A5B5AD] print:text-black/80">Python, C++, Java, JavaScript, TypeScript, SQL</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent">
                <span className="font-mono text-[#00FF88] font-semibold print:text-black">AI &amp; Data Science: </span>
                <span className="text-[#A5B5AD] print:text-black/80">NumPy, Pandas, Scikit-learn, OpenCV, TensorFlow, Gemini API</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent">
                <span className="font-mono text-[#00FF88] font-semibold print:text-black">Frontend: </span>
                <span className="text-[#A5B5AD] print:text-black/80">React, Tailwind CSS, HTML5, CSS3, Modern ES6+</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-black/10 print:bg-transparent">
                <span className="font-mono text-[#00FF88] font-semibold print:text-black">Tools &amp; OS: </span>
                <span className="text-[#A5B5AD] print:text-black/80">Git, GitHub, Linux, Bash, VS Code, Vite</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00FF88] font-bold mb-3 print:text-black">
              Key Projects
            </h2>
            <div className="space-y-4 text-xs">
              {PORTFOLIO_CONFIG.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-white print:text-black">{proj.title}</span>
                    <span className="font-mono text-[11px] text-[#00FF88] print:text-black">{proj.category}</span>
                  </div>
                  <p className="text-[#A5B5AD] print:text-black/80">{proj.shortDesc}</p>
                  <p className="font-mono text-[11px] text-white/50 print:text-black/60">
                    Stack: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00FF88] font-bold mb-3 print:text-black">
              Achievements &amp; Certifications
            </h2>
            <ul className="space-y-2 text-xs text-[#A5B5AD] list-disc list-inside print:text-black/80">
              <li>
                <strong className="text-white print:text-black">1st Runner Up (Top 3) — HackOverflow 2025:</strong> Engineered automated emergency response triage system with computer vision and LLM routing under a 36-hour sprint.
              </li>
              <li>
                <strong className="text-white print:text-black">Machine Learning Specialization (DeepLearning.AI):</strong> Certified in neural networks, decision trees, anomaly detection, and regularization.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
