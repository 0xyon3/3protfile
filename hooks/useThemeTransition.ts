/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect } from 'react';

type UseThemeTransitionOptions = {
  isBlocked?: boolean;
  onBeforeChange?: (nextTheme: 'light' | 'dark') => void;
  onAfterChange?: (nextTheme: 'light' | 'dark') => void;
  transitionMs?: number;
};

export const useThemeTransition = (_options: UseThemeTransitionOptions = {}) => {
  useLayoutEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    localStorage.setItem('theme', 'dark');
  }, []);

  return {
    theme: 'dark' as const,
    isThemeTransitioning: false,
    transitionTheme: null,
    toggleTheme: () => {},
  };
};
