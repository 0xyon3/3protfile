/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import { X } from 'lucide-react';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onScrollTo: (id: string) => (event: React.MouseEvent) => void;
};

const ITEMS = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'projects', label: 'Projects', index: '02' },
  { id: 'contact', label: 'Contact', index: '03' },
];

export const MobileMenu = ({ isOpen, onClose, onScrollTo }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 flex flex-col justify-center bg-[#060607]/98 px-8 backdrop-blur-xl"
      >
        <div className="space-y-2">
          {ITEMS.map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={onScrollTo(item.id)}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 + i * 0.06, duration: 0.35 }}
              className="group flex items-baseline gap-4 py-3"
            >
              <span className="font-mono text-xs text-[#ffffff]">{item.index}</span>
              <span className="font-display text-4xl font-bold tracking-tight text-white/80 transition-colors group-hover:text-[#ffffff]">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex gap-4"
        >
          <a
            href="/cv.html"
            className="border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white/70 transition-all hover:border-white/25 hover:text-white"
          >
            View CV
          </a>
          <a
            href="https://github.com/0xyon3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffffff] px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#060607]"
          >
            GitHub
          </a>
        </motion.div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-6 top-6 border border-white/10 p-3 text-white/50 transition-colors hover:border-[#ffffff]/40 hover:text-[#ffffff]"
        >
          <X size={20} />
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);
