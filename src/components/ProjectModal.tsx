import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Play, Sparkles, Sliders, RefreshCw } from 'lucide-react';
import { Project } from '../data/portfolioData.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('simulation');

  // Travel demo states
  const [travelCity, setTravelCity] = useState('Tokyo');
  const [travelDays, setTravelDays] = useState(3);
  const [travelBudget, setTravelBudget] = useState('Moderate');

  // Depth demo states
  const [focalDistance, setFocalDistance] = useState(2.4);
  const [groundAngle, setGroundAngle] = useState(12);

  // Expense demo states
  const [subsCount, setSubsCount] = useState(4);
  const [spendAvg, setSpendAvg] = useState(65);

  // Tools activation demo states
  const [activationFunc, setActivationFunc] = useState<'ReLU' | 'Sigmoid' | 'GELU'>('GELU');
  const [inputValue, setInputValue] = useState(1.5);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] glass-panel rounded-3xl border-white/20 bg-[#0A1210]/95 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#00FF88] bg-[#00FF88]/10 px-2.5 py-1 rounded border border-[#00FF88]/20">
              SYS // {project.category.toUpperCase()}
            </span>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close project details"
            className="p-2 text-[#A5B5AD] hover:text-white hover:bg-white/10 rounded-xl transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 bg-black/30 font-mono text-xs">
          <button
            onClick={() => setActiveTab('simulation')}
            type="button"
            className={`flex items-center gap-2 py-2.5 px-4 border-b-2 font-medium transition-all ${
              activeTab === 'simulation'
                ? 'border-[#00FF88] text-[#00FF88] font-semibold'
                : 'border-transparent text-[#A5B5AD] hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            Live Interactive Simulation
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            type="button"
            className={`flex items-center gap-2 py-2.5 px-4 border-b-2 font-medium transition-all ${
              activeTab === 'overview'
                ? 'border-[#00FF88] text-[#00FF88] font-semibold'
                : 'border-transparent text-[#A5B5AD] hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            Architecture &amp; Features
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'simulation' ? (
            <div className="space-y-6">
              {/* Interactive Sandbox depending on demoType */}
              {project.demoType === 'travel' && (
                <div className="glass-panel rounded-2xl p-5 border-white/10 bg-black/50 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 font-mono text-xs">
                    <span className="text-[#00FF88] flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      SIMULATING ITINERARY GENERATION
                    </span>
                    <span className="text-[#A5B5AD]">Gemini Flash Synthesizer</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    <div>
                      <label htmlFor="travel-city-select" className="text-[#A5B5AD] mb-1 block">DESTINATION</label>
                      <select
                        id="travel-city-select"
                        value={travelCity}
                        onChange={(e) => setTravelCity(e.target.value)}
                        className="w-full bg-[#050807] border border-white/15 rounded-xl px-3 py-2 text-white font-mono focus:border-[#00FF88] focus:outline-none"
                      >
                        <option value="Tokyo">Tokyo, Japan (NRT)</option>
                        <option value="Reykjavik">Reykjavik, Iceland (KEF)</option>
                        <option value="Zurich">Zurich, Switzerland (ZRH)</option>
                        <option value="Singapore">Singapore (SIN)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="travel-days-input" className="text-[#A5B5AD] mb-1 block">DURATION: {travelDays} DAYS</label>
                      <input
                        id="travel-days-input"
                        type="range"
                        min={1}
                        max={7}
                        value={travelDays}
                        onChange={(e) => setTravelDays(Number(e.target.value))}
                        className="w-full accent-[#00FF88]"
                      />
                    </div>

                    <div>
                      <label htmlFor="travel-budget-select" className="text-[#A5B5AD] mb-1 block">BUDGET PACING</label>
                      <select
                        id="travel-budget-select"
                        value={travelBudget}
                        onChange={(e) => setTravelBudget(e.target.value)}
                        className="w-full bg-[#050807] border border-white/15 rounded-xl px-3 py-2 text-white font-mono focus:border-[#00FF88] focus:outline-none"
                      >
                        <option value="Budget Backpacker">Budget / Minimal</option>
                        <option value="Moderate">Moderate / Value</option>
                        <option value="Executive Luxury">Executive / Premium</option>
                      </select>
                    </div>
                  </div>

                  {/* Output generation card */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between text-[#00FF88] text-[11px]">
                      <span>AI SYNTHESIZED ITINERARY // {travelCity.toUpperCase()}</span>
                      <span>EST. EXPENSE: ${travelDays * (travelBudget === 'Budget Backpacker' ? 85 : travelBudget === 'Moderate' ? 190 : 420)}</span>
                    </div>

                    <div className="space-y-2 text-[#A5B5AD]">
                      {Array.from({ length: travelDays }).map((_, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-3">
                          <span className="text-[#00FF88] font-bold shrink-0">DAY 0{i + 1}</span>
                          <div>
                            <p className="text-white font-medium">
                              {i === 0
                                ? `Arrival & High-Speed Transit to ${travelCity} Central`
                                : i === 1
                                ? `Cultural exploration & AI curated street culinary trail`
                                : i === 2
                                ? `Panoramic architectural vantage point & sunset observation`
                                : `Autonomous exploration & souvenir procurement`}
                            </p>
                            <p className="text-[11px] text-[#A5B5AD] mt-0.5">
                              Pacing: {travelBudget} · Route efficiency score: 98.4%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.demoType === 'depth' && (
                <div className="glass-panel rounded-2xl p-5 border-white/10 bg-black/50 space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                    <span className="text-[#00FF88] flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      CALIPER DEPTH ESTIMATION
                    </span>
                    <span className="text-[#A5B5AD]">Focal Camera Heuristics</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <label htmlFor="depth-focal-input" className="text-[#A5B5AD] mb-1 block">
                        CAMERA DISTANCE: {focalDistance.toFixed(1)} METERS
                      </label>
                      <input
                        id="depth-focal-input"
                        type="range"
                        min="1"
                        max="8"
                        step="0.1"
                        value={focalDistance}
                        onChange={(e) => setFocalDistance(Number(e.target.value))}
                        className="w-full accent-[#00FF88]"
                      />
                    </div>
                    <div>
                      <label htmlFor="depth-angle-input" className="text-[#A5B5AD] mb-1 block">
                        GROUND PLANE INCLINE: {groundAngle}°
                      </label>
                      <input
                        id="depth-angle-input"
                        type="range"
                        min="0"
                        max="45"
                        value={groundAngle}
                        onChange={(e) => setGroundAngle(Number(e.target.value))}
                        className="w-full accent-[#00FF88]"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs flex flex-col sm:flex-row items-center justify-around gap-4">
                    <div className="text-center">
                      <p className="text-[10px] text-[#A5B5AD]">CALCULATED SUBJECT HEIGHT</p>
                      <p className="text-2xl font-bold text-[#00FF88]">
                        {(1.75 + (focalDistance - 2.4) * 0.05 + Math.sin((groundAngle * Math.PI) / 180) * 0.1).toFixed(2)} m
                      </p>
                      <p className="text-[10px] text-[#A5B5AD]">Confidence: 96.8%</p>
                    </div>
                    <div className="h-10 w-px bg-white/10 hidden sm:block" />
                    <div className="text-center">
                      <p className="text-[10px] text-[#A5B5AD]">VERTICAL PIXEL DISPARITY</p>
                      <p className="text-xl font-bold text-white">
                        {(420 / focalDistance).toFixed(0)} px
                      </p>
                      <p className="text-[10px] text-[#00FF88]">FPS: 58.4</p>
                    </div>
                  </div>
                </div>
              )}

              {project.demoType === 'expense' && (
                <div className="glass-panel rounded-2xl p-5 border-white/10 bg-black/50 space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                    <span className="text-[#00FF88] flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      SUBSCRIPTION LEAK SCANNER
                    </span>
                    <span className="text-[#A5B5AD]">Financial Telemetry</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <label htmlFor="expense-subs-input" className="text-[#A5B5AD] mb-1 block">ACTIVE RECURRING SUBS: {subsCount}</label>
                      <input
                        id="expense-subs-input"
                        type="range"
                        min="1"
                        max="12"
                        value={subsCount}
                        onChange={(e) => setSubsCount(Number(e.target.value))}
                        className="w-full accent-[#00FF88]"
                      />
                    </div>
                    <div>
                      <label htmlFor="expense-spend-input" className="text-[#A5B5AD] mb-1 block">AVERAGE MONTHLY SUB COST: ${spendAvg}</label>
                      <input
                        id="expense-spend-input"
                        type="range"
                        min="15"
                        max="250"
                        value={spendAvg}
                        onChange={(e) => setSpendAvg(Number(e.target.value))}
                        className="w-full accent-[#00FF88]"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-white/[0.02] rounded-lg">
                      <p className="text-[10px] text-[#A5B5AD]">ANNUAL DRAIN</p>
                      <p className="text-xl font-bold text-red-400">${subsCount * spendAvg * 12}</p>
                    </div>
                    <div className="p-3 bg-white/[0.02] rounded-lg">
                      <p className="text-[10px] text-[#A5B5AD]">REDUNDANCY SCORE</p>
                      <p className="text-xl font-bold text-[#00FF88]">{subsCount > 5 ? 'High (62%)' : 'Optimal'}</p>
                    </div>
                    <div className="p-3 bg-white/[0.02] rounded-lg col-span-2 sm:col-span-1">
                      <p className="text-[10px] text-[#A5B5AD]">POTENTIAL SAVINGS</p>
                      <p className="text-xl font-bold text-[#39FF14]">${Math.round(subsCount * spendAvg * 0.35 * 12)}/yr</p>
                    </div>
                  </div>
                </div>
              )}

              {project.demoType === 'tools' && (
                <div className="glass-panel rounded-2xl p-5 border-white/10 bg-black/50 space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                    <span className="text-[#00FF88] flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      NEURAL ACTIVATION EXPLORER
                    </span>
                    <span className="text-[#A5B5AD]">Mathematical Visualizer</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <span className="text-[#A5B5AD] mb-1 block">ACTIVATION FUNCTION</span>
                      <div className="flex gap-2">
                        {(['ReLU', 'Sigmoid', 'GELU'] as const).map((fn) => (
                          <button
                            key={fn}
                            type="button"
                            onClick={() => setActivationFunc(fn)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                              activationFunc === fn
                                ? 'bg-[#00FF88] text-[#050807] border-[#00FF88] font-bold'
                                : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                            }`}
                          >
                            {fn}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="tools-input-weight" className="text-[#A5B5AD] mb-1 block">INPUT TENSOR WEIGHT: {inputValue.toFixed(2)}</label>
                      <input
                        id="tools-input-weight"
                        type="range"
                        min="-4"
                        max="4"
                        step="0.1"
                        value={inputValue}
                        onChange={(e) => setInputValue(Number(e.target.value))}
                        className="w-full accent-[#00FF88]"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs flex items-center justify-around">
                    <div>
                      <p className="text-[10px] text-[#A5B5AD]">INPUT (x)</p>
                      <p className="text-xl font-bold text-white">{inputValue.toFixed(2)}</p>
                    </div>
                    <div className="text-xl text-[#00FF88]">➔</div>
                    <div>
                      <p className="text-[10px] text-[#A5B5AD]">ACTIVATED OUTPUT f(x)</p>
                      <p className="text-xl font-bold text-[#00FF88]">
                        {activationFunc === 'ReLU'
                          ? Math.max(0, inputValue).toFixed(4)
                          : activationFunc === 'Sigmoid'
                          ? (1 / (1 + Math.exp(-inputValue))).toFixed(4)
                          : (0.5 * inputValue * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (inputValue + 0.044715 * Math.pow(inputValue, 3))))).toFixed(4)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Architecture & Features Tab */}
              <div>
                <h3 className="text-sm font-mono text-[#00FF88] uppercase tracking-wider mb-2">
                  Architecture Overview
                </h3>
                <p className="text-sm text-[#A5B5AD] leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono text-[#00FF88] uppercase tracking-wider mb-3">
                  Key Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-[#00FF88] uppercase tracking-wider mb-2">
                  Technical Stack
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A5B5AD]">
                  {project.technologies.map((t, idx) => (
                    <span key={t} className="flex items-center gap-2">
                      <span className="text-white">{t}</span>
                      {idx < project.technologies.length - 1 && <span className="text-white/30">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#A5B5AD]">
            Repository maintained by <span className="text-white">Ankush Soni</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-white glass-panel glass-panel-hover rounded-xl"
            >
              <Github className="w-3.5 h-3.5 text-[#00FF88]" />
              Source Code
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-[#050807] bg-[#00FF88] hover:bg-[#39FF14] rounded-xl transition-all shadow-[0_0_12px_rgba(0,255,136,0.3)]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Deployment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
