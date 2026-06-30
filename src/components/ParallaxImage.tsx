/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  intensity?: number; // Adjusts how far the image moves (default: 40px)
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  intensity = 40
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure the scroll progress of the element relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Dynamically map scroll progress (0, 1) to a subtle Y translations
  // Moving from positive to negative offset creates the elegant "lagging" parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}px`, `${intensity}px`]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          y,
          // Scale it up slightly so the image container has room to translate without showing blank borders
          scale: 1.15,
        }}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imgClassName}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
