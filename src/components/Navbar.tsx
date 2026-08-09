/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Curated Galleries' },
    { id: 'navkar-holidays', label: 'NAVKAR Holidays' },
    { id: 'reviews', label: 'Client Reviews' },
    { id: 'about', label: 'Our Story' },
    { id: 'contact', label: 'Contact & Booking' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-med-navy/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo Brand Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-4 cursor-pointer"
            id="nav-logo-container"
          >
            <Logo className="text-white" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10 font-sans" id="nav-desktop-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-1 py-1 text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-200 outline-none ${
                  activeTab === item.id 
                    ? 'text-white font-bold opacity-100' 
                    : 'text-slate-300 hover:text-white hover:opacity-100'
                }`}
                style={{ contentVisibility: 'auto' }}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-med-terracotta"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-6" id="nav-desktop-actions">
            <div className="flex flex-col items-end text-right">
              <a 
                href="tel:+919725224433" 
                className="text-[10px] uppercase tracking-[0.15em] font-bold text-white hover:text-med-terracotta transition-colors"
                title="Primary Support"
              >
                +91 97252 24433
              </a>
              <a 
                href="tel:+919558328627" 
                className="text-[9px] uppercase tracking-[0.15em] font-medium text-slate-400 hover:text-med-terracotta transition-colors"
                title="Secondary Support"
              >
                +91 95583 28627
              </a>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-3 border border-white/20 text-[10px] uppercase tracking-[0.3em] text-[#FAF6F0] hover:bg-med-terracotta hover:border-med-terracotta hover:text-white transition-colors cursor-pointer"
            >
              Build Custom Package
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center" id="nav-mobile-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-med-navy"
            id="nav-mobile-menu"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-sans text-xs uppercase tracking-[0.2em] transition-colors ${
                    activeTab === item.id
                      ? 'bg-med-ocean text-white font-bold border-l-2 border-med-terracotta'
                      : 'text-slate-300 hover:bg-med-ocean/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/10 pt-4 px-4 flex flex-col gap-3 font-sans">
                <div className="flex flex-col gap-2">
                  <a 
                    href="tel:+919558328627" 
                    className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-white"
                  >
                    <span className="text-[10px] text-med-terracotta font-bold">Primary:</span>
                    <span>+91 95583 28627</span>
                  </a>
                  <a 
                    href="tel:+919725224433" 
                    className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-white"
                  >
                    <span className="text-[10px] text-sky-400 font-bold">Backup:</span>
                    <span>+91 97252 24433</span>
                  </a>
                </div>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-4 border border-white/20 text-[10px] uppercase tracking-[0.3em] text-[#FAF6F0] hover:bg-med-terracotta hover:border-med-terracotta hover:text-white transition-colors cursor-pointer"
                >
                  Build Custom Package
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
