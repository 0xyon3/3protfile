/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SurfaceCodeDiagram } from '../Diagrams';

type ProjectsSectionProps = {
  reducedMotion?: boolean;
  sectionRef?: React.Ref<HTMLElement>;
};

export const ProjectsSection = ({
  reducedMotion = false,
  sectionRef,
}: ProjectsSectionProps) => (
  <section ref={sectionRef} id="projects" className="relative py-28 md:py-36">
    {/* Section divider */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

    <div className="container mx-auto max-w-7xl px-6">
      {/* Section header */}
      <div className="mb-14 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-white/35">
        <span className="text-[#ffffff]">02</span>
        <span className="h-px w-10 bg-white/15" />
        <span>Projects</span>
      </div>

      <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl">
            Selected <span className="text-white/35">work</span>
          </h2>
          <p className="mt-5 text-lg text-white/50">
            Projects spanning AI systems, performance-critical tooling, and
            full-stack applications.
          </p>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/25">
          // shipped &amp; maintained
        </p>
      </div>

      {/* Project cards */}
      <SurfaceCodeDiagram />
    </div>
  </section>
);
