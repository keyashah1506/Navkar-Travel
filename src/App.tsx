/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParallaxImage from './components/ParallaxImage';
import { DESTINATIONS } from './data/destinations';
import { Compass, Sparkles, Shield, Trophy, ArrowRight, UserCheck, Star, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [preselectedDestination, setPreselectedDestination] = useState<string>('');

  const handleSelectBooking = (destinationTitle: string) => {
    setPreselectedDestination(destinationTitle);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearPreselected = () => {
    setPreselectedDestination('');
  };

  // Get 3 featured destinations for the homepage teaser
  const featuredDestinations = DESTINATIONS.slice(0, 3);

  return (
    <div className="min-h-screen bg-med-navy text-[#FAF6F0] flex flex-col justify-between selection:bg-med-terracotta selection:text-white" id="main-application-frame">
      
      {/* Sticky frosted glass header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main interactive visual views */}
      <main className="flex-grow">
        
        {activeTab === 'home' && (
          <div className="space-y-24 pb-24" id="home-view">
            
            {/* Sliding Hero */}
            <Hero 
              onExploreDestinations={() => {
                setActiveTab('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              onInquire={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />

            {/* Feature Section: The Signature Coterie */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <p className="text-[10px] font-display font-semibold tracking-[0.4em] text-sky-400 uppercase">EXCLUSIVE SPOTLIGHT</p>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-white tracking-tighter">India's Favorite Custom Packages</h2>
                <div className="h-[1px] w-16 bg-white/20 mx-auto mt-2" />
                <p className="text-xs sm:text-sm font-sans text-slate-300 font-light leading-relaxed max-w-xl mx-auto">
                  Handpicked destinations designed entirely around your personal budget and criteria—all equipped with India's lowest rate guarantee.
                </p>
              </div>

              {/* Grid representation */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredDestinations.map((dest) => (
                  <div 
                    key={dest.id}
                    onClick={() => {
                      setActiveTab('destinations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-med-ocean rounded-3xl overflow-hidden border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:border-med-terracotta/40 hover:shadow-[0_8px_35px_rgba(224,109,83,0.15)] transition-all duration-300 flex flex-col group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ParallaxImage 
                        src={dest.image} 
                        alt={dest.title} 
                        className="w-full h-full"
                        imgClassName="group-hover:scale-110 transition-transform duration-700 opacity-95"
                        intensity={20}
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-med-navy/95 backdrop-blur-md text-[#FAF6F0] text-[9px] font-display font-bold uppercase tracking-widest py-1.5 px-3 rounded-full border border-white/10 shadow-sm">
                          Featured Escapes
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5">
                          <Star className="h-3.5 w-3.5 fill-med-terracotta text-med-terracotta" />
                          <span className="text-[11px] font-display font-bold text-slate-200">{dest.rating}</span>
                          <span className="text-[10px] text-slate-400 font-sans">Verified rating</span>
                        </div>
                        <h3 className="font-serif text-xl leading-snug text-white font-normal italic group-hover:text-med-terracotta transition-colors">
                          {dest.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans font-light line-clamp-2">
                          {dest.description}
                        </p>
                      </div>

                      <div className="border-t border-white/10 mt-6 pt-5 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] font-display text-slate-400 tracking-wider block uppercase font-medium">BEST STARTING RATE</span>
                          <span className="text-xs font-sans font-bold text-[#FAF6F0] block">{dest.price}</span>
                        </div>
                        <span className="text-[10px] font-display font-medium tracking-widest text-[#FAF6F0] flex items-center gap-1 group-hover:text-med-terracotta transition-all">
                          EXPLORE SIGHTS <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View gallery CTA button */}
              <div className="text-center pt-4">
                <button
                  onClick={() => {
                    setActiveTab('destinations');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 border border-white/20 text-[10px] uppercase tracking-[0.3em] text-[#FAF6F0] hover:bg-med-terracotta hover:border-med-terracotta hover:text-white transition-all duration-300 font-semibold cursor-pointer"
                >
                  VIEW CURATED CATALOGUES
                </button>
              </div>

            </section>

            {/* Why Navkar Elegant stats overview */}
            <section className="bg-med-ocean/30 py-24 border-y border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Image side */}
                <div className="relative aspect-[3/2] rounded-3xl overflow-hidden border border-white/10 bg-med-navy">
                  <ParallaxImage 
                    src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=1200" 
                    alt="Scenic Kyoto temple" 
                    className="w-full h-full"
                    imgClassName="opacity-95"
                    intensity={35}
                  />
                  <div className="absolute inset-0 bg-stone-900/10 z-10" />
                </div>

                {/* Info side cards */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-display font-semibold tracking-[0.4em] text-sky-400 uppercase">100% INDIVIDUAL PLANNING</p>
                    <h3 className="font-serif text-3xl sm:text-4xl font-normal italic text-white tracking-tight leading-tight">Tailored to Your Specifications</h3>
                    <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                      At Navkar Travels, we discard rigid pre-packaged guides. We design every single itinerary completely according to our travelers’ requirements, guaranteeing incredible custom comfort paired with India's lowest wholesale prices.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans">
                    <div className="flex gap-4 items-start bg-med-ocean p-6 rounded-2xl border border-white/10 shadow-sm">
                      <Trophy className="h-5 w-5 text-med-navy fill-med-terracotta text-med-terracotta shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white">Grandmaster Service</h4>
                        <p className="text-slate-300 mt-1 leading-relaxed">Direct access to Michelin chefs, state-room guides, and retired museum directors.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start bg-med-ocean p-6 rounded-2xl border border-white/10 shadow-sm">
                      <Shield className="h-5 w-5 text-med-navy fill-sky-400 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white">Absolute Discretion</h4>
                        <p className="text-slate-300 mt-1 leading-relaxed">Secured, private, ground logistics for corporate leaders and high-net-worth families.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Fleet teaser block with high end CTA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-med-ocean border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden p-8 sm:p-16 text-[#FAF6F0] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-6 z-10 relative">
                  <span className="px-3 py-1 bg-med-navy text-sky-400 font-display text-[9px] font-bold tracking-widest uppercase border border-white/5">
                    EXECUTIVE DEPLOYMENT
                  </span>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-normal italic leading-tight text-white">
                    Traverse Earth in Absolute Dignity
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Explore our private Mercedes Sprinters, premium Innova Crystas, and custom-designed safari coaches tailored exclusively with comfortable seating for the smoothest inter-city and group travel transfer.
                  </p>

                  <button
                    onClick={() => {
                      setActiveTab('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 px-6 py-3.5 border border-white/20 text-[10px] uppercase tracking-[0.3em] text-[#FAF6F0] hover:bg-med-terracotta hover:border-med-terracotta hover:text-white transition-all duration-300 font-semibold cursor-pointer"
                  >
                    <span>VIEW OUR FLEET SPECIFICATIONS</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-stone-200 relative shadow-md pointer-events-none">
                  <ParallaxImage 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" 
                    alt="Luxury VIP executive road vehicle sprinter salon" 
                    className="w-full h-full"
                    imgClassName="opacity-95"
                    intensity={25}
                  />
                  <div className="absolute inset-0 bg-stone-900/10 z-10" />
                </div>

              </div>
            </section>

            {/* Elegant Call to Action banner bottom */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
              <div className="bg-med-ocean border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] rounded-3xl p-10 sm:p-16 flex flex-col items-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-white/10 pointer-events-none rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-white/10 pointer-events-none rounded-br-3xl" />
                <Compass className="h-10 w-10 text-sky-400 animate-spin-slow" />
                
                <h3 className="font-serif text-3xl sm:text-4xl font-light italic text-white max-w-xl tracking-tight leading-normal">
                  Ready to map your next global chapter?
                </h3>
                
                <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-sans font-light tracking-wide">
                  Submit your custom travel dates, group size, and food requirements. Enjoy beautiful custom-tailored package maviations at India's guaranteed lowest rates.
                </p>

                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border border-white/20 text-[#FAF6F0] hover:bg-med-terracotta hover:border-med-terracotta hover:text-white py-4 px-10 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 cursor-pointer"
                >
                  DISCUSS YOUR VOYAGE DESIGNS
                </button>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'destinations' && (
          <Gallery onSelectBooking={handleSelectBooking} />
        )}

        {activeTab === 'reviews' && (
          <Reviews />
        )}

        {activeTab === 'about' && (
          <About />
        )}

        {activeTab === 'contact' && (
          <Contact 
            preselectedDestination={preselectedDestination} 
            onClearPreselected={handleClearPreselected} 
          />
        )}

      </main>

      {/* Global brand footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Vercel Web Analytics */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
