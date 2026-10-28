import { PORTFOLIO_CONFIG } from '../data/portfolioData.ts';

export interface TerminalOutputLine {
  text: string;
  type?: 'info' | 'success' | 'warning' | 'error' | 'dim' | 'accent' | 'command';
  link?: string;
}

export interface TerminalExecutionResult {
  action?: 'clear' | 'matrix' | 'scroll_to_section';
  targetSection?: string;
  output: TerminalOutputLine[];
}

export function parseAndExecuteCommand(rawInput: string): TerminalExecutionResult {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return { output: [] };
  }

  const parts = trimmed.split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (command) {
    case 'help': {
      return {
        output: [
          { text: '=======================================================', type: 'dim' },
          { text: 'ANKUSH_TERMINAL v3.2 [Interactive Developer Shell]', type: 'accent' },
          { text: 'Available commands:', type: 'info' },
          { text: '  help         - List all available system commands', type: 'info' },
          { text: '  about        - View identity, bio & engineering mission', type: 'info' },
          { text: '  skills       - Print technical stack & languages', type: 'info' },
          { text: '  projects     - List featured production projects & links', type: 'info' },
          { text: '  contact      - Display contact protocols & secure email', type: 'info' },
          { text: '  whoami       - Display current active user identity', type: 'info' },
          { text: '  cat resume   - View detailed developer resume summary', type: 'info' },
          { text: '  socials      - Print GitHub, LinkedIn, and Instagram links', type: 'info' },
          { text: '  status       - Inspect system latency & kernel telemetry', type: 'info' },
          { text: '  matrix       - Trigger rain sequence toggle', type: 'info' },
          { text: '  clear        - Flush terminal buffer', type: 'info' },
          { text: '=======================================================', type: 'dim' },
        ]
      };
    }

    case 'about': {
      return {
        action: 'scroll_to_section',
        targetSection: 'about',
        output: [
          { text: `[IDENT]: ${PORTFOLIO_CONFIG.personal.name}`, type: 'accent' },
          { text: `[ROLES]: ${PORTFOLIO_CONFIG.personal.roles.join(' · ')}`, type: 'info' },
          { text: `[STATUS]: ${PORTFOLIO_CONFIG.personal.status}`, type: 'success' },
          { text: `"${PORTFOLIO_CONFIG.personal.leadQuote}"`, type: 'dim' },
          { text: PORTFOLIO_CONFIG.personal.bioLong, type: 'info' }
        ]
      };
    }

    case 'skills': {
      const lines: TerminalOutputLine[] = [
        { text: '=== COMPILED TECHNICAL INVENTORY ===', type: 'accent' }
      ];
      PORTFOLIO_CONFIG.skillCategories.forEach(cat => {
        lines.push({ text: `[${cat.name.toUpperCase()}]:`, type: 'success' });
        const skillList = cat.skills.map(s => s.name).join(', ');
        lines.push({ text: `  → ${skillList}`, type: 'dim' });
      });
      return {
        action: 'scroll_to_section',
        targetSection: 'skills',
        output: lines
      };
    }

    case 'projects': {
      const lines: TerminalOutputLine[] = [
        { text: '=== REPOSITORY CATALOG ===', type: 'accent' }
      ];
      PORTFOLIO_CONFIG.projects.forEach((proj, idx) => {
        lines.push({ text: `0${idx + 1}. ${proj.title} [${proj.category}]`, type: 'success' });
        lines.push({ text: `   ${proj.shortDesc}`, type: 'dim' });
        lines.push({ text: `   Stack: ${proj.technologies.join(', ')}`, type: 'info' });
        lines.push({ text: `   Repo: ${proj.githubUrl}`, type: 'accent', link: proj.githubUrl });
      });
      return {
        action: 'scroll_to_section',
        targetSection: 'projects',
        output: lines
      };
    }

    case 'contact': {
      return {
        action: 'scroll_to_section',
        targetSection: 'contact',
        output: [
          { text: '=== SECURE DISPATCH PROTOCOL ===', type: 'accent' },
          { text: `Email: ${PORTFOLIO_CONFIG.socials.email}`, type: 'success', link: `mailto:${PORTFOLIO_CONFIG.socials.email}` },
          { text: `GitHub: ${PORTFOLIO_CONFIG.socials.github}`, type: 'info', link: PORTFOLIO_CONFIG.socials.github },
          { text: `LinkedIn: ${PORTFOLIO_CONFIG.socials.linkedin}`, type: 'info', link: PORTFOLIO_CONFIG.socials.linkedin },
          { text: `Status: Form endpoint online. Transmitting encrypted messages.`, type: 'dim' }
        ]
      };
    }

    case 'clear': {
      return {
        action: 'clear',
        output: []
      };
    }

    case 'whoami': {
      return {
        output: [
          { text: 'uid=0(root) gid=0(root) groups=0(root)', type: 'dim' },
          { text: `Identity: ${PORTFOLIO_CONFIG.personal.name} | Developer & AI Explorer`, type: 'accent' },
          { text: `GitHub: ${PORTFOLIO_CONFIG.socials.github}`, type: 'info' }
        ]
      };
    }

    case 'cat': {
      const target = args[0]?.toLowerCase();
      if (target === 'resume' || target === 'resume.md' || target === 'cv') {
        return {
          output: [
            { text: `=== ${PORTFOLIO_CONFIG.personal.name.toUpperCase()} - RESUME ARCHIVE ===`, type: 'accent' },
            { text: `Education: B.Tech Computer Science & Engineering (2023 - 2027)`, type: 'info' },
            { text: `Core Competencies: Python, C++, Data Science, React, LLM Integration`, type: 'info' },
            { text: `Awards: 1st Runner Up HackOverflow 2025 AI Hackathon`, type: 'success' },
            { text: `Action: Open the Resume viewer modal from Hero for the full document.`, type: 'dim' }
          ]
        };
      }
      return {
        output: [
          { text: `cat: cannot access '${args.join(' ')}': No such file or directory. Try 'cat resume'.`, type: 'error' }
        ]
      };
    }

    case 'matrix': {
      return {
        action: 'matrix',
        output: [
          { text: '[MATRIX RAIN RELOADED] Stream density toggled.', type: 'success' }
        ]
      };
    }

    case 'socials': {
      return {
        output: [
          { text: `GitHub:    ${PORTFOLIO_CONFIG.socials.github}`, type: 'info', link: PORTFOLIO_CONFIG.socials.github },
          { text: `LinkedIn:  ${PORTFOLIO_CONFIG.socials.linkedin}`, type: 'info', link: PORTFOLIO_CONFIG.socials.linkedin },
          { text: `Instagram: ${PORTFOLIO_CONFIG.socials.instagram}`, type: 'info', link: PORTFOLIO_CONFIG.socials.instagram },
          { text: `Email:     ${PORTFOLIO_CONFIG.socials.email}`, type: 'accent', link: `mailto:${PORTFOLIO_CONFIG.socials.email}` }
        ]
      };
    }

    case 'status':
    case 'system': {
      const stats = PORTFOLIO_CONFIG.personal.systemStats;
      return {
        output: [
          { text: `[KERNEL]:   ${stats.kernel}`, type: 'accent' },
          { text: `[LATENCY]:  ${stats.latency}`, type: 'success' },
          { text: `[SECURITY]: ${stats.security}`, type: 'info' },
          { text: `[UPTIME]:   ${stats.uptime}`, type: 'info' },
          { text: `[ZONE]:     ${stats.locationCode}`, type: 'dim' }
        ]
      };
    }

    case 'date': {
      return {
        output: [
          { text: new Date().toISOString() + ' (UTC Standard)', type: 'info' }
        ]
      };
    }

    case 'sudo': {
      return {
        output: [
          { text: `[ACCESS GRANTED]: Welcome to root workstation privileges, guest.`, type: 'success' }
        ]
      };
    }

    case 'echo': {
      return {
        output: [
          { text: args.join(' ') || '', type: 'info' }
        ]
      };
    }

    default: {
      return {
        output: [
          { text: `bash: command not found: "${command}"`, type: 'error' },
          { text: `Type 'help' to review supported terminal instructions.`, type: 'dim' }
        ]
      };
    }
  }
}
