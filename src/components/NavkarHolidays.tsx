/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Plane, 
  Hotel, 
  Heart, 
  Shield, 
  Globe2, 
  FileText, 
  Sailboat, 
  MapPin, 
  Phone, 
  Mail, 
  Share2, 
  Copy, 
  Check, 
  MessageSquare, 
  Compass, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';
import { motion } from 'motion/react';

interface NavkarHolidaysProps {
  onInquire?: () => void;
}

const BUSINESS_SERVICES = [
  {
    title: 'International / Domestic Air Ticket',
    category: 'Flight Ticketing',
    icon: Plane,
    description: 'Best flight fares across all major domestic & international airlines with flexible changes and instant confirmation.',
    color: 'from-sky-500/20 to-blue-600/10',
    borderColor: 'border-sky-500/30',
    iconColor: 'text-sky-400'
  },
  {
    title: 'Holidays & Hotel Booking',
    category: 'Stays & Itineraries',
    icon: Hotel,
    description: 'Customized family vacations, group tours, luxury resort stays, and boutique hotel reservations worldwide.',
    color: 'from-amber-500/20 to-orange-600/10',
    borderColor: 'border-amber-500/30',
    iconColor: 'text-amber-400'
  },
  {
    title: 'Honeymoon Packages',
    category: 'Romantic Escapes',
    icon: Heart,
    description: 'Handcrafted romantic getaways with candlelit dinners, water villas, private transfers, and special surprise arrangements.',
    color: 'from-rose-500/20 to-pink-600/10',
    borderColor: 'border-rose-500/30',
    iconColor: 'text-rose-400'
  },
  {
    title: 'Travel Insurance',
    category: 'Safety & Protection',
    icon: Shield,
    description: 'Comprehensive medical, flight cancellation, baggage loss, and emergency travel insurance coverage.',
    color: 'from-emerald-500/20 to-teal-600/10',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400'
  },
  {
    title: 'Visas Assistance',
    category: 'Documentation',
    icon: Globe2,
    description: 'Expert documentation, appointment scheduling, and fast-track processing for Tourist, Business, and Family visas.',
    color: 'from-indigo-500/20 to-purple-600/10',
    borderColor: 'border-indigo-500/30',
    iconColor: 'text-indigo-400'
  },
  {
    title: 'Passport Services',
    category: 'Government Services',
    icon: FileText,
    description: 'Hassle-free support for fresh passport applications, renewals, name changes, and Tatkal passport processing.',
    color: 'from-cyan-500/20 to-blue-600/10',
    borderColor: 'border-cyan-500/30',
    iconColor: 'text-cyan-400'
  },
  {
    title: 'Cruise Booking',
    category: 'Ocean Voyages',
    icon: Sailboat,
    description: 'Luxury ocean liners and river cruises including Cordelia, Royal Caribbean, Costa Cruises, and Genting Dream.',
    color: 'from-violet-500/20 to-fuchsia-600/10',
    borderColor: 'border-violet-500/30',
    iconColor: 'text-violet-400'
  },
];

