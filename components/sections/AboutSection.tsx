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
  'Python', 'TypeScript', 'Rust', 'Go', 'C/C++',
  'React', 'Node.js', 'PyTorch', 'TensorFlow',
  'Docker', 'Linux', 'PostgreSQL', 'Redis',
];

export const AboutSection = ({
  reducedMotion = false,
  sectionRef,
}: AboutSectionProps) => (
  <section ref={sectionRef} id="about" className="relative py-24 md:py-32">
    {/* Section divider */}
    <div className="absolute mt-60 inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

    <div className="container mx-auto max-w-5xl px-6 pt-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left — heading */}
        <div>
          <p className="mb-4 text-sm font-medium text-[#c4a7e7]">About</p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building systems that
            <br />
            <span className="text-white/40">don't just work</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-[#c4a7e7]/40" />
        </div>

        {/* Right — body */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-white/60">
            I'm Yone, a software engineer. I build software across AI,
            systems engineering, complex backends, and graphics.
          </p>
          <p className="text-lg leading-relaxed text-white/60">
            My focus is on AI-powered tools and system-level experiments — data pipelines,
            model-serving stacks.
          </p>

          {/* Current focus */}
          <div className="border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#c4a7e7]">
                SAY HELLO
            </p>
            <span className="text-sm leading-relaxed text-white/50">
                Email: <a href="mailto:yon3@sp.us.ci">yon3@sp.us.ci</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
