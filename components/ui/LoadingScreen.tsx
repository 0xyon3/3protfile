/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';

export const LoadingScreen = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 z-[70] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ backgroundColor: '#000000' }}
    >
      <div className="relative z-10 flex flex-col items-center gap-4 border border-white/[0.06] bg-[#0b0b0d] px-10 py-8">
        <div className="font-display text-lg font-bold tracking-wider text-white">
          yon3<span className="text-[#ffffff]">_</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          Loading
        </div>
        <div className="mt-3 h-px w-32 overflow-hidden bg-white/10">
          <motion.div
            className="h-full w-1/3"
            initial={{ x: '-40%' }}
            animate={prefersReducedMotion ? { x: '0%' } : { x: '140%' }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ backgroundColor: '#ffffff' }}
          />
        </div>
      </div>
    </motion.div>
  );
};
