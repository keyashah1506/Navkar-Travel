/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, Check, Clock, BadgePercent } from 'lucide-react';
import { motion } from 'motion/react';
import { DESTINATIONS } from '../data/destinations';

interface ContactProps {
  preselectedDestination?: string;
  onClearPreselected?: () => void;
}

export default function Contact({ preselectedDestination, onClearPreselected }: ContactProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState(preselectedDestination || DESTINATIONS[0].title);
  const [travelers, setTravelers] = useState(2);
  const [classPref, setClassPref] = useState<'standard' | 'premium' | 'bespoke'>('bespoke');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync state if preselected values modify
  React.useEffect(() => {
    if (preselectedDestination) {
      setDestination(preselectedDestination);
    }
  }, [preselectedDestination]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    // Simulate submission and trigger detailed success summary
    setIsSubmitted(true);
    if (onClearPreselected) {
      onClearPreselected();
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setTravelers(2);
    setClassPref('bespoke');
    setDate('');
    setNotes('');
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 bg-[#0a0a0a]" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[10px] font-display font-semibold tracking-[0.4em] text-white/50 uppercase">GET A CUSTOMIZED ITINERARY • BEST RATE GUARANTEE</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-[#f2f2f2] tracking-tighter">Your Dream, Fully Custom-Built</h2>
          <div className="h-[1px] w-16 bg-white/20 mx-auto mt-3" />
          <p className="text-xs sm:text-sm font-sans text-white/50 font-light max-w-2xl leading-relaxed mx-auto">
            Submit your travel desires below. Give us your custom dates, diet restrictions, preferred budget, or landmarks. We guarantee to plan a personalized package at the absolute lowest rate across India. We will share your free custom quote on WhatsApp/Email under 120 minutes!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Coordinates Cards (col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Card */}
            <div className="bg-white/[0.01] border border-white/10 rounded-3xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12">
                <Sparkles className="h-48 w-48 text-white" />
              </div>
              
              <div className="space-y-2">
                <span className="text-[9px] font-display font-semibold tracking-widest text-[#f2f2f2]/60 uppercase">24/7 CUSTOM HOLIDAY DESK</span>
                <h3 className="font-serif text-2xl font-light text-white italic">Navkar Custom Planner</h3>
              </div>

              <div className="space-y-5 font-sans text-xs">
                <div className="flex gap-3 items-center">
                  <div className="p-2.5 bg-white/5 rounded-xl text-white/85 border border-white/10">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-white/40 mb-0.5 uppercase tracking-wider text-[9px]">DIRECT SIGHTSEEING WHATSAPP / CALL</p>
                    <p className="font-bold text-white text-sm">
                      <a href="tel:++919725224433" className="hover:text-brand-blue transition-colors">+91 97252 24433</a>
                      <span className="text-white/30 font-normal mx-2">|</span>
                      <a href="tel:+919558328627" className="hover:text-brand-blue transition-colors text-xs text-white/75">+91 95583 28627</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2.5 bg-white/5 rounded-xl text-white/85 border border-white/10">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-white/40 mb-0.5 uppercase tracking-wider text-[9px]">DIRECT QUOTE EMAIL DESK</p>
                    <p className="font-bold text-white">
                      <a href="mailto:navkar.holiday@gmail.com" className="hover:text-brand-blue transition-colors">navkar.holiday@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2.5 bg-white/5 rounded-xl text-white/85 border border-white/10">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-white/40 mb-0.5 uppercase tracking-wider text-[9px]">FASTEST TOUR ASSEMBLY TIME</p>
                    <p className="font-bold text-white/90">Under 120 Minutes on WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Branch locations list */}
            <div className="space-y-4">
              <p className="text-[9px] font-display font-semibold tracking-widest text-white/40 uppercase">OUR REGISTERED OFFICE</p>
              
              <div className="grid grid-cols-1 gap-4">
                
                {/* Ahmedabad Headquarters office */}
                <div className="bg-white/[0.01] border border-white/10 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-sans font-semibold text-white text-sm">Ahmedabad Headquarters</h4>
                    <span className="bg-white/5 text-[#f2f2f2] text-[8px] font-bold px-2 py-0.5 rounded-full border border-white/15">MAIN OFFICE</span>
                  </div>
                  <div className="flex gap-2 items-start text-xs text-white/50 font-sans leading-relaxed">
                    <MapPin className="h-4 w-4 text-white/70 shrink-0 mt-0.5" />
                    <p>Navkar Travel - 206, Iscon Avenue, Opposite of Choice Restaurant, C.G. Road, Navrangpura, Ahmedabad-380009</p>
                  </div>
                  <p className="text-[9px] text-white/40">SUPPORT TEL: +91 95583 28627 • +91 97252 24433</p>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Inquiry builder (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.01] border border-white/10 rounded-3xl p-6 sm:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-6 text-center py-8"
                  id="contact-success-panel"
                >
                  <div className="p-4 bg-white/5 rounded-full inline-block border border-white/15">
                    <Check className="h-8 w-8 text-white opacity-95" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-light text-white italic">Itinerary Design Initiated!</h3>
                    <p className="text-xs text-white/50 font-sans max-w-md mx-auto leading-relaxed">
                      Thank you! Our custom travel architects are already working hard on your requirements. We will coordinate with hotels and flight operators to build your custom package at the lowest rate available anywhere in India.
                    </p>
                  </div>

                  {/* Summary receipt parameters box */}
                  <div className="bg-[#121212] rounded-2xl p-6 text-left border border-white/10 text-xs font-sans space-y-3 max-w-sm mx-auto">
                    <p className="text-[9px] font-display font-medium text-white/50 tracking-wider uppercase border-b border-white/5 pb-2">Your Specifications Received</p>
                    
                    <div className="grid grid-cols-2 gap-y-3 text-white/70">
                      <div>
                        <span className="text-white/40 block text-[9px]">LEAD TRAVELER</span>
                        <strong className="font-semibold text-white">{fullName}</strong>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9px]">DIASPORA PLACE</span>
                        <strong className="font-semibold text-white">{destination}</strong>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9px]">TENTATIVE DEPARTURE</span>
                        <strong className="font-semibold text-white">{date || 'Flexible'}</strong>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9px]">BUDGET TIER</span>
                        <strong className="font-semibold text-white uppercase tracking-widest text-[9px] block mt-0.5">₹ {classPref} Custom</strong>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="border border-white/20 hover:border-white text-[#f2f2f2] hover:bg-white hover:text-black px-6 py-3.5 rounded-xl font-display text-xs font-semibold tracking-widest transition-all cursor-pointer"
                  >
                    BUILD ANOTHER TRAVEL PLAN
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-6 font-sans text-xs">
                  
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-serif text-xl font-normal text-white italic">Plan Your Custom Itinerary</h3>
                    <p className="text-[11px] text-white/50">Submit your choices and tell our experts exactly what you need.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-white/50 font-semibold uppercase font-display tracking-wider block text-[10px]">Lead Traveler Name</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Aditya Patel"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:bg-white/10 focus:border-white text-white outline-none text-xs font-semibold"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-white/50 font-semibold uppercase font-display tracking-wider block text-[10px]">Email For Custom Quote</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. aditya@gmail.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:bg-white/10 focus:border-white text-white outline-none text-xs font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone mandatory for direct WhatsApp delivery */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-white/50 font-semibold uppercase font-display tracking-wider block text-[10px]">WhatsApp Phone Number (For Quote Delivery)</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98200-12345"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:bg-white/10 focus:border-white text-white outline-none text-xs font-semibold"
                      />
                    </div>

                    {/* Date */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-white/50 font-semibold uppercase font-display tracking-wider block text-[10px]">Intended Departure Date</label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 focus:border-white text-white outline-none text-xs font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Destination dropdown selection */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-white/50 font-semibold uppercase font-display tracking-wider block text-[10px]">Custom Holiday Destination</label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3.5 focus:border-white text-white outline-none text-xs font-semibold"
                      >
                        {DESTINATIONS.map((dest) => (
                          <option key={dest.id} value={dest.title} className="bg-[#121212]">
                            {dest.region} - {dest.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Number of Travelers */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-white/50 font-semibold uppercase font-display tracking-wider block text-[10px]">Travel Party Count (Guests)</label>
                      <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 justify-between items-center h-[46px]">
                        <button
                          type="button"
                          onClick={() => setTravelers((p) => Math.max(1, p - 1))}
                          className="px-3 py-1 text-white/50 hover:text-[#f2f2f2] hover:bg-white/10 rounded-lg text-sm font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-semibold text-white">{travelers} Guests</span>
                        <button
                          type="button"
                          onClick={() => setTravelers((p) => Math.min(30, p + 1))}
                          className="px-3 py-1 text-white/50 hover:text-[#f2f2f2] hover:bg-white/10 rounded-lg text-sm font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Level of Service Premium buttons selection */}
                  <div className="space-y-2 text-left">
                    <label className="text-white/50 font-semibold uppercase font-display tracking-wider block text-[10px]">Preferred Budget Package tier</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['standard', 'premium', 'bespoke'] as const).map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => setClassPref(svc)}
                          className={`py-3.5 px-2.5 rounded-xl border font-sans text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            classPref === svc
                              ? svc === 'standard'
                                ? 'bg-brand-green/15 text-brand-green border-brand-green shadow-[0_0_15px_rgba(145,199,62,0.15)]'
                                : svc === 'premium'
                                ? 'bg-brand-orange/15 text-brand-orange border-brand-orange shadow-[0_0_15px_rgba(230,153,76,0.15)]'
                                : 'bg-brand-blue/15 text-brand-blue border-brand-blue shadow-[0_0_15px_rgba(81,176,228,0.15)]'
                              : 'bg-white/5 border-white/10 hover:border-white/30 text-white/50'
                          }`}
                        >
                          {svc === 'standard' ? 'Standard (Budget-Friendly)' : svc === 'premium' ? 'Premium (Best Value)' : 'Bespoke Luxury 👑'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes specifications block */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-white/50 font-semibold uppercase font-display tracking-wider block text-[10px]">Describe Your Specific Requirements</label>
                    <textarea
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify customized hotel star desires, flight ticket additions, Jain/pure vegetarian food preferences, private drivers, local guides, sightseeing schedule preferences, family members traveling with babies or elderly etc..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:bg-white/10 focus:border-white text-white outline-none text-xs font-light leading-relaxed"
                    />
                  </div>

                  {/* Inquire submit call */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 border border-brand-blue/30 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-black py-4 rounded-xl font-display text-xs font-bold tracking-widest transition-all cursor-pointer group"
                  >
                    <span>BUILD CUSTOM HOLIDAY SUMMARY</span>
                    <Send className="h-4 w-4 group-hover:translate-x-1 duration-250 transition-transform" />
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
