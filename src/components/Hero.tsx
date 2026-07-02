/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Compass, Sparkles, MapPin, ShieldCheck, HeartPulse } from 'lucide-react';

interface HeroProps {
  onExploreDestinations: () => void;
  onInquire: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2000',
    tagline: 'TRAVEL BEYOND BOUNDARIES • EST. 1998',
    title: 'Your Ultimate Custom Dream Vacation',
    description: 'Welcome to Navkar Travel—proud of our core philosophy "Travel beyond Boundaries." We design fully custom-built travel packages tailored specifically to your family requirements at absolute lowest rates.'
  },
  {
    image: 'https://tse4.mm.bing.net/th/id/OIP.jTuODpGPaevFrJ5DHMiunAHaE7?r=0&cb=thfvnextfalcon3&rs=1&pid=ImgDetMain&o=7&rm=3',
    tagline: 'EXPLORE WITH ZERO LIMITS',
    title: 'Explore Kashmir Kerala And Ladakh',
    description: 'Travel beyond boundaries from serene Dal Lake houseboats to high-altitude Ladakh roads. We assemble your custom travel logs and direct wholesaler pricing.'
  },
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000',
    tagline: 'SIGNATURE ESCAPES • BESPOKE LUXURY',
    title: 'Signature Maldives Bali And Europe',
    description: 'Bespoke overwater escapes and tropical pool villas designed for the luxury traveler. Travel beyond boundaries and show us any quote—we guarantee to beat it.'
  }
];

export default function Hero({ onExploreDestinations, onInquire }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[85vh] lg:h-[80vh] w-full bg-med-navy overflow-hidden flex items-center justify-between border-b border-white/10" id="app-hero">
      
      {/* Background radial gradient to give editorial ambient depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_75%)] pointer-events-none" />

      {/* Main container Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full py-16 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side Content Column */}
        <div className="w-full lg:max-w-2xl space-y-8 text-left">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Minimal tagline */}
              <p className="text-[10px] uppercase tracking-[0.5em] text-sky-400 block font-semibold">
                {HERO_SLIDES[currentSlide].tagline}
              </p>
 
              {/* Main luxurious heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal italic tracking-tight text-white leading-[1.15] select-none">
                {HERO_SLIDES[currentSlide].title}
              </h1>
 
              {/* Elegant description */}
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md">
                {HERO_SLIDES[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
 
          {/* Premium action links buttons */}
          <div className="flex flex-row items-center gap-4 pt-4">
            <button
              onClick={onExploreDestinations}
              className="px-6 sm:px-8 py-3.5 border border-white/20 text-[10px] uppercase tracking-[0.3em] text-[#FAF6F0] hover:bg-med-terracotta hover:border-med-terracotta hover:text-white transition-all duration-300 font-semibold cursor-pointer"
            >
              Curated Portfolios
            </button>
            
            <button
              onClick={onInquire}
              className="px-6 py-3.5 text-slate-400 hover:text-white text-[10px] uppercase tracking-[0.3em] font-medium transition-colors cursor-pointer"
            >
              Discuss Voyage
            </button>
          </div>
 
          {/* Micro Dot Indicators */}
          <div className="flex items-center gap-3 pt-6">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-[2px] transition-all duration-500 outline-none cursor-pointer ${
                  currentSlide === idx ? 'w-12 bg-med-terracotta' : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
 
        </div>
 
        {/* Right Side: The Signature Curved-Arch Image Showcase */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0 select-none">
          <div className="relative w-[280px] sm:w-[340px] xl:w-[410px] h-[380px] sm:h-[460px] xl:h-[540px] border border-white/10 rounded-t-full overflow-hidden flex items-end justify-center bg-med-ocean shadow-sm">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentSlide}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.85, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={HERO_SLIDES[currentSlide].image}
                  alt={HERO_SLIDES[currentSlide].title}
                  className="w-full h-full object-cover rounded-t-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-med-navy/10" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-med-navy/80 via-med-navy/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
 
            {/* Micro Caption */}
            <div className="mb-12 text-center z-10 p-4 font-sans">
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/70 mb-1 font-semibold">Highlight Voyage</div>
              <div className="text-xl sm:text-2xl font-serif italic text-white font-light">
                {HERO_SLIDES[currentSlide].title.split(' ').slice(-2).join(' ')}
              </div>
            </div>
 
          </div>
        </div>
 
      </div>
 
      {/* Elegant Trust floating footer bar inside desk */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-med-navy via-med-navy/85 to-transparent hidden lg:block border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-6 bg-med-ocean/90 backdrop-blur-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-2xl p-4">
            
            <div className="flex items-center gap-3 border-r border-white/10 justify-center">
              <MapPin className="h-4.5 w-4.5 text-[#0ea5e9] shrink-0" />
              <div>
                <p className="text-white text-[10px] font-semibold tracking-widest uppercase font-display">100% Customized</p>
                <p className="text-slate-300 text-[9px]">Built to Your Needs</p>
              </div>
            </div>
 
            <div className="flex items-center gap-3 border-r border-white/10 justify-center">
              <ShieldCheck className="h-4.5 w-4.5 text-[#8ec63f] shrink-0" />
              <div>
                <p className="text-white text-[10px] font-semibold tracking-widest uppercase font-display">Lowest Rate Info</p>
                <p className="text-slate-300 text-[9px]">Best Price Guaranteed</p>
              </div>
            </div>
 
            <div className="flex items-center gap-3 border-r border-white/10 justify-center">
              <Compass className="h-4.5 w-4.5 text-[#f97316] shrink-0" />
              <div>
                <p className="text-white text-[10px] font-semibold tracking-widest uppercase font-display">No Hidden Fees</p>
                <p className="text-slate-300 text-[9px]">Direct Wholesaler Deals</p>
              </div>
            </div>
 
            <div className="flex items-center gap-3 justify-center">
              <HeartPulse className="h-4.5 w-4.5 text-[#0ea5e9] shrink-0" />
              <div>
                <p className="text-white text-[10px] font-semibold tracking-widest uppercase font-display">24/7 Assistance</p>
                <p className="text-slate-300 text-[9px]">Dedicated Trip Managers</p>
              </div>
            </div>
 
          </div>
        </div>
      </div>
 
    </div>
  );
}
