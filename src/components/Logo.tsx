/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import logoImage from '@/logo.png';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-start select-none ${className}`} id="navkar-trademark-original-logo">
      <img
        src={keyashah1506/Navkar-Travel/logo.png}
        alt="Navkar Travel logo"
        className="h-12 sm:h-14 w-auto"
      />
      {showTagline && (
        <span className="mt-1 text-xs uppercase tracking-[0.2em] font-semibold text-white/70">
          Travel beyond Boundaries
        </span>
      )}
    </div>
  );
}
