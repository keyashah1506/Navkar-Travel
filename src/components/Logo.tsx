/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-start select-none ${className}`} id="navkar-trademark-original-logo">
      {/* 
        High-fidelity vector implementation of the original Navkar trademark logo.
        Features a single shared sky-blue 'V' with a soaring airplane trail,
        lime green NA & KAR, and orange TRA & EL with tight, professional spacing.
      */}
      <svg
        viewBox="0 0 215 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 sm:h-14 w-auto"
      >
        {/* Sky-Blue Central Stylized V with Airplane wings and elegant split-trail */}
        <g id="logo-shared-v" fill="#51b0e4" transform="translate(14, 12) scale(0.8)">
          {/* Left tapered arm of the V: clean wedge pointing down to the vertex */}
          <path 
            d="M 48,47 L 55,46 L 75.5,90 L 73.5,90 Z" 
            id="v-left-arm"
          />

          {/* Lower/inner branch of the right swoosh trail */}
          <path 
            d="M 74,89 C 83,72 98,48 126,22 C 125,24 100,56 74,90 Z" 
            id="v-right-inner-trail"
          />

          {/* Upper/outer branch carrying the airplane Fuselage and Wing structures */}
          <path 
            d="
              M 65.5,72.5 
              C 68,66 71,60 71,60 
              L 60,56 
              L 67,51 
              L 74,53 
              C 77.5,47.5 83,41 86,38 
              L 80,35 
              L 84,31 
              L 89,33 
              C 97.5,27.5 111,19.5 128,18 
              C 127.5,18.5 122,23 118,27.5
              C 107.5,35.5 89,53 66,73.5
              Z
            " 
            id="v-right-outer-airplane"
          />
        </g>

        {/* Lime Green BRAND NAME Segment: NA and KAR on the top line */}
        <g id="brand-navkar" style={{ fontFamily: '"Space Grotesk", "Outfit", "Inter", sans-serif', fontWeight: 800 }}>
          {/* Left: NA */}
          <text
            x="8"
            y="52"
            fill="#91c73e"
            fontSize="32"
            letterSpacing="2"
          >
            NA
          </text>

          {/* Right: KAR */}
          <text
            x="118"
            y="52"
            fill="#91c73e"
            fontSize="32"
            letterSpacing="2"
          >
            KAR
          </text>

          {/* Original Trademark indicator TM */}
          <text
            x="190"
            y="35"
            fill="#777777"
            fontSize="7.5"
            fontWeight="bold"
          >
            TM
          </text>
        </g>

        {/* Orange Segment: TRA and EL on the second line */}
        <g id="brand-travel" style={{ fontFamily: '"Space Grotesk", "Outfit", "Inter", sans-serif', fontWeight: 800 }}>
          {/* Left: TRA */}
          <text
            x="12"
            y="82"
            fill="#e6994c"
            fontSize="21"
            letterSpacing="1.2"
          >
            TRA
          </text>

          {/* Right: EL */}
          <text
            x="122"
            y="82"
            fill="#e6994c"
            fontSize="21"
            letterSpacing="1.2"
          >
            EL
          </text>
        </g>

        {/* Tagline: "Travel beyond Boundaries" centered at the bottom */}
        {showTagline && (
          <text
            x="105"
            y="107"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="13.5"
            fontWeight="600"
            fontStyle="italic"
            letterSpacing="1.5"
            style={{ 
              fontFamily: '"Playfair Display", "Georgia", serif'
            }}
            id="tagline-text"
          >
            Travel beyond Boundaries
          </text>
        )}
      </svg>
    </div>
  );
}
