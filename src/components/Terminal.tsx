import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2, Maximize2, Minimize2 } from 'lucide-react';
import { parseAndExecuteCommand, TerminalOutputLine } from '../utils/terminalParser.ts';

interface TerminalHistoryItem {
  command: string;
  output: TerminalOutputLine[];
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      command: 'whoami',
      output: [
        { text: 'ANKUSH_TERMINAL v3.2.0 [Protected Kernel]', type: 'accent' },
        { text: 'Identity: Ankush Soni | Developer & AI Explorer', type: 'info' },
        { text: "Type 'help' to review supported terminal commands.", type: 'dim' }
      ]
    }
  ]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [savedCommands, setSavedCommands] = useState<string[]>(['whoami']);
  const [isExpanded, setIsExpanded] = useState(false);

  const terminalOutputRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommandSubmit = (cmdToRun?: string) => {
    const rawCmd = cmdToRun !== undefined ? cmdToRun : input;
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Execute through pure logic parser
    const result = parseAndExecuteCommand(trimmed);

    if (result.action === 'clear') {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, { command: trimmed, output: result.output }]);
    }

    if (result.action === 'scroll_to_section' && result.targetSection) {
      const el = document.getElementById(result.targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Update history tracker for arrow navigation
    setSavedCommands((prev) => [...prev, trimmed]);
    setCommandIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommandSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (savedCommands.length === 0) return;
      const nextIndex = commandIndex === -1 ? savedCommands.length - 1 : Math.max(0, commandIndex - 1);
      setCommandIndex(nextIndex);
      setInput(savedCommands[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex === -1) return;
      const nextIndex = commandIndex + 1;
      if (nextIndex >= savedCommands.length) {
        setCommandIndex(-1);
        setInput('');
      } else {
        setCommandIndex(nextIndex);
        setInput(savedCommands[nextIndex] || '');
      }
    }
  };

  const quickCommands = ['help', 'about', 'skills', 'projects', 'cat resume', 'status', 'clear'];

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-[#00FF88] tracking-widest bg-[#00FF88]/10 px-2.5 py-1 rounded border border-[#00FF88]/20">
          00 / INTERACTIVE_SHELL
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </div>

      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
          Ankush Terminal Interface
        </h2>
        <p className="text-sm text-[#A5B5AD] max-w-xl">
          Execute simulated POSIX commands to explore identity, skill registries, live repository catalogs, or trigger system actions.
        </p>
      </div>

      {/* Terminal Shell Window */}
      <div
        className={`glass-panel rounded-3xl border-white/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 ${
          isExpanded ? 'h-[750px]' : 'h-[520px]'
        } flex flex-col bg-[#050807]/90`}
      >
        {/* Terminal Header */}
        <div className="px-5 py-3.5 bg-black/60 border-b border-white/10 flex items-center justify-between font-mono text-xs select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-[0_0_6px_rgba(255,95,86,0.6)] cursor-pointer" onClick={() => setHistory([])} title="Clear buffer" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-[0_0_6px_rgba(255,189,46,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-[0_0_6px_rgba(39,201,63,0.6)] cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Toggle expand" />
            <span className="ml-3 text-white/80 font-medium">ANKUSH_TERMINAL</span>
          </div>

          <div className="flex items-center gap-3 text-[#A5B5AD]">
            <span className="text-[11px] hidden sm:inline">guest@ankush-sys: ~</span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              type="button"
              className="p-1 hover:text-white transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
              aria-label={isExpanded ? 'Collapse terminal' : 'Expand terminal'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setHistory([])}
              type="button"
              className="p-1 hover:text-red-400 transition-colors"
              title="Clear terminal buffer"
              aria-label="Clear terminal buffer"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div
          ref={terminalOutputRef}
          className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-sm space-y-4 text-left leading-relaxed select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5 animate-fadeIn">
              {/* Command Prompt Line */}
              <div className="flex items-center gap-2 text-white">
                <span className="text-[#00FF88] font-semibold">guest@ankush-sys:~$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>

              {/* Output Lines */}
              <div className="space-y-1 pl-2 border-l border-white/5 ml-1">
                {item.output.map((line, lIdx) => {
                  let colorClass = 'text-[#F5F7F6]';
                  if (line.type === 'accent') colorClass = 'text-[#00FF88] font-semibold';
                  if (line.type === 'success') colorClass = 'text-[#39FF14]';
                  if (line.type === 'error') colorClass = 'text-red-400';
                  if (line.type === 'dim') colorClass = 'text-[#A5B5AD]/80';
                  if (line.type === 'info') colorClass = 'text-[#E0E7E4]';

                  return (
                    <div key={lIdx} className={colorClass}>
                      {line.link ? (
                        <a
                          href={line.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-[#00FF88] inline-flex items-center gap-1"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <span>{line.text}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Active Interactive Input Line */}
          <div className="flex items-center gap-2 text-white pt-2">
            <span className="text-[#00FF88] font-semibold shrink-0">guest@ankush-sys:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command ('help', 'projects', 'about')..."
              className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-white/20 focus:ring-0 p-0 text-xs sm:text-sm"
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal input"
            />
            <span className="inline-block w-2 h-4 bg-[#00FF88] animate-pulse shadow-[0_0_8px_#00FF88]" />
          </div>
        </div>

        {/* Quick Command Suggestions Footer */}
        <div className="px-5 py-3 bg-black/40 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[#A5B5AD] text-[11px] mr-1">QUICK:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommandSubmit(cmd)}
                type="button"
                className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-[#00FF88]/15 border border-white/10 hover:border-[#00FF88]/40 text-[#A5B5AD] hover:text-[#00FF88] transition-all text-[11px]"
              >
                {cmd}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-[#A5B5AD]/70 hidden md:block">
            Use <kbd className="px-1 py-0.5 rounded bg-white/10 text-white">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white/10 text-white">↓</kbd> for command history
          </div>
        </div>
      </div>
    </section>
  );
};
