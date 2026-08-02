/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../diagrams/projectData';

type InteractiveTerminalProps = {
  onScrollTo: (id: string) => (event: React.MouseEvent) => void;
  reducedMotion?: boolean;
};

type Entry = {
  id: number;
  kind: 'input' | 'output';
  content: React.ReactNode;
};

const QUICK_COMMANDS = ['help', 'whoami', 'work', 'ideas', 'links'];

const COMMAND_NAMES = [
  'help', 'whoami', 'work', 'open', 'skills', 'ideas', 'links', 'contact',
  'cd', 'cat', 'uptime', 'neofetch', 'fastfetch', 'echo', 'history', 'theme',
  'matrix', 'coffee', 'ping', 'exit', 'fortune', 'hack', 'sl', 'clear',
  'ls', 'pwd', 'sudo',
];

const ALL_STACK = [
  'python', 'typescript', 'c', 'go', 'c/c++',
  'react', 'node.js', 'pytorch', 'tensorflow',
  'docker', 'linux', 'postgresql', 'redis',
];

const QUOTES = [
  '"sharp edges hidden from users."',
  '"make it work, make it right, make it fast."',
  '"simplicity is a feature."',
  '"ship early, ship often, listen always."',
  '"the best debugger is a good night\'s sleep."',
  '"premature optimization is the root of all evil." — knuth',
];

const HACK_LINES = [
  'accessing mainframe ............ ok',
  'bypassing firewall ............. ok',
  'decrypting neural weights ...... ok',
  'uploading consciousness ........ 42%',
  'compiling excuses .............. done',
];

const ASCII_LOGO = [
  '█  █ █▀█ █▄ █ ▄▄',
  '▄▀▄  █▄█ █ ▀█ ▄▄█',
];

const ASCII_TRAIN = [
  '      o o o o o o o ',
  '    o      _____    ',
  '  .][__n_n_|DD[  ===\\_',
  ' (________|__|_[_____]',
  '_/oo OOOOO oo`o o o  \\',
];

const ASCII_COFFEE = [
  '   ( (',
  '    ) )',
  '  .______.',
  '  |      |]',
  '  \\      /',
  '   `----\'',
];

const ASCII_MATRIX = [
  'wake up, visitor.',
  'the matrix has you...',
  'follow the lime rabbit. ⌁',
];

const IDEAS = [
  'local-first ai notebook, wasm inference in the browser',
  'gpu path tracer — c + wgpu',
  'self-hosted media stack with smart transcoding',
  'tiny neural net visualizer for the web',
];

const WEB_LINKS = [
  { label: 'github', detail: 'github.com/0xyon3', href: 'https://github.com/0xyon3' },
  { label: 'email', detail: 'yon3@sp.us.ci', href: 'mailto:yon3@sp.us.ci' },
  { label: 'blog', detail: '0xyon3.netlify.app', href: 'https://0xyon3.netlify.app' },
  { label: 'cv', detail: '/cv.html', href: '/cv.html' },
];

const SECTION_IDS = ['about', 'projects', 'contact'];

