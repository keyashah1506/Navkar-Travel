/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, ShieldCheck, Sparkles, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ParallaxImage from './ParallaxImage';

const TEAM_VALUES = [
  {
    icon: <Sparkles className="h-5 w-5 text-brand-blue" />,
    title: '100% Customized For You',
    desc: 'Your travel package is custom built based on your exact requirements. Tell us your budget, meal choices, or hotel preferences, and we will sculpt a perfect personal plan.'
  },
  {
    icon: <Percent className="h-5 w-5 text-brand-green" />,
    title: 'Guaranteed Lowest Rates',
    desc: 'We bypass heavy agent commissions. Through direct integrations and massive offline room inventories, we offer India’s lowest wholesale rates. Show us a cheaper quote, and we will match it.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-brand-orange" />,
    title: 'No Hidden Charges',
    desc: 'Transparent pricing with Zero markups. What we quote is exactly what you get—enjoy customized, high-luxury or high-budget trips with full cost clarity.'
  }
];

const FLEET_CARS = [
  {
    id: 'sprinter',
    name: 'Mercedes-Benz Sprinter Royal-Jet Salon',
    type: 'VIP EXECUTIVE PRIVATE INTER-CITY COACH',
    capacity: 'Up to 12 Passengers in Ultimate Comfort',
    features: ['Fully reclining premium massage chairs', 'Ambient warm ceiling lighting controls', 'Refrigerated bottled waters and Indian snacks', 'High-speed Wi-Fi throughout the journey'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'autobahn',
    name: 'Bespoke Innova Crysta & SUV Fleet',
    type: 'PERSONAL TOUR ROAD VEHICLES',
    capacity: '4 to 6 Guests with Dedicated Driver',
    features: ['Plush customized leather seat cushions', 'Climate controlled multi-zone cooling air filters', 'Experienced regional driver speaking fluent Hindi/English', 'First-aid kit and emergency oxygen modules equipped'],
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'yacht',
    name: 'Bespoke Private Catamaran Cruise',
    type: 'COASTAL WATERWAY CHARTERS',
    capacity: 'Ideal for Custom Couples & Family Celebrations',
    features: ['Two spacious open viewing docks with lounges', 'On-board refreshments and traditional Indian tea', 'Experienced certified captain and lifeguards', 'Custom safety tracking mechanisms'],
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function About() {
  const [activeCar, setActiveCar] = useState(FLEET_CARS[0]);

  return (
    <section className="py-20 bg-med-navy text-[#FAF6F0]" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 1: Hero Heritage Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Legacy Story Text */}
          <div className="space-y-6">
            <p className="text-[10px] font-display font-semibold tracking-[0.4em] text-sky-400 uppercase">WHO WE ARE</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal italic text-white tracking-tighter leading-tight">
              We turn travel plans into <br />unforgettable experiences!
            </h2>
            <div className="h-[1px] w-16 bg-white/20" />
            
            <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              From international and domestic flights to customized holidays, luxury stays, honeymoon escapes, cruises, visas, passports, and travel insurance, we provide complete travel solutions tailored to your needs.
            </p>
            
            <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Every traveler is different—and so is every journey we create. With expert guidance, personalized planning, and end-to-end support, we make travel seamless, stress-free, and memorable.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 text-center border-t border-white/10">
              <div>
                <span className="font-serif text-3xl font-light text-white block">10k+</span>
                <span className="text-[9px] font-display text-slate-400 tracking-wider uppercase block mt-1">Custom Built Tours</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-light text-white block">₹0</span>
                <span className="text-[9px] font-display text-slate-400 tracking-wider uppercase block mt-1">Hidden Markups</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-light text-white block">100%</span>
                <span className="text-[9px] font-display text-slate-400 tracking-wider uppercase block mt-1">Price Beat Match</span>
              </div>
            </div>
          </div>

          {/* Majestic Hero Image Collage */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-med-ocean">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1200"
              alt="Custom Luxury Maldives Villa"
              className="w-full h-full"
              imgClassName="opacity-95"
              intensity={30}
            />
            <div className="absolute inset-4 border border-white/5 rounded-2xl pointer-events-none z-10" />
            <div className="absolute bottom-6 right-6 bg-med-navy/90 backdrop-blur-md text-white font-display text-[9px] font-semibold py-2 px-4 rounded-xl tracking-widest border border-white/10 uppercase z-10 shadow-sm">
              LOWEST EX-INDIA RATE GUARANTEE
            </div>
          </div>

        </div>

        {/* Section 2: Core Values blocks */}
        <div className="bg-med-ocean border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] rounded-3xl p-8 sm:p-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-[9px] font-display font-semibold tracking-[0.4em] text-sky-400 uppercase">OUR USP PROMISE</p>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal italic text-white text-center">Three Pillars of Better Travel Value</h3>
            <div className="h-[1px] w-12 bg-white/20 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_VALUES.map((val, i) => (
              <div key={i} className="space-y-4 p-4 hover:bg-med-navy/40 border border-transparent hover:border-white/5 rounded-2xl transition-all">
                <div className="p-3 bg-med-navy inline-block rounded-xl border border-white/10">
                  {val.icon}
                </div>
                <h4 className="font-sans font-semibold text-white text-sm">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Luxury Fleet Presentation Custom Interactive */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <p className="text-[10px] font-display font-semibold tracking-[0.4em] text-sky-400 uppercase">PRIVATE SIGHTSEEING</p>
              <h3 className="font-serif text-3xl text-white font-normal italic tracking-tighter">Your Custom Holiday Rides</h3>
              <p className="text-xs text-slate-300 font-sans font-light">Travel with your absolute comfort. No matter your group size, we match you with custom transport vehicles.</p>
            </div>

            {/* Quick Fleet Tabs */}
            <div className="flex gap-2 bg-med-navy p-1 rounded-xl border border-white/10" id="fleet-selectors">
              {FLEET_CARS.map((car) => (
                <button
                  key={car.id}
                  onClick={() => setActiveCar(car)}
                  className={`px-3 py-2 rounded-lg font-sans text-[10px] font-semibold tracking-wide transition-all cursor-pointer ${
                    activeCar.id === car.id
                      ? 'bg-med-terracotta text-white shadow-sm border border-med-terracotta font-bold'
                      : 'text-slate-400 border border-transparent hover:text-white'
                  }`}
                >
                  {car.id === 'sprinter' ? '12-Seater Sprinter' : car.id === 'autobahn' ? 'Innova / SUV' : 'Private Cruise'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Fleet Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-med-ocean border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch"
            >
              
              {/* Slide image */}
              <div className="lg:w-1/2 aspect-[16/10] bg-med-navy pointer-events-none relative overflow-hidden">
                <ParallaxImage
                  src={activeCar.image}
                  alt={activeCar.name}
                  className="w-full h-full"
                  imgClassName="opacity-95"
                  intensity={25}
                />
                <div className="absolute inset-0 bg-[#051026]/10 z-10" />
              </div>

              {/* Slide text specifications */}
              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <span className="p-1 px-2.5 bg-med-navy text-sky-400 text-[9px] font-display font-semibold uppercase tracking-widest rounded-md border border-white/5">
                    {activeCar.type}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal italic mt-4">
                    {activeCar.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-sans mt-1">CAPACITY: {activeCar.capacity}</p>
                </div>

                <div className="space-y-3 font-sans text-xs text-slate-300 leading-normal">
                  <p className="text-[9px] font-display font-semibold tracking-widest text-sky-400 uppercase">SIGNATURE TOUR APPOINTMENTS</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCar.features.map((feat, i) => (
                      <li key={i} className="flex gap-2 items-start bg-med-navy p-2.5 rounded-xl border border-white/5">
                        <Compass className="h-4 w-4 text-med-terracotta shrink-0 mt-0.5" />
                        <span className="text-[11px] font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
