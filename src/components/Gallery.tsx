/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { Destination } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Calendar, Compass, Star, X, Info, Check, ArrowRight } from 'lucide-react';
import ParallaxImage from './ParallaxImage';

interface GalleryProps {
  onSelectBooking: (destinationTitle: string) => void;
}

export default function Gallery({ onSelectBooking }: GalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Curations' },
    { id: 'luxury', label: 'Luxury Escapes' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'heritage', label: 'Heritage & Culture' },
    { id: 'beach', label: 'Serene Beaches' }
  ];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-[#0a0a0a]" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[10px] font-display font-semibold tracking-[0.4em] text-white/50 uppercase">EXPLORE WORLD CONCIERGE</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-[#f2f2f2] tracking-tighter">Our Curated Masterpieces</h2>
          <div className="h-[1px] w-16 bg-white/20 mx-auto mt-3" />
          <p className="text-xs sm:text-sm font-sans text-white/50 font-light max-w-xl leading-relaxed mx-auto">
            Every location is scouted first-hand, partnered exclusively with high-end resorts, and guided by accredited regional historians.
          </p>
        </div>

        {/* Filter Toolbar Controls */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-12 bg-white/[0.01] p-6 rounded-2xl border border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none snap-x" id="gallery-category-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wide snap-start shrink-0 transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input field */}
          <div className="relative" id="gallery-search-box">
            <input
              type="text"
              placeholder="Search destinations, regional titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-80 font-sans text-xs bg-white/5 border border-white/10 rounded-full pl-10 pr-8 py-3.5 focus:bg-white/10 focus:border-white text-white outline-none transition-all placeholder:text-white/30 font-medium"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-white/10 rounded-full text-white/40 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Dynamic Card Grid List */}
        <AnimatePresence mode="popLayout">
          {filteredDestinations.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white/[0.01] border border-dashed border-white/10 rounded-3xl"
              id="gallery-empty-state"
            >
              <Compass className="h-10 w-10 text-white/20 mx-auto animate-bounce" />
              <h3 className="font-serif text-lg text-white font-normal italic mt-4">No Special Journeys Found</h3>
              <p className="text-xs text-white/40 mt-1 max-w-sm mx-auto font-sans leading-relaxed">
                We couldn't locate any matching itineraries. Try widening your search queries or resetting filters.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-5 py-2.5 border border-white/20 text-white hover:bg-white hover:text-black font-display text-[10px] font-bold tracking-widest transition-colors cursor-pointer"
              >
                RESET CATALOGUE
              </button>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              id="gallery-cards-grid"
            >
              {filteredDestinations.map((dest) => (
                <motion.div
                   key={dest.id}
                   layoutId={`card-container-${dest.id}`}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.35 }}
                   className="bg-white/[0.01] rounded-3xl overflow-hidden border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 flex flex-col group cursor-pointer"
                   onClick={() => { setActiveDestination(dest); setSelectedImage(dest.image); }}
                >
                  
                  {/* Card Media Header */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ParallaxImage
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full"
                      imgClassName="group-hover:scale-110 transition-transform duration-700 opacity-90"
                      intensity={20}
                    />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                      <span className="bg-[#0a0a0a]/80 backdrop-blur-md text-white border border-white/10 text-[9px] font-display font-semibold uppercase tracking-widest py-1 px-3 rounded-full">
                        {dest.region}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-md text-white text-[10px] font-medium py-1.5 px-3 rounded-full shadow-sm z-10">
                      {dest.duration}
                    </div>
                  </div>

                  {/* Card Content parameters */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-white text-white opacity-85" />
                        <span className="text-[11px] font-display font-bold text-white/95">{dest.rating}</span>
                        <span className="text-[10px] text-white/40 font-sans">/ 5.0 (Elite verified)</span>
                      </div>
                      
                      <h3 className="font-serif text-xl leading-snug text-white font-normal italic group-hover:opacity-80 transition-opacity">
                        {dest.title}
                      </h3>
                      
                      <p className="text-xs text-white/50 font-sans font-light line-clamp-2 leading-relaxed">
                        {dest.description}
                      </p>
                    </div>

                    {/* Footer tags pricing and button */}
                    <div className="border-t border-white/5 mt-6 pt-5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-display tracking-wider text-white/40 block uppercase font-medium">ESTIMATED RATE</span>
                        <span className="text-sm font-sans font-bold text-white block">{dest.price}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-display font-semibold tracking-widest text-white/80 group-hover:text-white transition-colors">
                        <span>DETAILS</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {activeDestination && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="gallery-details-modal">
              
              {/* Backing dismiss background overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => { setActiveDestination(null); setSelectedImage(null); }}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
              />

              {/* Modal Body Container */}
              <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-[#121212] text-left align-middle shadow-2xl border border-white/10 flex flex-col lg:flex-row z-10"
                >
                  
                  {/* Left Column Carousel Media */}
                  <div className="lg:w-1/2 relative bg-slate-950 flex flex-col justify-between overflow-hidden">
                    <img
                      src={selectedImage || activeDestination.image}
                      alt={activeDestination.title}
                      className="w-full h-64 lg:h-full object-cover opacity-90 transition-all duration-300 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Inner linear top-down screen overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:block hidden pointer-events-none" />
                    
                    {/* Interactive Gallery Thumbnails */}
                    {activeDestination.gallery && activeDestination.gallery.length > 0 && (
                      <div className="absolute bottom-4 left-4 right-4 lg:bottom-28 lg:left-6 lg:right-6 z-20 flex gap-2 overflow-x-auto pb-1 scrollbar-none" id="modal-gallery-thumbnails">
                        {activeDestination.gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(img);
                            }}
                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer shrink-0 shadow-lg ${
                              (selectedImage || activeDestination.image) === img
                                ? 'border-white scale-105'
                                : 'border-white/15 hover:border-white/50 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Close button on mobile floating */}
                    <button
                      onClick={() => { setActiveDestination(null); setSelectedImage(null); }}
                      className="absolute top-4 right-4 lg:hidden p-2 rounded-full bg-[#0a0a0a]/80 border border-white/15 backdrop-blur-md text-white z-20"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Regional overlay for desktop info tag card */}
                    <div className="absolute bottom-6 left-6 right-6 hidden lg:block space-y-2 z-10 pointer-events-none">
                      <span className="p-1 px-3 bg-white/10 backdrop-blur-md text-white text-[10px] font-display font-semibold uppercase tracking-widest rounded-full border border-white/20">
                        {activeDestination.region} SPECIAL
                      </span>
                      <h4 className="font-serif text-2xl font-light italic text-white leading-tight drop-shadow-md">
                        {activeDestination.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Column Parameters details */}
                  <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    
                    {/* Header close button on desk */}
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-display font-medium text-white/40 block uppercase tracking-wider">
                          {activeDestination.region}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-normal italic leading-snug">
                          {activeDestination.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => { setActiveDestination(null); setSelectedImage(null); }}
                        className="hidden lg:block p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Summary attributes list */}
                    <div className="grid grid-cols-2 gap-4 bg-white/[0.02] p-4 rounded-xl border border-white/10 text-xs font-sans">
                      <div>
                        <p className="text-white/40 block mb-0.5 uppercase text-[9px] tracking-wide">ESTIMATED RATE</p>
                        <p className="font-bold text-white">{activeDestination.price}</p>
                      </div>
                      <div>
                        <p className="text-white/40 block mb-0.5 uppercase text-[9px] tracking-wide">RECOMMENDED RUN</p>
                        <p className="font-bold text-white">{activeDestination.duration}</p>
                      </div>
                      <div>
                        <p className="text-white/40 block mb-0.5 uppercase text-[9px] tracking-wide">IDEAL SEASON</p>
                        <p className="font-bold text-white">{activeDestination.bestTime}</p>
                      </div>
                      <div className="flex items-center gap-1 self-center">
                        <Star className="h-4 w-4 fill-white text-white opacity-90" />
                        <span className="font-bold text-white">{activeDestination.rating}</span>
                        <span className="text-white/40">/ 5.0</span>
                      </div>
                    </div>

                    {/* About details */}
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-display tracking-widest font-semibold text-white/40 uppercase">THE EXPERIENCE</p>
                      <p className="text-xs text-white/60 font-sans font-light leading-relaxed">
                        {activeDestination.description}
                      </p>
                    </div>

                    {/* Signature Highlights */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-display font-bold tracking-widest text-white/40 uppercase">SIGNATURE HIGHLIGHTS</p>
                      <ul className="space-y-1.5 font-sans text-xs text-white/50 leading-normal">
                        {activeDestination.highlights.map((high, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <Compass className="h-3.5 w-3.5 text-white/40 shrink-0 mt-0.5" />
                            <span>{high}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Premium Amenities */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-display font-bold tracking-widest text-white/40 uppercase">INCLUDED CONCIERGE CARE</p>
                      <div className="flex flex-wrap gap-2">
                        {activeDestination.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="bg-white/5 font-sans text-[10px] font-medium text-white/70 py-1.5 px-3 rounded-lg border border-white/10 flex items-center gap-1.5"
                          >
                            <Check className="h-3 w-3 text-white/50" />
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic Action Inquire button */}
                    <button
                      onClick={() => {
                        onSelectBooking(activeDestination.title);
                        setActiveDestination(null);
                        setSelectedImage(null);
                      }}
                      className="w-full flex items-center justify-center gap-2 border border-white/20 text-[#f2f2f2] hover:bg-white hover:text-black py-4 rounded-xl font-display text-xs font-semibold tracking-widest transition-colors cursor-pointer mt-4"
                    >
                      <span>BOOK EXCLUSIVELY NOW</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                  </div>

                </motion.div>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