export default function NavkarHolidays({ onInquire }: NavkarHolidaysProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'NAVKAR Holidays - Digital Card',
          text: 'NAVKAR Holidays - Travel Services & Address (Ahmedabad)',
          url: window.location.href,
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="bg-med-navy text-[#FAF6F0] py-12 sm:py-16 space-y-16 sm:space-y-20" id="navkar-holidays-container">
      
      {/* 1. Digital Business Card Hero Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-med-ocean via-med-navy to-med-ocean rounded-3xl border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden space-y-8">
          
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-med-terracotta/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Badge Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-display font-semibold uppercase tracking-[0.3em] text-emerald-400 bg-emerald-500/10 py-1 px-3 rounded-full border border-emerald-500/20">
                Official Digital Business Card
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Share Digital Card"
              >
                <Share2 className="h-4 w-4" />
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-display font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Copy Link"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-amber-400" />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Main Card Content Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Brand Details */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-center gap-4">
                <Logo className="text-white" showTagline={false} />
              </div>

              <div>
                <span className="text-xs font-display font-bold tracking-[0.35em] text-sky-400 uppercase block mb-1">
                  Ahmedabad Headquarters
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-normal italic text-white tracking-tight leading-tight">
                  NAVKAR Holidays
                </h1>
              </div>

              <p className="text-xs sm:text-sm font-sans text-slate-300 font-light leading-relaxed">
                Welcome to the official digital business card for <strong className="text-white font-medium">NAVKAR Holidays</strong>. Explore our complete range of travel solutions and office location in Ahmedabad.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919725224433"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-med-terracotta hover:bg-med-terracotta/90 text-white text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-med-terracotta/20"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call +91 97252 24433</span>
                </a>

                <a
                  href="https://wa.me/919558328627?text=Hello%20NAVKAR%20Holidays%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Side Quick Contact Box */}
            <div className="md:col-span-5 bg-med-navy/80 rounded-2xl p-6 border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-xs font-display font-bold uppercase tracking-widest text-sky-400 border-b border-white/10 pb-3 flex items-center gap-2">
                <Compass className="h-4 w-4 text-amber-400" />
                <span>Contact Card</span>
              </h3>

              <div className="space-y-3.5 text-xs font-sans text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Office Address:</p>
                    <p className="text-slate-300 font-light mt-0.5">206, Iscon Avenue, Opp. Choice Restaurant, C.G. Road, Navrangpura, Ahmedabad - 380009.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Phone Support:</p>
                    <a href="tel:+919725224433" className="block hover:text-sky-300 transition-colors">+91 97252 24433</a>
                    <a href="tel:+919558328627" className="block hover:text-sky-300 transition-colors">+91 95583 28627</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Email Address:</p>
                    <a href="mailto:navkar.holiday@gmail.com" className="hover:text-sky-300 transition-colors">navkar.holiday@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Action Bar Footer inside card */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10 text-xs text-slate-400 font-sans">
            <span className="flex items-center gap-2">
              <ExternalLink className="h-3.5 w-3.5 text-sky-400" />
              <span>Official Business Card of Navkar Tours & Travels</span>
            </span>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-med-ocean hover:bg-med-ocean/80 border border-white/15 text-xs font-display font-semibold uppercase tracking-wider text-slate-200 hover:text-white transition-all cursor-pointer shadow-md"
              title="Copy Page Link"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-amber-400" />}
              <span>{copied ? 'Link Copied!' : 'Copy Page Link'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Services Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-3">
          <p className="text-[10px] font-display font-semibold tracking-[0.35em] text-sky-400 uppercase">
            Core Offerings
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal italic text-white tracking-tight">
            Our Travel Services
          </h2>
          <div className="h-[1px] w-12 bg-white/20 mx-auto" />
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BUSINESS_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`group relative bg-med-ocean/80 backdrop-blur-sm rounded-2xl p-6 border ${item.borderColor} shadow-lg hover:shadow-2xl hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Background soft glow gradient */}
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-med-navy/90 border border-white/10 ${item.iconColor} shadow-inner`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-display font-semibold tracking-widest text-slate-400 uppercase bg-white/5 py-1 px-2.5 rounded-full border border-white/5">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-display font-medium tracking-wider text-slate-400 uppercase block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-white font-normal italic leading-snug group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-sans text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {onInquire && (
                  <div className="pt-4 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between">
                    <button
                      onClick={onInquire}
                      className="text-[10px] font-display font-semibold uppercase tracking-widest text-sky-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Inquire for Service</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* 3. Address & Location Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-med-ocean via-med-navy to-med-ocean rounded-3xl border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-6">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            
            <div className="space-y-4 max-w-lg">
              <div className="inline-flex items-center gap-2 text-sky-400 font-display text-[10px] font-semibold uppercase tracking-widest">
                <MapPin className="h-4 w-4" />
                <span>Office Location</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal italic text-white leading-tight">
                NAVKAR Holidays
              </h3>

              <div className="font-sans text-sm text-slate-200 font-light leading-relaxed space-y-1 pl-4 border-l-2 border-sky-400/60">
                <p className="font-medium text-white">206, Iscon Avenue,</p>
                <p>Opp. Choice Restaurant,</p>
                <p>C.G. Road, Navrangpura,</p>
                <p className="text-sky-300 font-semibold">Ahmedabad - 380009.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=206+Iscon+Avenue%2C+Opposite+Choice+Restaurant%2C+C.G.+Road%2C+Navrangpura%2C+Ahmedabad%2C+Gujarat+380009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:shadow-sky-500/25"
              >
                <MapPin className="h-4 w-4" />
                <span>Open in Google Maps</span>
              </a>

              {onInquire && (
                <button
                  onClick={onInquire}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-white/15"
                >
                  <Compass className="h-4 w-4 text-amber-400" />
                  <span>Send Direct Inquiry</span>
                </button>
              )}
            </div>

          </div>

          {/* Embedded Google Maps View */}
          <div className="pt-2 relative z-10">
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-med-navy">
              <iframe
                title="NAVKAR Holidays Office Map Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Iscon%20Avenue%2C%20Opposite%20Choice%20Restaurant%2C%20CG%20Road%2C%20Navrangpura%2C%20Ahmedabad%20380009&t=&z=16&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Footer Brand Strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="py-6 px-8 rounded-2xl bg-med-ocean/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo className="h-8" showTagline={false} />
            <span className="text-xs text-slate-400 font-sans">
              NAVKAR Holidays — Ahmedabad
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-sans font-light">
            Authorized Digital Business Profile
          </p>
        </div>
      </section>

    </div>
  );
}
