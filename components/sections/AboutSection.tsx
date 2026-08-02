/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

type AboutSectionProps = {
  reducedMotion?: boolean;
  sectionRef?: React.Ref<HTMLElement>;
};

const SKILLS = [
  'JS/TS', 'Go', 'C/C++', 'Python',
  'Express/React', 'Node.js', 'PyTorch',
  'Docker', 'Linux', 'PostgreSQL/MongoDB', 'Redis',
];

export const AboutSection = ({
  reducedMotion = false,
  sectionRef,
}: AboutSectionProps) => (
  <section ref={sectionRef} id="about" className="relative py-28 md:py-36">
    {/* Section divider */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

    <div className="container mx-auto max-w-6xl px-6">
      {/* Section marker */}
      <div className="mb-14 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-white/35">
        <span className="text-[#ffffff]">01</span>
        <span className="h-px w-10 bg-white/15" />
        <span>About</span>
      </div>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        {/* Left — heading */}
        <div>
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl">
            Systems that
            <br />
            <span className="text-white/35">don't just work —</span>
            <br />
            they hold up.
          </h2>
          <div className="mt-8 h-px w-16 bg-[#ffffff]/50" />
        </div>

        {/* Right — body */}
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-white/60">
            I'm <span className="text-white">Yone</span>, a software engineer.
            I build software across AI, systems engineering, complex backends,
            and graphics — the kind of work where the sharp edges are hidden
            from the people using it.
          </p>
          <p className="text-lg leading-relaxed text-white/60">
            My focus is on AI-powered tools and system-level experiments:
            model-serving stacks, and the glue that makes
            them reliable.
          </p>

          {/* Toolbox */}
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
              // toolbox
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-white/50 transition-colors hover:border-[#ffffff]/40 hover:text-[#ffffff]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border border-white/[0.07] bg-white/[0.02] px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ffffff]/80">
              Say hello
            </p>
            <a
              href="mailto:yon3@sp.us.ci"
              className="font-mono text-sm text-white/70 transition-colors hover:text-[#ffffff]"
            >
              yon3@sp.us.ci
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