export const InteractiveTerminal = ({ onScrollTo, reducedMotion = false }: InteractiveTerminalProps) => {
  const [history, setHistory] = useState<Entry[]>(() => [
    {
      id: 0,
      kind: 'output',
      content: (
        <div>
          <p className="text-white/80">welcome to yon3@void — interactive shell v3.0</p>
          <p className="text-white/40">type <span className="text-[#ffffff]">'help'</span> to list commands</p>
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState('');
  const [past, setPast] = useState<string[]>([]);
  const [pastIndex, setPastIndex] = useState(-1);
  const nextId = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const pushEntries = useCallback((entries: Omit<Entry, 'id'>[]) => {
    setHistory((prev) => [
      ...prev,
      ...entries.map((entry) => ({ ...entry, id: nextId.current++ })),
    ]);
  }, []);

  const runCommand = useCallback((raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) {
      pushEntries([{ kind: 'input', content: '' }]);
      return;
    }

    const [cmd, ...args] = trimmed.toLowerCase().split(/\s+/);

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div>
            <p className="mb-1 text-white/40">available commands:</p>
            {[
              ['whoami', 'who is yone'],
              ['work', 'shipped projects'],
              ['skills', 'the toolbox'],
              ['ideas', 'lab notes / future builds'],
              ['links', 'find me on the web'],
              ['contact', 'say hello'],
              ['cd <section>', 'jump: about · projects · contact'],
              ['cd', 'back to the top'],
              ['fastfetch', 'system info, but pretty'],
              ['cat ideas.txt', 'read a file'],
              ['uptime', 'vital signs'],
              ['fortune', 'wisdom dispenser'],
              ['coffee', 'essential maintenance'],
              ['hack', 'shhh'],
              ['sl', 'choo choo'],
              ['history', 'where you\'ve been'],
              ['clear', 'wipe the terminal'],
            ].map(([name, desc]) => (
              <p key={name}>
                <span className="inline-block w-32 text-[#ffffff]/90">{name}</span>
                <span className="text-white/55">{desc}</span>
              </p>
            ))}
            <p className="mt-1 text-white/30">psst — try: matrix · sudo · theme · exit · ping</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div>
            <p className="text-white/85">yone — software engineer</p>
            <p className="text-white/55">ai tooling · model serving · backends · graphics</p>
            <p className="text-white/55">status: <span className="text-[#ffffff]">open to work</span></p>
          </div>
        );
        break;

      case 'work':
        output = (
          <div>
            {PROJECTS.slice(0, 6).map((project, i) => (
              <p key={project.slug} className="text-white/70">
                <span className="text-white/30">{String(i + 1).padStart(2, '0')}  </span>
                {project.title.toLowerCase()}
                <span className="text-white/35"> — {project.year} · {project.status.toLowerCase()}</span>
              </p>
            ))}
            <p className="mt-1 text-white/40">
              type <span className="text-[#ffffff]">'cd projects'</span> to see them rendered
            </p>
          </div>
        );
        break;

      case 'ideas':
        output = (
          <div>
            <p className="mb-1 text-white/40">lab notes / things i want to build:</p>
            {IDEAS.map((idea) => (
              <p key={idea} className="text-white/70">
                <span className="text-[#ffffff]/70">· </span>{idea}
              </p>
            ))}
          </div>
        );
        break;

      case 'links':
        output = (
          <div className="space-y-0.5">
            {WEB_LINKS.map((link) => (
              <p key={link.label}>
                <span className="inline-block w-16 text-[#ffffff]/90">{link.label}</span>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') || link.href.startsWith('/') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') || link.href.startsWith('/') ? undefined : 'noopener noreferrer'}
                  className="text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#ffffff] hover:decoration-[#ffffff]/50"
                >
                  {link.detail}
                </a>
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div>
            <p className="text-white/70">
              fastest:{' '}
              <a
                href="mailto:yon3@sp.us.ci"
                className="text-[#ffffff] underline decoration-[#ffffff]/30 underline-offset-4 hover:decoration-[#ffffff]"
              >
                yon3@sp.us.ci
              </a>
            </p>
            <p className="text-white/40">or type 'cd contact'</p>
          </div>
        );
        break;

      case 'cd': {
        const target = args[0]?.replace(/^\/+|\/+$/g, '');
        if (!target || target === '~' || target === 'home' || target === 'top' || target === 'hero') {
          output = <p className="text-white/55">going <span className="text-[#ffffff]">home</span> …</p>;
          window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
        } else if (target === '..') {
          output = <p className="text-white/55">already at the top level — this is a flat world.</p>;
        } else if (SECTION_IDS.includes(target)) {
          output = <p className="text-white/55">jumping to <span className="text-[#ffffff]">/{target}</span> …</p>;
          const syntheticEvent = { preventDefault() {} } as React.MouseEvent;
          window.setTimeout(() => onScrollTo(target)(syntheticEvent), 350);
        } else {
          output = (
            <p className="text-white/55">
              cd: no such section: {target} — try {SECTION_IDS.join(' · ')} (or just 'cd' to go home)
            </p>
          );
        }
        break;
      }

      case 'ls':
        output = <p className="text-white/70">about/  projects/  contact/  cv.html  ideas.txt</p>;
        break;

      case 'pwd':
        output = <p className="text-white/70">/home/visitor/portfolio</p>;
        break;

      case 'fastfetch':
      case 'neofetch': {
        const fetchLines = [
          ['', ''],
          ['os', 'void/linux x86_64'],
          ['host', 'portfolio v3.0'],
          ['kernel', '6.9.0-yone'],
          ['uptime', 'since 2021'],
          ['shell', 'zsh 5.9'],
          ['wm', 'tailwind + framer-motion'],
          ['editor', 'neovim'],
          ['cpu', 'curiosity @ 4.20GHz'],
          ['memory', 'coffee / 8GB'],
        ];
        output = (
          <div className="flex gap-4">
            <div className="select-none text-[#ffffff]/80" aria-hidden="true">
              {ASCII_LOGO.map((line) => (
                <pre key={line} className="leading-tight">{line}</pre>
              ))}
            </div>
            <div>
              <p className="text-[#ffffff]">yon3<span className="text-white/40">@</span>void</p>
              <p className="text-white/30">─────────────</p>
              {fetchLines.slice(2).map(([key, value]) => (
                <p key={key}>
                  <span className="inline-block w-20 text-[#ffffff]/80">{key}</span>
                  <span className="text-white/65">{value}</span>
                </p>
              ))}
            </div>
          </div>
        );
        break;
      }

      case 'skills':
        output = (
          <div className="flex max-w-sm flex-wrap gap-x-3 gap-y-1">
            {ALL_STACK.map((skill) => (
              <span key={skill} className="text-white/70">
                <span className="text-[#ffffff]/70">▸ </span>{skill}
              </span>
            ))}
          </div>
        );
        break;

      case 'cat': {
        const file = args[0]?.replace(/^\/+|\/+$/g, '');
        if (file === 'ideas.txt' || file === 'ideas') {
          output = (
            <div>
              {IDEAS.map((idea) => (
                <p key={idea} className="text-white/70">
                  <span className="text-[#ffffff]/70">· </span>{idea}
                </p>
              ))}
            </div>
          );
        } else if (SECTION_IDS.includes(file)) {
          output = (
            <p className="text-white/55">
              cat: {file}: is a directory — try <span className="text-[#ffffff]">'cd {file}'</span>
            </p>
          );
        } else {
          output = <p className="text-white/55">cat: {file || '(empty)'}: no such file — try ideas.txt</p>;
        }
        break;
      }

      case 'echo':
        output = <p className="text-white/70">{args.join(' ') || ''}</p>;
        break;

      case 'history':
        output = past.length ? (
          <div>
            {past.map((entry, i) => (
              <p key={`${entry}-${i}`} className="text-white/70">
                <span className="text-white/30">{String(i + 1).padStart(3, ' ')}  </span>{entry}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-white/40">history is empty — make some</p>
        );
        break;

      case 'ping':
        output = (
          <div>
            <p className="text-white/70">pong — 0.042ms</p>
            <p className="text-white/40">no packets lost. yone is online.</p>
          </div>
        );
        break;

      case 'coffee':
        output = (
          <div className="text-white/70">
            {ASCII_COFFEE.map((line) => (
              <pre key={line} className="leading-tight">{line}</pre>
            ))}
            <p className="mt-1 text-white/40">brewing… done. refill level: 82%</p>
          </div>
        );
        break;

      case 'matrix':
        output = (
          <div className="text-[#ffffff]/80">
            {ASCII_MATRIX.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        );
        break;

      case 'hack':
        output = (
          <div>
            {HACK_LINES.map((line) => (
              <p key={line} className="text-white/70">{line}</p>
            ))}
            <p className="mt-1 text-[#ffffff]">just kidding. everything is fine.</p>
          </div>
        );
        break;

      case 'fortune':
        output = (
          <p className="text-white/70">
            {QUOTES[Math.floor(Math.random() * QUOTES.length)]}
          </p>
        );
        break;

      case 'sl':
        output = (
          <div className="text-white/70">
            {ASCII_TRAIN.map((line) => (
              <pre key={line} className="leading-tight">{line}</pre>
            ))}
            <p className="mt-1 text-white/40">choo choo. wrong command, right destination.</p>
          </div>
        );
        break;

      case 'theme':
        output = <p className="text-white/55">dark. always dark. the void doesn't do light mode.</p>;
        break;

      case 'exit':
        output = <p className="text-white/55">there is no escape. you're part of the system now.</p>;
        break;

      case 'uptime':
        output = (
          <div>
            <p className="text-white/70">▓▓▓▓▓▓▓▓░░ 82% caffeine — shipping reliably</p>
            <p className="text-white/40">uptime: since 2021, no major incidents</p>
          </div>
        );
        break;

      case 'sudo':
        output = <p className="text-white/55">sudo: permission denied — nice try.</p>;
        break;

      default:
        output = (
          <p className="text-white/55">
            zsh: command not found: {cmd} — try <span className="text-[#ffffff]">'help'</span>
          </p>
        );
    }

    pushEntries([
      { kind: 'input', content: trimmed },
      { kind: 'output', content: output },
    ]);
  }, [onScrollTo, pushEntries]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      runCommand(input);
      if (input.trim()) {
        setPast((prev) => [...prev, input.trim()]);
      }
      setPastIndex(-1);
      setInput('');
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!past.length) return;
      const next = pastIndex === -1 ? past.length - 1 : Math.max(0, pastIndex - 1);
      setPastIndex(next);
      setInput(past[next]);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (pastIndex === -1) return;
      const next = pastIndex + 1;
      if (next >= past.length) {
        setPastIndex(-1);
        setInput('');
      } else {
        setPastIndex(next);
        setInput(past[next]);
      }
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const match = COMMAND_NAMES.find((name) => name.startsWith(input.toLowerCase()) && name !== input.toLowerCase());
      if (match && input) setInput(match);
    } else if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      setHistory([]);
    }
  }, [input, past, pastIndex, runCommand]);

  return (
    <div>
      <div className="relative w-full border border-white/[0.09] bg-[#0a0a0c]/80 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md">
        {/* corner ticks */}
        <span aria-hidden="true" className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[#ffffff]/60" />
        <span aria-hidden="true" className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[#ffffff]/60" />

        {/* title bar */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            yon3@void — zsh
          </span>
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-[#ffffff]/60" />
          </span>
        </div>

        {/* terminal body */}
        <div
          ref={scrollRef}
          onClick={focusInput}
          className="h-[380px] cursor-text space-y-2.5 overflow-y-auto px-6 py-6 font-mono text-[13px] leading-relaxed sm:h-[440px] sm:text-sm"
        >
          {history.map((entry) =>
            entry.kind === 'input' ? (
              <p key={entry.id} className="text-white/85">
                <span className="text-[#ffffff]">$ </span>
                {entry.content}
              </p>
            ) : (
              <div key={entry.id} className="pl-4">
                {entry.content}
              </div>
            ),
          )}

          {/* active prompt */}
          <div className="flex items-center">
            <span className="text-[#ffffff]">$&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Terminal input — type help for commands"
              className="w-full bg-transparent font-mono text-[13px] text-white/90 caret-[#ffffff] outline-none sm:text-sm"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
          </div>
        </div>
      </div>

      {/* quick commands */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">try:</span>
        {QUICK_COMMANDS.map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => {
              runCommand(command);
              setPast((prev) => [...prev, command]);
              focusInput();
            }}
            className="border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-white/45 transition-colors hover:border-[#ffffff]/40 hover:text-[#ffffff]"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
};
