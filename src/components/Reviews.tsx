/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Review } from '../types';
import { INITIAL_REVIEWS } from '../data/reviews';
import { DESTINATIONS } from '../data/destinations';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, ThumbsUp, PenTool, Check, CheckCircle2, User, HelpCircle, X } from 'lucide-react';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('navkar_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Failed to parse stored reviews, falling back", err);
      }
    }
    return INITIAL_REVIEWS;
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');
  const [tripType, setTripType] = useState(DESTINATIONS[0].title);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync reviews to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('navkar_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Aggregate metrics calculations
  const stats = useMemo(() => {
    const total = reviews.length;
    if (total === 0) return { avg: 5.0, distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
    
    let sum = 0;
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    reviews.forEach((r) => {
      sum += r.rating;
      const key = Math.round(r.rating) as 5|4|3|2|1;
      if (dist[key] !== undefined) {
        dist[key]++;
      }
    });

    const avg = parseFloat((sum / total).toFixed(2));
    return { avg, distribution: dist, total };
  }, [reviews]);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setReviews((prev) => 
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      tripType: tripType,
      likes: 0,
      avatarSeed: name.toLowerCase().replace(/\s/g, ''),
      isVerified: true
    };

    setReviews((prev) => [newReview, ...prev]);
    setIsSuccess(true);
    setName('');
    setText('');
    setRating(5);
    
    setTimeout(() => {
      setIsSuccess(false);
      setIsFormOpen(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-[#0a0a0a]" id="reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[10px] font-display font-semibold tracking-[0.4em] text-white/50 uppercase">AUTHENTIC CHRONICLES</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-[#f2f2f2] tracking-tighter">Client Diaries</h2>
          <div className="h-[1px] w-16 bg-white/20 mx-auto mt-3" />
          <p className="text-xs sm:text-sm font-sans text-white/50 font-light max-w-xl leading-relaxed mx-auto">
            Read transparent reviews directly from verified corporate leaders, scholars, and families who entrust Navkar Travels with their precious escapes.
          </p>
        </div>

        {/* Aggregate Ratings Metric Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Average Stars Metric Card */}
          <div className="bg-white/[0.01] border border-white/10 rounded-3xl p-8 flex flex-col justify-between text-center lg:text-left">
            <div>
              <span className="text-[9px] font-display font-semibold tracking-widest text-white/40 uppercase">SATISFACTION RATING</span>
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mt-4">
                <span className="font-serif text-6xl font-light text-white">{stats.avg}</span>
                <span className="text-white/40 text-lg">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mt-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star 
                    key={s} 
                    className={`h-5 w-5 ${
                      s <= Math.round(stats.avg) ? 'text-white fill-white opacity-85' : 'text-white/15'
                    }`} 
                  />
                ))}
              </div>
            </div>
            <div className="border-t border-white/5 mt-8 pt-6">
              <p className="text-xs text-white/40 font-sans leading-relaxed">
                Aggregated from {stats.total} verified journeys recorded inside the private registry database.
              </p>
            </div>
          </div>

          {/* Star Breakdown Progress bars */}
          <div className="bg-white/[0.01] border border-white/10 rounded-3xl p-8 flex flex-col justify-between space-y-4">
            <span className="text-[9px] font-display font-semibold tracking-widest text-white/40 uppercase">STAR RATINGS ANALYSIS</span>
            
            <div className="space-y-3 font-sans text-xs">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = stats.distribution[stars as 5|4|3|2|1] || 0;
                const percent = stats.total > 0 ? (count / stats.total) * 100 : 0;
                return (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="w-4 font-bold text-white/70 text-right shrink-0">{stars}★</span>
                    <div className="flex-grow bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-white h-full rounded-full transition-all duration-500" 
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="w-8 font-medium text-white/40 text-right shrink-0">
                      {Math.round(percent)}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Write a Review triggering box */}
          <div className="bg-white/[0.01] border border-white/10 rounded-3xl p-8 flex flex-col justify-between items-center text-center">
            <div className="space-y-4">
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-full text-white/75 inline-block">
                <PenTool className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-xl font-normal italic text-white">Add Your Travel Journal Entry</h4>
              <p className="text-xs text-white/50 font-sans leading-relaxed max-w-xs">
                Have you recently explored a destination with Navkar Travels? Share your valuable testimony with our exclusive circle of travelers.
              </p>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-6 w-full border border-white/20 text-[#f2f2f2] hover:bg-white hover:text-black py-3.5 rounded-xl font-display text-xs font-semibold tracking-widest transition-all cursor-pointer outline-none"
            >
              SHARE EXPERIENCES
            </button>
          </div>

        </div>

        {/* List of custom reviews */}
        <div className="space-y-8" id="reviews-list-container">
          {reviews.map((rev) => (
            <motion.div
              layout
              key={rev.id}
              className="bg-white/[0.01] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all space-y-6 animate-fade-in"
            >
              
              {/* Header metrics card */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                
                {/* Client layout */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 uppercase text-[#f2f2f2] font-display font-semibold">
                    {rev.name.slice(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-sans font-semibold text-white text-sm">{rev.name}</h4>
                      {rev.isVerified && (
                        <span className="inline-flex items-center gap-1 bg-white/5 text-white/70 text-[10px] font-sans font-medium py-0.5 px-2.5 rounded-full border border-white/10 uppercase tracking-wide">
                          <CheckCircle2 className="h-3 w-3" />
                          Verified Loyalty
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-white/40 font-sans">
                      <span>Curated Voyage: <strong className="text-white/60 font-medium">{rev.tripType}</strong></span>
                      <span className="hidden sm:inline">•</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                </div>

                {/* Stars container */}
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${
                        s <= rev.rating ? 'text-white fill-white opacity-85' : 'text-white/15'
                      }`}
                    />
                  ))}
                </div>

              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-white/60 font-sans font-light leading-relaxed italic">
                "{rev.text}"
              </p>

              {/* Like / interactivity buttons */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-5">
                <button
                  onClick={(e) => handleLike(rev.id, e)}
                  className="flex items-center gap-2 text-xs font-sans font-semibold text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 px-3 rounded-lg border border-white/5 cursor-pointer"
                >
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span>Recommend ({rev.likes})</span>
                </button>
              </div>

              {/* Host Official Response Section */}
              {rev.reply && (
                <div className="bg-white/[0.02] rounded-2xl p-5 border border-white/5 space-y-2 relative ml-4 sm:ml-8">
                  <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-white/30 rounded-full" />
                  <div className="flex items-center gap-2 text-xs font-display font-bold text-white tracking-wider">
                    <span>CONCIERGE MANAGEMENT REPLY</span>
                    <span className="p-0.5 bg-white text-black text-[8px] font-extrabold px-1.5 rounded-full">OFFICIAL</span>
                  </div>
                  <p className="text-xs text-white/50 font-sans font-light leading-relaxed">
                    "{rev.reply}"
                  </p>
                </div>
              )}

            </motion.div>
          ))}
        </div>

        {/* Modal Write Review Frame */}
        <AnimatePresence>
          {isFormOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="reviews-form-modal">
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFormOpen(false)}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
              />

              <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-[#121212] rounded-3xl border border-white/10 p-6 sm:p-8 w-full max-w-xl z-10 space-y-6 relative"
                >
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-full cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="text-center space-y-2">
                    <PenTool className="h-6 w-6 text-white/70 mx-auto" />
                    <h3 className="font-serif text-2xl font-normal italic text-white">Curate Your Testimony</h3>
                    <p className="text-xs text-white/40 font-sans">
                      Your authentic review helps maintain our 5-star personalized travel legacy.
                    </p>
                  </div>

                  {isSuccess ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8 space-y-3"
                    >
                      <div className="p-4 bg-white/5 rounded-full inline-block text-white border border-white/10">
                        <Check className="h-8 w-8 text-white opacity-95" />
                      </div>
                      <h4 className="font-sans font-bold text-white">Journal Entry Certified!</h4>
                      <p className="text-xs text-white/40 max-w-xs mx-auto">
                        Your review has been successfully indexed in the Navkar public registry.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmitReview} className="space-y-4 font-sans text-xs">
                      
                      {/* Name input */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-white/40 font-semibold uppercase font-display tracking-wider block text-[10px]">Loyalist Full Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sterling Cooper"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:bg-white/10 focus:border-white text-white outline-none text-xs font-semibold"
                        />
                      </div>

                      {/* Dropdown trip selector */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-white/40 font-semibold uppercase font-display tracking-wider block text-[10px]">Bespoke Trip Undertaken</label>
                        <select
                          value={tripType}
                          onChange={(e) => setTripType(e.target.value)}
                          className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 focus:bg-white/10 focus:border-white text-white outline-none text-xs font-semibold"
                        >
                          {DESTINATIONS.map((dest) => (
                            <option key={dest.id} value={dest.title} className="bg-[#121212]">
                              {dest.region} - {dest.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Interactive Rating select */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-white/40 font-semibold uppercase font-display tracking-wider block text-[10px]">Your Satisfaction Tier</label>
                        <div className="flex items-center gap-2 py-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setRating(s)}
                              onMouseEnter={() => setHoverRating(s)}
                              onMouseLeave={() => setHoverRating(0)}
                              className="focus:outline-none cursor-pointer"
                            >
                              <Star
                                className={`h-8 w-8 transition-transform hover:scale-110 ${
                                  s <= (hoverRating || rating) 
                                    ? 'text-white fill-white opacity-95' 
                                    : 'text-white/15'
                                }`}
                              />
                            </button>
                          ))}
                          <span className="text-white/40 ml-2 text-xs font-semibold uppercase">
                            {rating === 5 ? 'Exquisite' : rating === 4 ? 'Superb' : rating === 3 ? 'Pleasant' : 'Needs Care'}
                          </span>
                        </div>
                      </div>

                      {/* Review text field */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-white/40 font-semibold uppercase font-display tracking-wider block text-[10px]">Travel Chronicles Narrative</label>
                        <textarea
                          required
                          rows={4}
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          placeholder="Tell our luxury community about your custom meals, private transfers, and butler service..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:bg-white/10 focus:border-white text-white outline-none text-xs font-light leading-relaxed"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full border border-white/20 text-[#f2f2f2] hover:bg-white hover:text-black py-4 rounded-xl font-display text-xs font-semibold tracking-widest transition-colors cursor-pointer mt-2"
                      >
                        PUBLISH TO DIARY
                      </button>

                    </form>
                  )}

                </motion.div>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
