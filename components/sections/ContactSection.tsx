/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

type ContactSectionProps = {
  reducedMotion?: boolean;
  sectionRef?: React.Ref<HTMLElement>;
};

const LINKS = [
  {
    title: 'GitHub',
    detail: 'github.com/0xyon3',
    href: 'https://github.com/0xyon3',
  },
  {
    title: 'Email',
    detail: 'yon3@sp.us.ci',
    href: 'mailto:yon3@sp.us.ci',
  },
  {
    title: 'Blog',
    detail: '0xyon3.netlify.app',
    href: 'https://0xyon3.netlify.app',
  },
];

export const ContactSection = ({
  reducedMotion = false,
  sectionRef,
}: ContactSectionProps) => (
  <section ref={sectionRef} id="contact" className="relative py-28 md:py-36">
    {/* Section divider */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

    {/* glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[#ffffff]/[0.04] blur-[140px]"
    />

    <div className="container relative mx-auto max-w-6xl px-6">
      <div className="mb-14 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-white/35">
        <span className="text-[#ffffff]">03</span>
        <span className="h-px w-10 bg-white/15" />
        <span>Contact</span>
      </div>

      <div className="mb-16 max-w-3xl">
        <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Let's build something
          <br />
          <span className="text-white/35">that holds up</span>
          <span className="text-[#ffffff]">.</span>
        </h2>
        <p className="mt-6 text-lg text-white/50">
          Find me and my work across the web — or just send an email.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LINKS.map((link, i) => (
          <a
            key={link.title}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="group relative flex items-center justify-between border border-white/[0.07] bg-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffffff]/30 hover:bg-white/[0.03]"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                {String(i + 1).padStart(2, '0')} / {link.title}
              </p>
              <p className="mt-2 font-mono text-sm text-white/70 transition-colors group-hover:text-[#ffffff]">
                {link.detail}
              </p>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ffffff]"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
