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
  <section ref={sectionRef} id="contact" className="relative py-24 md:py-32">
    {/* Section divider */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-12">
        <p className="mb-4 text-sm font-medium text-[#c4a7e7]">Contact</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let's connect
        </h2>
        <p className="mt-3 text-lg text-white/50">
          Find me and my work across the web.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LINKS.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="group flex items-center justify-between border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
          >
            <div>
              <p className="text-sm font-medium text-white">{link.title}</p>
              <p className="mt-1 text-sm text-white/40">{link.detail}</p>
            </div>
            <ArrowUpRight
              size={18}
              className="text-white/20 transition-all group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
