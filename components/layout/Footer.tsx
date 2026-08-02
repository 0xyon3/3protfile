/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

type FooterProps = {
  footerRef: React.RefObject<HTMLElement>;
};

export const Footer = ({ footerRef }: FooterProps) => (
  <footer
    ref={footerRef}
    className="relative z-10 border-t border-white/[0.06] bg-[#060607] py-14"
  >
    <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
      <div>
        <p className="font-display text-lg font-bold tracking-tight text-white">
          yon3<span className="text-[#ffffff]">_</span>
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
          Software Engineer &amp; AI Builder
        </p>
      </div>

      <div className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
        <a
          href="https://github.com/0xyon3"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#ffffff]"
        >
          GitHub
        </a>
        <a
          href="mailto:yon3@sp.us.ci"
          className="transition-colors hover:text-[#ffffff]"
        >
          Email
        </a>
        <a
          href="https://0xyon3.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#ffffff]"
        >
          Blog
        </a>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
        © {new Date().getFullYear()} — built in the dark
      </p>
    </div>
  </footer>
);
