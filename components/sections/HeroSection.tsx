/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { m as motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { InteractiveTerminal } from '../ui/InteractiveTerminal';

type HeroSectionProps = {
  onScrollTo: (id: string) => (event: React.MouseEvent) => void;
  reducedMotion?: boolean;
  sectionRef?: React.Ref<HTMLElement>;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easeOut },
  }),
};

const MARQUEE_ITEMS = [
  'AI SYSTEMS',
  'MODEL SERVING',
  'BACKENDS',
  'GRAPHICS',
  'TYPESCRIPT',
  'PYTHON',
  'C',
];

export const HeroSection = ({
  onScrollTo,
  reducedMotion = false,
  sectionRef,
}: HeroSectionProps) => (
  <header
    ref={sectionRef}
    id="hero"
    className="relative flex min-h-[100dvh] flex-col overflow-hidden"
  >
    {/* hairline grid */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    />
    {/* soft glows */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-white/[0.04] blur-[140px]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[140px]"
    />

    <div className="container relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 px-6 pt-28 pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(440px,0.9fr)] lg:gap-10">
      {/* Left — headline */}
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-white/40"
        >
          <span className="inline-flex items-center gap-2.5 border border-white/[0.08] bg-white/[0.02] px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffffff] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ffffff]" />
            </span>
            <span className="tracking-wider text-white/70">OPEN TO WORK</span>
          </span>
          <span className="hidden tracking-wider sm:inline">~/portfolio — v3.0</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-display text-[clamp(3rem,8.5vw,7.25rem)] font-bold leading-[0.92] tracking-[-0.04em]"
        >
          <span className="block text-white">YONE</span>
          <span className="text-outline block">BUILDS</span>
          <span className="block text-white">
            SYSTEMS
            <span className="text-[#ffffff]">.</span>
          </span>
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.22}>
          <p className="mt-9 max-w-xl text-lg leading-relaxed text-white/55">
            Software engineer working across AI tooling, model-serving stacks,
            and performance-critical backends — turning messy ideas into
            software people can depend on.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={onScrollTo('projects')}
              className="group inline-flex items-center gap-3 bg-[#ffffff] px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#060607] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(204,246,85,0.25)]"
            >
              View work
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={onScrollTo('contact')}
              className="group inline-flex items-center gap-3 border border-white/12 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-white/60 transition-all hover:border-[#ffffff]/50 hover:text-[#ffffff]"
            >
              Get in touch
              <ArrowDownRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right — terminal */}
      <motion.aside
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.32}
        aria-label="Terminal"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <InteractiveTerminal onScrollTo={onScrollTo} reducedMotion={reducedMotion} />
        </motion.div>

        {/* under-terminal meta */}
        <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
          <span>est. 2021</span>
          <span>session: live</span>
        </div>
      </motion.aside>
    </div>

    {/* marquee footer of hero */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.42}
      className="relative z-10 border-t border-white/[0.06]"
    >
      <div className="flex overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex shrink-0 items-center gap-8 pr-8"
          style={
            reducedMotion
              ? undefined
              : { animation: 'heroMarquee 28s linear infinite' }
          }
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.3em] text-white/30"
            >
              {item}
              <span className="text-[#ffffff]/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>

    <style>{`@keyframes heroMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
  </header>
);
