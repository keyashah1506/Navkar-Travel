/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Award, Shield, Heart } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-med-navy text-slate-300 border-t border-white/10" id="app-footer">
      
      {/* Brand assurance credentials trust bar */}
      <div className="border-b border-white/5 bg-med-ocean/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-med-navy rounded-full border border-white/5">
                <Award className="h-5 w-5 text-sky-400" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold tracking-wider text-white">100% CUSTOM BUILT</h4>
                <p className="text-xs text-slate-300 mt-1">We design fully personalized holiday packages tailored strictly to your specific requirements.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-med-navy rounded-full border border-white/5">
                <Shield className="h-5 w-5 text-sky-400" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold tracking-wider text-white">LOWEST RATES GUARANTEED</h4>
                <p className="text-xs text-slate-300 mt-1">Show us any written competitor quote and we will match or beat it instantly.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="p-3 bg-med-navy rounded-full border border-white/5">
                <Heart className="h-5 w-5 text-sky-400" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold tracking-wider text-white">ONSITE ASSISTANCE</h4>
                <p className="text-xs text-slate-300 mt-1">Dedicated travel coordinators and 24/7 support across Kashmir, Kerala, Ladakh & globally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Presentation */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="text-white" showTagline={true} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
              Crafting beautiful custom-built travel packages tailored specifically to your family requirements at India’s absolute lowest rates, guaranteed. No middle-man commissions.
            </p>
          </div>

          {/* Luxury Offerings Quick Links */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-widest text-sky-400 uppercase mb-5 font-semibold">CUSTOM PACKAGES</h4>
            <ul className="space-y-3 font-sans text-xs text-slate-300">
              <li>
                <button onClick={() => handleLinkClick('destinations')} className="hover:text-white hover:font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer text-left">
                  Kashmir Gondola & Peaks Custom
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('destinations')} className="hover:text-white hover:font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer text-left">
                  Kerala Houseboat & Spice Hills
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('destinations')} className="hover:text-white hover:font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer text-left">
                  Bespoke Maldives Water Villas
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('destinations')} className="hover:text-white hover:font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer text-left">
                  Bali Private Pool Villa Escapes
                </button>
              </li>
            </ul>
          </div>

          {/* Quick linkages */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-widest text-sky-400 uppercase mb-5 font-semibold">COMPANY</h4>
            <ul className="space-y-3 font-sans text-xs text-slate-300">
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white hover:font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer text-left">
                  Our Story & Custom Vehicles
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('reviews')} className="hover:text-white hover:font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer text-left">
                  Client Diaries & Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white hover:font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer text-left">
                  Submit Custom Quote Request
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white hover:font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer text-left">
                  Corporate & Group Travel Discounts
                </button>
              </li>
            </ul>
          </div>

          {/* Global Branch Desk contacts */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold tracking-widest text-sky-400 uppercase mb-5 font-semibold">REGISTERED OFFICE</h4>
            <div className="space-y-3 text-xs text-slate-300 font-sans">
              <div className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <p>Navkar Travel - 206, Iscon Avenue, Opposite of Choice Restaurant, C.G. Road, Navrangpura, Ahmedabad-380009</p>
              </div>
              <div className="flex gap-2 items-start">
                <Phone className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919558328627" className="text-slate-300 hover:text-white transition-colors">+91 95583 28627 (Primary)</a>
                  <a href="tel:+919725224433" className="text-slate-300 hover:text-white transition-colors">+91 97252 24433 (Secondary)</a>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="mailto:navkar.holiday@gmail.com" className="text-slate-300 hover:text-white transition-colors">navkar.holiday@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright section */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-sans">
          <p>© {currentYear} Navkar Travels Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Charter</span>
            <span className="hover:text-white cursor-pointer">Terms & Indemnity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
